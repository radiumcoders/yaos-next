CREATE TABLE "data_schema" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "data_schema_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(255) NOT NULL,
	"github_url" varchar(255) NOT NULL,
	"visit_url" varchar(255) NOT NULL,
	"catagory" varchar(100) NOT NULL,
	"ui_raw_url" varchar(255),
	"ui_visit_url" varchar(255),
	"ui_registory_name" varchar(100),
	CONSTRAINT "data_schema_github_url_unique" UNIQUE("github_url"),
	CONSTRAINT "data_schema_visit_url_unique" UNIQUE("visit_url")
);
