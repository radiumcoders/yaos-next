import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  classname?: string;
  children: ReactNode;
}

function Container({ classname, children }: ContainerProps) {
  return (
    <main
      className={cn(
        classname,
        "w-full max-w-xl mx-auto",
        "border-border border border-dashed",
        "rounded",
        "mt-2 mb-2 p-4"
      )}
    >
      {children}
    </main>
  );
}

export default Container;
