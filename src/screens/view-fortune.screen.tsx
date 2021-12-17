import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../app.provider";
import { FortuneData } from "./home.screen";
import format from "date-fns/format";
import { FortuneType } from "../types";
import { useRoute } from "@react-navigation/native";
import Constants from "expo-constants";
const STATUSBAR_HEIGHT = Constants.statusBarHeight;

export const ViewFortune: React.FC = () => {
  const route = useRoute();
  return (
    <View
      style={[
        styles.container,
        /**@ts-ignore-line */
        { backgroundColor: `${route?.params?.color}` },
        StyleSheet.absoluteFill,
      ]}
    >
      <View>
        <Text style={styles.fortuneHeader}>
          {/**@ts-ignore-line */}
          {route?.params?.text as any}
        </Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {/**@ts-ignore-line */}
            {format(new Date(route?.params?.date), "dd MMM, yyyy")}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  fortuneHeader: {
    marginTop: Platform.OS === "ios" ? STATUSBAR_HEIGHT + 178 : 18,
    fontSize: 28,
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    // marginBottom: 273,
  },
  dateContainer: {
    borderRadius: 8,
    marginTop: 277,
    paddingTop: 8,
    paddingRight: 4,
    paddingBottom: 8,
    paddingLeft: 8,
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  date: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "400",
    marginRight: 4,
  },
});
