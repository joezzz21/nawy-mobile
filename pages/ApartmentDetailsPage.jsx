import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Card from "../components/Card";
export default function ApartmentDetailsPage({ navigation, route, uri }) {
  const [apartment, setApartment] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
    };
    fetch(`http://192.168.1.2:8000/apartments/${route.params.id}`, options)
      .then((response) => response.json())
      .then((data) => {
        setApartment(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const getCurrencyVal = (val) =>
    val.toLocaleString("en-US", {
      style: "currency",
      currency: "EGP",
    });

  const squareMeterSymbol = "\u00B2";
  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}
    >
      <Image
        height={200}
        borderRadius={10}
        source={{
          uri: "https://images.unsplash.com/photo-1623298317883-6b70254edf31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGhvdXNlfGVufDB8MHwwfHx8MA%3D%3D",
        }}
      />
      <Text style={{ fontSize: 26, marginVertical: 10, fontWeight: "bold" }}>
        {apartment.title}
      </Text>
      <Text style={{ fontSize: 19, opacity: 0.6, marginVertical: 10 }}>
        {apartment.location}
      </Text>
      <Text style={styles.price}>
        {apartment.price !== undefined && getCurrencyVal(apartment.price)}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginBottom: 4,
              paddingHorizontal: 10,
            }}
          >
            {apartment.beds}
          </Text>
          <Text style={{ color: "#ec8e13" }}>Beds</Text>
        </Card>
        <Card>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginBottom: 4,
              paddingHorizontal: 10,
            }}
          >
            2
          </Text>
          <Text style={{ color: "#ec8e13" }}>Baths</Text>
        </Card>
        <Card>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginBottom: 4,
              paddingHorizontal: 10,
            }}
          >
            {apartment.size} m{squareMeterSymbol}
          </Text>
          <Text style={{ color: "#ec8e13" }}>Size</Text>
        </Card>
      </ScrollView>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
          {" "}
          About this place{" "}
        </Text>
        <Text style={{ textAlign: "justify" }}>
          {" "}
          When one thinks the views of Lake Tahoe could not get any better, this
          fantastic home takes the win. The stunning home is in desirable Maria
          Bay, Nevada, with panoramic views from the back deck. The property
          offers a private beach, perfect for a summer getaway. This place is
          great for families or a group of friends looking to enjoy the nature
          and outdoor activities in Lake Tahoe. The home features a modern
          design and comfortable furnishings. The open living area has large
          windows, allowing guests to take in the beautiful scenery. Guests can
          relax by the fireplace or step out onto the deck to breathe in the
          fresh mountain air. The kitchen is fully equipped for cooking meals at
          home. The home has four bedrooms and two bathrooms, comfortably
          accommodating up to eight guests. The master bedroom has a king bed
          and an en suite bathroom. The second bedroom also has a king bed. The
          third bedroom has a queen bed, and the fourth bedroom has two twin
          beds. The spacious deck has a barbecue grill and outdoor seating.
          Guests can dine al fresco while enjoying the lake and mountain views.
          The property is close to the beach, making it easy to spend the day
          swimming, paddleboarding, or simply relaxing on the shore. The home is
          also near hiking and biking trails, as well as restaurants and shops
          in Kings Beach. In the winter, guests can drive to nearby ski resorts
          for a day on the slopes. Whether you're planning a family vacation or
          a group getaway, this Lake Tahoe home offers a beautiful setting and
          modern comforts.{" "}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 8,
    marginBottom: 8,
  },
  price: {
    marginBottom: 10,
    fontSize: 18,
    color: "#ec8e13",
  },
});
