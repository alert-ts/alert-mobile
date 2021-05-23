import React from "react";
import { Text, TopNavigation } from "@ui-kitten/components";

export default function TopBar({ title }: { title: string }): JSX.Element {
  return (
    <TopNavigation
      style={{ marginTop: 22, marginLeft: "3%" }}
      title={(props: any): JSX.Element => (
        <Text category="h1" {...props}>
          {title}
        </Text>
      )}
    />
  );
}
