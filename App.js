import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { ModalPortal } from "react-native-modals";


import { Provider, useDispatch } from "react-redux";
import { createStore } from "redux";
import { savedPlaces } from "./SavedReducer";
const store = createStore(savedPlaces);

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
      <ModalPortal />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
