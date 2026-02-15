export const movieSwaggerSchema = {
  type: "object",
  required: [
    "name",
    "description",
    "casts",
    "trailerUrl",
    "releaseDate",
    "director",
  ],
  properties: {
    name: { type: "string", minLength: 2 },
    description: { type: "string", minLength: 5 },
    casts: { type: "array", items: { type: "string" } },
    trailerUrl: { type: "string" },
    language: { type: "string", default: "English" },
    releaseDate: { type: "string", format: "date" },
    director: { type: "string" },
    releaseStatus: { type: "string", default: "RELEASED" },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" },
  },
};
