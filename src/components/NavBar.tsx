import React from "react";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";

export default function NavBar({ navigation, state }: any): JSX.Element {
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
      <BottomNavigationTab
        title="AJUSTES"
        icon={(props: any): JSX.Element => (
          <Icon name="settings-outline" {...props} />
        )}
      />
    </BottomNavigation>
  );
}
