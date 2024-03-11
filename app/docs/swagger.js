import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Documentation QR Code Generator",
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3000"
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer"
            },
        },
        schemas: {
            userRegistration: {
                type: "object",
                required: ["name", "email", "password"],
                properties: {
                    name: {
                        type: "string"
                    },
                    email: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    },
                },
            },
            userLogin: {
                type: "object",
                required: ["email", "password"],
                properties: {
                    email: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    },
                },
            },
        },
    },
}

const swaggerOptions = {
    swaggerDefinition,
    apis: ["./app/routes/*.js"]
}

export default swaggerJSDoc(swaggerOptions)