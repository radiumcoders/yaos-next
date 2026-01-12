//title
//description
//github url
//catagory
//ui ? raw url : none
//ui ? visit url : none
//ui ? registory name : none

import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const DataSchema = pgTable("data_schema", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  github_url: varchar({ length: 255 }).notNull().unique(),
  visit_url: varchar({ length: 255 }).notNull().unique(),
  catagory: varchar({ length: 100 }).notNull(),
  ui_raw_url: varchar({ length: 255 }),
  ui_visit_url: varchar({ length: 255 }),
  ui_registory_name: varchar({ length: 100 }),
});

export type DataSchemaType = typeof DataSchema;

export enum CatagoryEnum {
  UI = "UI",
  PORTFOLIO_TEMPLATE = "PORTFOLIO_TEMPLATE",
  Tool = "Tool",
  Other = "Other",
}
