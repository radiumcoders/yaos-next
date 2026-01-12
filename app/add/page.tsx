"use client";
import Container from "@/components/core/container";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

function page() {
  const [value, setValue] = useState("UI Library");
  return (
    <Container>
      <FieldSet>
        <FieldLegend>ADD TO DATABASE :D</FieldLegend>
        <FieldDescription>
          This will appear in the public list of data.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input id="title" autoComplete="off" placeholder="8Bit-CN" />
            <FieldDescription>
              This will appear as the title for the entry.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Input
              id="description"
              autoComplete="off"
              placeholder="A brief description"
            />
            <FieldDescription>
              This will appear as the description for the entry.
            </FieldDescription>
          </Field>
          <Field>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                name="catagory"
                required
                value={value}
                onValueChange={(e) => setValue(e!)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ui-library">UI Library</SelectItem>
                  <SelectItem value="portfolio-template">
                    Portfolio Template
                  </SelectItem>
                  <SelectItem value="tool">Tool</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Field>
          <Field>
            <FieldLabel htmlFor="github-url">Github Url</FieldLabel>
            <Input
              id="github-url"
              autoComplete="off"
              placeholder="https://github.com/username/repository"
            />
            <FieldDescription>
              This will be the URL to the project's GitHub repository.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="visit-url">Visit Url</FieldLabel>
            <Input
              id="visit-url"
              autoComplete="off"
              placeholder="https://example.com"
            />
            <FieldDescription>
              This will be the URL to visit the project.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="Raw-url">Raw Url For Registry.json</FieldLabel>
            <Input
              id="Raw-url"
              autoComplete="off"
              placeholder="https://github.com/TheOrcDev/8bitcn-ui/blob/main/registry.json"
            />
            <FieldDescription>
              This will be the method to obtain the component names.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="registry">Registry for ShadCN</FieldLabel>
            <Input
              id="registry"
              autoComplete="off"
              placeholder="A brief description"
            />
            <FieldDescription>
              This will be a method to generate command for ShadCN add.
            </FieldDescription>
          </Field>
          <Field>
            <Button>Add to Database</Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </Container>
  );
}

export default page;
