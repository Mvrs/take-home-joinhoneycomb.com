import React from "react";
import {
  ImageBackgroundBase,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Constants from "expo-constants";
import { useAppContext } from "../app.provider";
import { useNavigation, useRoute } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const STATUSBAR_HEIGHT = Constants.statusBarHeight;

export const CreateFortune = ({ fortune, showButton = "" }: any) => {
  const route = useNavigation();
  const { handleCreateFortune, handleChangeFortune } = useAppContext();
  const [newFortune, setNewFortune] = React.useState<string>("");

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ fontSize: 28, color: "#000", fontWeight: "700" }}
            placeholder="Start writing..."
            value={newFortune}
            placeholderTextColor="rgba(133, 133, 133, 0.3)"
            onChange={() => handleChangeFortune}
          />
        </View>
        <View style={[styles.button, { display: showButton }]}>
          <Pressable onPress={() => handleCreateFortune}>
            <Text
              style={{
                color: "#fff",
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Done
            </Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
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
  inputContainer: {
    marginTop: Platform.OS === "ios" ? STATUSBAR_HEIGHT + 81 : 18,
  },

  button: {
    position: "absolute",
    bottom: -450,
    right: 20,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#000",
    borderRadius: 12,
  },
});
