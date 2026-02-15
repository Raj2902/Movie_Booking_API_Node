import "dotenv/config";
import { movieSwaggerSchema } from "./swagger-schemas/movie.swagger.schema.ts";
export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movie Booking Application APIs",
      version: "1.0.0",
      description: "List of all the movie booking application APIs",
    },
    servers: [
      {
        url: process.env.LOCAL_URL,
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        Movie: movieSwaggerSchema,
        Theatre: movieSwaggerSchema,
      },
    },
  },
  apis: ["./routes/*.ts"], // Path to the API routes folders
};
