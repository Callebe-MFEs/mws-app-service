export const greetingsSchemas = {
  Greetings: {
    type: "object",
    properties: {
      greetings: {
        type: "string",
        example: "Hello World",
      },
    },
  },
};

export const greetingsPaths = {
  "/greetings": {
    get: {
      tags: ["greetings"],
      summary: "greetings",
      description: "be greeted",
      operationId: "getGreetings",
      parameters: [
        {
          name: "who",
          in: "query",
          description: "Who is being greeted?",
          required: false,
          style: "form",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          description: "Greeted successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Greetings",
              },
            },
          },
        },
        "500": {
          description: "Internal Server Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Internal Server Error",
                  },
                },
              },
            },
          },
        },
      },
      deprecated: false,
    },
  },
};
