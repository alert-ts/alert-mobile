import React from "react";
import { Layout, Text, Input } from "@ui-kitten/components";

import TopBar from "../components/TopBar";

export default function Search(): JSX.Element {
  return (
    <Layout style={{ flex: 1, alignItems: "center" }}>
      <TopBar title="Pesquisar" />
      <Layout
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          width: "90%",
        }}
      >
        <Input placeholder="Danilo Santana..." />
      </Layout>
    </Layout>
  );
}
