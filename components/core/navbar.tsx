"use client";

import {
  HouseSimpleIcon,
  MoonIcon,
  PlusIcon,
  SunIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Container from "./container";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { ButtonGroup } from "../ui/button-group";
import Link from "next/link";

function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Container classname="flex items-center justify-between">
      <pre className="text-[2px] font-mono font-black leading-tight">
        {`\`YMM'   \`MM'  db       .g8""8q.    .M"""bgd
  VMA   ,V   ;MM:    .dP'    \`YM. ,MI    "Y
   VMA ,V   ,V^MM.   dM'      \`MM \`MMb.    
    VMMP   ,M  \`MM   MM        MM   \`YMMNq.
     MM    AbmmmqMA  MM.      ,MP .     \`MM
     MM   A'     VML \`Mb.    ,dP' Mb     dM
   .JMML.AMA.   .AMMA. \`"bmmd"'   P"Ybmmd"  `}
      </pre>
      <div className="flex gap-2">
          <Link href={"/"}>
            <Button variant={"outline"} size={"icon"}>
              <HouseSimpleIcon weight="bold" size={32} />
            </Button>
          </Link>
          {mounted && (
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <MoonIcon weight="bold" size={32} />
              ) : (
                <SunIcon weight="bold" size={32} />
              )}
            </Button>
          )}
          <Link href={"/add"}>
            <Button variant={"outline"}>
              <PlusIcon weight="bold" size={32} />
              Add
            </Button>
          </Link>
      </div>
    </Container>
  );
}

export default Navbar;
