import React, { ComponentProps, ReactElement } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import Constants from "expo-constants";
import { logger } from "react-native-logs";

import { FortuneType } from "../types";
import Data from "../data/fortune-data.json";
import format from "date-fns/format";
import { useNavigation } from "@react-navigation/native";
import { FloatingAction } from "react-native-floating-action";
import { CreateFortune } from "./create-fortune.screen";
import { useAppContext } from "../app.provider";
import { StatusBar } from "expo-status-bar";

const STATUSBAR_HEIGHT = Constants.statusBarHeight;

export const FortuneData = ({ text, date, color }: FortuneType) => {
  return (
    <View style={styles.cardContainer}>
      <StatusBar style="dark" />
      <View style={[{ backgroundColor: `${color}` }, styles.card]}>
        <Text style={styles.cardDescription}>{text}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {format(new Date(date), "dd MMM, yyyy")}
          </Text>
        </View>
      </View>
    </View>
  );
};

type FortuneProps = {
  handleSelectFortune: (fortuneOption: FortuneType) => void;
};

export const Home: React.FC<FortuneProps> = () => {
  const { fortuneList, newFortune } = useAppContext();
  const navigation = useNavigation<string | any>();
  // const fetchData = fortuneList.map(f => f);

  const renderItem = ({ item, index }: any) => {
    if (index % 6 === 0) {
      return (
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            display: "none",
          }}
        >
          <View style={{ flex: 1 }}>
            <Pressable>
              <FortuneData
                text={item.text}
                date={item.date}
                color={item.color}
              />
            </Pressable>
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            margin: 3,
          }}
        >
          <Pressable
            onPress={() =>
              navigation.navigate("View Fortune", {
                color: item.color,
                date: item.date,
                text: item.text,
              })
            }
          >
            <FortuneData text={item.text} date={item.date} color={item.color} />
          </Pressable>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>My Fortunes</Text>
      </View>
      <View>
        <CreateFortune
          // handleCreateFortune={appContext.handleCreateFortune}
          showButton={"none"}
        />
      </View>
      <SafeAreaView>
        <FlatList
          data={fortuneList}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
        />
      </SafeAreaView>
      <View style={{ position: "absolute", bottom: 10, right: -25 }}>
        <FloatingAction
          buttonSize={60}
          iconHeight={15}
          iconWidth={15}
          color="#000000"
          // actions={[{ text: "Hi" }]}
          onPressMain={() => navigation.navigate("Create Fortune")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    position: "relative",
  },
  headerContainer: {
    marginTop: Platform.OS === "ios" ? STATUSBAR_HEIGHT + 28 : 18,
  },
  header: {
    fontWeight: "700",
    fontSize: 32,
    marginBottom: 24,
  },
  cardContainer: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  card: {
    flexGrow: 1,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 28,
    paddingBottom: 28,
    width: "100%",

    opacity: 1.8,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 30,
    borderRadius: 20,
  },
  cardDescription: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  dateContainer: {
    borderRadius: 8,
    marginTop: 32,
    paddingTop: 8,
    paddingRight: 4,
    paddingBottom: 8,
    paddingLeft: 8,
    alignSelf: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  date: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "400",
    marginRight: 4,
  },
});
