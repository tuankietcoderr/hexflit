export const domain =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://hexamovie.vercel.app";
