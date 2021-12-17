import React, { memo, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext } from "react";
import { FortuneType } from "./types";
import Data from "../src/data/fortune-data.json";

type AppData = {
  fortuneList: FortuneType[];
};

type Fortune = Pick<FortuneType, "text">;

const dataKey = "fortune-cookie-data";

const _data = Data.fortunes.map(f => f);

const setAppData = async (appData: AppData): Promise<void> => {
  try {
    await AsyncStorage.setItem(dataKey, JSON.stringify(appData));
  } catch {}
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const result = await AsyncStorage.getItem(dataKey);
    if (result) {
      return JSON.parse(result);
    }
  } catch {}
  return null;
};

type AppContextType = {
  fortuneList: FortuneType[];
  handleSelectedFortune?: (fortunes: FortuneType) => void;
  newFortune?: string;
  text?: string;
  date?: string;
  handleChangeFortune?: (fortunes: Fortune) => void;
  handleCreateFortune?: (fortunes: FortuneType) => void;
};

const AppContext = createContext<AppContextType>({
  fortuneList: [],
  // onChange: () => {},
  newFortune: "",
  handleChangeFortune: () => {},
  handleSelectedFortune: () => {},
  handleCreateFortune: () => {},
});

export const AppProvider: React.FC = ({ children }) => {
  const [fortuneList, setFortuneList] = React.useState<FortuneType[]>(_data);
  const [newFortune, setNewFortune] = React.useState<string>();

  const handleCreateFortune = React.useCallback((fortunes: FortuneType) => {
    setFortuneList(current => {
      const newValue = [
        ...current,
        { text: fortunes.text, color: fortunes.color, date: Date.now() },
      ];
      // setAppData({ fortuneList: newValue });

      setNewFortune("");
      return newValue;
    });
  }, []);

  const handleChangeFortune = React.useCallback((event: any) => {
    const fortune = event.target.value;
    setNewFortune(fortune);
  }, []);

  // created a huge bug

  // React.useEffect(() => {
  //   const fetchAppData = async () => {
  //     const data = await getAppData();
  //     setFortuneList(data!!.fortuneList);
  //   };
  //   fetchAppData();
  // }, []);

  return (
    <AppContext.Provider
      value={{
        fortuneList,
        handleCreateFortune,
        handleChangeFortune,
        newFortune,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
