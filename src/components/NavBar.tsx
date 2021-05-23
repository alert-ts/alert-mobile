import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";

import User from "../views/User";

const { Navigator, Screen }: any = createBottomTabNavigator();

function BottomTabBar({ navigation, state }: any): JSX.Element {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index: number): void =>
        navigation.navigate(state.routeNames[index])
      }
    >
      <BottomNavigationTab
        title="FEED"
        icon={(props: any): JSX.Element => (
          <Icon name="home-outline" {...props} />
        )}
      />
      <BottomNavigationTab
        title="PESQUISAR"
        icon={(props: any): JSX.Element => (
          <Icon name="search-outline" {...props} />
        )}
      />
      <BottomNavigationTab
        title="PERFIL"
        icon={(props: any): JSX.Element => (
          <Icon name="person-outline" {...props} />
        )}
      />
    </BottomNavigation>
  );
}

function TabNavigator(): JSX.Element {
  return (
    <Navigator
      tabBar={(props: any): JSX.Element => <BottomTabBar {...props} />}
    >
      <Screen name="Feed" component={User} />
      <Screen name="Search" component={User} />
      <Screen name="Profile" component={User} />
    </Navigator>
  );
}

export default function NavBar(): JSX.Element {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
