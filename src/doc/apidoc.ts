import { checkSchemas, checkResponses, checkPaths } from "./checks";

export const apiDocumentation = {
  openapi: "3.1.0",
  info: {
    title: "My Workspace MFE Service API",
    version: "0.0.1",
    summary: "MFE Service API exposes features to manage MFE registrations and discovery",
    description: "MFE Service API exposes features to manage MFE registrations and discovery",
    contact: {
      name: "Callebe Gomes",
      email: "callebe.gomes@cnhind.com",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  tags: [
    {
      name: "mfe-service",
      description: "mfe-service operations",
    },
  ],
  paths: {
    ...checkPaths,
  },
  components: {
    schemas: {
      ...checkSchemas,
    },
    responses: {
      ...checkResponses,
    },
  },
};
