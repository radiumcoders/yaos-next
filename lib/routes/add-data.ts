import { db } from "@/db";
import { DataSchema } from "@/db/schema";
import Elysia, { t } from "elysia";

export const addData = new Elysia({ prefix: "/data" }).post(
  "/add",
  async ({ body }) => {
    const title = body.title.replace(/ /g, "-");

    await db.insert(DataSchema).values({
      title: title,
      github_url: body.githubUrl,
      visit_url: body.visitUrl,
      catagory: body.catagory,
      ui_raw_url: body.uiRawUrl,
      ui_visit_url: body.uiVisitUrl,
      ui_registory_name: body.uiRegistoryName,
    });
  },
  {
    body: t.Object({
      title: t.String(),
      githubUrl: t.String(),
      visitUrl: t.String(),
      catagory: t.String(),
      uiRawUrl: t.String(),
      uiVisitUrl: t.String(),
      uiRegistoryName: t.String(),
    }),
  }
);
