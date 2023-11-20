"use client";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/styles";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <div className="" style={{ minHeight: "100vh", background: "#fff" }}>
        quang test
        <div className="" onClick={() => router.push("/demo-components")}>
          next demo components
        </div>
      </div>
    </ThemeProvider>
  );
}
