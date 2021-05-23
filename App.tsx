import { StatusBar } from "expo-status-bar";
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import NavBar from "./src/components/NavBar";

export default function App(): JSX.Element {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <StatusBar style="light" />
        <NavBar />
      </ApplicationProvider>
    </>
  );
}
