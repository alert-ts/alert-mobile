import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NavBar from "./components/NavBar";

import Feed from "./views/Feed";
import Search from "./views/Search";
import User from "./views/User";

const { Navigator, Screen }: any = createBottomTabNavigator();

function TabNavigator(): JSX.Element {
  return (
    <Navigator
      tabBar={(props: any): JSX.Element => <NavBar {...props} />}
    >
      <Screen name="Feed" component={Feed} />
      <Screen name="Search" component={Search} />
      <Screen name="Profile" component={User} />
    </Navigator>
  );
}

export default function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
