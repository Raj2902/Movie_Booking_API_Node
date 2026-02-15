export const movieSwaggerSchema = {
  type: "object",
  required: ["name", "city", "pincode"],
  properties: {
    name: { type: "string", minLength: 5 },
    description: { type: "string" },
    city: { type: "string" },
    pincode: { type: "string" },
    address: { type: "string" },
    movies: { type: "array", items: { type: "string" } },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" },
  },
};
