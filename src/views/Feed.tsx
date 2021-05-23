import React from "react";
import { Layout, Text } from "@ui-kitten/components";

import TopBar from "../components/TopBar";

export default function Feed(): JSX.Element {
  return (
    <Layout
      style={{ flex: 1, alignItems: "center" }}
    >
      <TopBar title="Feed" />
      <Text>Feed view</Text>
    </Layout>
  );
}
