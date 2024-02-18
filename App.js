import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApartmentsPage from "./pages/ApartmentsPage";
import ApartmentDetailsPage from "./pages/ApartmentDetailsPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ApartmentsPage}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Apartment" component={ApartmentDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <ApartmentsPage /> */}
    //   <ApartmentDetailsPage />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 60,
  },
});
