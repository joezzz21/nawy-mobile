import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Apartment from "../components/Apartment";
export default function ApartmentsPage({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
    };
    fetch("http://192.168.1.2:8000/apartments", options)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const getCurrencyVal = (val) =>
    val.toLocaleString("en-US", {
      style: "currency",
      currency: "EGP",
    });

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ margin: 8, fontSize: 30, fontWeight: "bold" }}>
        All Apartments
      </Text>
      <ScrollView>
        {data.map((apartment) => (
          <TouchableOpacity
            key={apartment.id}
            onPress={() =>
              navigation.navigate("Apartment", { id: apartment.id })
            }
          >
            <Apartment
              key={apartment.id}
              title={apartment.title}
              price={getCurrencyVal(apartment.price)}
              beds={apartment.beds}
              location={apartment.location}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
