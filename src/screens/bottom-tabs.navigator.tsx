import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./home.screen";
import { ViewFortune } from "./view-fortune.screen";
import { CreateFortune } from "./create-fortune.screen";
import { createStackNavigator } from "@react-navigation/stack";

const BottomTabs = createBottomTabNavigator();

const Stack = createStackNavigator();

const CreateFortuneStackNavigator = () => {
  return (
    <Stack.Screen
      name="Create Fortune"
      component={CreateFortune}
      options={{ presentation: "modal" }}
    />
  );
};

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
    // initialRouteName="Home"
    // screenOptions={({ route }) => ({
    //   // tabBarActiveTintColor: theme.colorBlue,
    //   // tabBarInactiveTintColor: theme.colorGrey,
    //   // tabBarShowLabel: false
    //   tabBarIcon: ({ color, size }) => {
    //     if (route.name === 'Home') {
    //       return <HomeIcon color={color} size={size} />;
    //     }
    //     if (route.name === 'History') {
    //       return <HistoryIcon color={color} size={size} />;
    //     }
    //     if (route.name === 'Analytics') {
    //       return <AnalyticsIcon color={color} size={size} />;
    //     }
    //     return null;
    //   },
    // })}
    >
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
