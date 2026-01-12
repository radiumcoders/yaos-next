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
      <div>
        <ButtonGroup>
          <Button variant={"outline"} size={"icon"}>
            <HouseSimpleIcon weight="bold" size={32} />
          </Button>
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
          <Button variant={"outline"}>
            <PlusIcon weight="bold" size={32} />
            Add
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default Navbar;
