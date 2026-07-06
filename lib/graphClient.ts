import "isomorphic-fetch";
import { ConfidentialClientApplication } from "@azure/msal-node";
import { Client } from "@microsoft/microsoft-graph-client";

const tenantId = process.env.AZURE_TENANT_ID || "";
const clientId = process.env.AZURE_CLIENT_ID || "";
const clientSecret = process.env.AZURE_CLIENT_SECRET || "";
const organizerObjectId = process.env.TEAMS_ORGANIZER_OBJECT_ID || "";

const msalConfig = {
  auth: {
    clientId: clientId,
    authority: `https://login.microsoftonline.com/${tenantId}`,
    clientSecret: clientSecret,
  },
};

let msalClient: ConfidentialClientApplication | null = null;

try {
  if (tenantId && clientId && clientSecret) {
    msalClient = new ConfidentialClientApplication(msalConfig);
  }
} catch (error) {
  console.error("Failed to initialize MSAL Node client:", error);
}

const getAccessToken = async () => {
  if (!msalClient) {
    throw new Error("MSAL Client not initialized. Check Azure environment variables.");
  }

  const tokenRequest = {
    scopes: ["https://graph.microsoft.com/.default"],
  };

  try {
    const response = await msalClient.acquireTokenByClientCredential(tokenRequest);
    if (!response || !response.accessToken) {
      throw new Error("Failed to acquire access token.");
    }
    return response.accessToken;
  } catch (error) {
    console.error("Error acquiring token via MSAL:", error);
    throw error;
  }
};

export const graphClient = Client.init({
  authProvider: async (done) => {
    try {
      const accessToken = await getAccessToken();
      done(null, accessToken);
    } catch (error) {
      done(error as Error, null);
    }
  },
});

export const createTeamsMeeting = async (subject: string, startDateTime: string, endDateTime: string): Promise<string> => {
  if (!organizerObjectId) {
    throw new Error("Missing TEAMS_ORGANIZER_OBJECT_ID in environment variables.");
  }

  const onlineMeeting = {
    startDateTime,
    endDateTime,
    subject,
  };

  try {
    const res = await graphClient
      .api(`/users/${organizerObjectId}/onlineMeetings`)
      .post(onlineMeeting);

    if (!res || !res.joinWebUrl) {
      throw new Error("Failed to create online meeting or retrieve joinWebUrl.");
    }

    return res.joinWebUrl;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Graph API Error creating Teams meeting:", message);
    throw error;
  }
};
