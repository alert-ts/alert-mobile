import React from "react";
import { Layout, Text } from "@ui-kitten/components";

import TopBar from "../components/TopBar";

export default function Settings(): JSX.Element {
  return (
    <Layout
      style={{ flex: 1, alignItems: "center" }}
    >
      <TopBar title="Ajustes" />
      <Text>Settings view</Text>
    </Layout>
  );
}
