import { StyleSheet, Text, View, Image } from "react-native";
import Card from "./Card";
export default function Apartment(params) {
  const uris = [
    "https://images.unsplash.com/photo-1623298317883-6b70254edf31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGhvdXNlfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdXNlfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvdXNlfGVufDB8MHwwfHx8MA%3D%3D",
  ];
  const getRandomUri = () => {
    const randomIndex = Math.floor(Math.random() * uris.length);
    return uris[randomIndex];
  };
  return (
    <Card title={params.title}>
      <View style={styles.cardLayout}>
        <View style={styles.details}>
          <Text style={{ fontSize: 12, fontStyle: "italic", color: "#ec8e13" }}>
            {params.price}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 4 }}>
            {params.title}
          </Text>
          <Text style={{ marginBottom: 2 }}>{params.beds} Beds</Text>
          <Text style={{ fontSize: 13, color: "#ec8e13" }}>
            {params.location}
          </Text>
        </View>

        <Image
          width={100}
          height={70}
          borderRadius={10}
          source={{
            uri: getRandomUri(),
          }}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  details: {
    display: "flex",
    flexDirection: "column",
  },
  cardLayout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
