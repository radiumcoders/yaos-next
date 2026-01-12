import { getData } from "@/lib/routes/get-data";
import { Elysia } from "elysia";

const app = new Elysia({ prefix: "/api" })
  .get("/hello", () => "YAOS ROCKS!")
  .use(getData);

export const GET = app.fetch;
export const POST = app.fetch;

export type app = typeof app;
