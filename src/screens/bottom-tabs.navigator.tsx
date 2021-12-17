import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./home.screen";
import { ViewFortune } from "./view-fortune.screen";
import { CreateFortune } from "./create-fortune.screen";

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <BottomTabs.Screen
        name="View Fortune"
        component={ViewFortune}
        options={{ headerShown: false }}
      />
      <BottomTabs.Screen
        name="Create Fortune"
        options={{ headerShown: false }}
        component={CreateFortune}
      />
    </BottomTabs.Navigator>
  );
};
