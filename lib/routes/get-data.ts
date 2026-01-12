import { db } from "@/db";
import { DataSchema } from "@/db/schema";
import Elysia from "elysia";

export const getData = new Elysia({prefix: "/data"}).get("/all", async () => {
  const data = await db.select().from(DataSchema);
  return data;
}); 