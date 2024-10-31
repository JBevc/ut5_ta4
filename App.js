import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  const imagenes = [
    "https://i.pinimg.com/564x/e3/ee/d4/e3eed4c2aa1bac40a274fb633388d836.jpg",

    "https://i.pinimg.com/564x/9a/e0/89/9ae0893f5bb9f73d6b1dc7ba74a5dfda.jpg",

    "https://i.pinimg.com/564x/83/d6/df/83d6dfca53a99b7b403308cf86f22ae2.jpg",

    "https://i.pinimg.com/564x/8e/83/8e/8e838e34b5f872351d43fb79b9281cae.jpg",
  ];

  const [index, setIndex] = React.useState(1);

  function siguienteFoto() {
    setIndex((index + 1) % imagenes.length);
  }

  function anteriorFoto() {
    setIndex((index - 1 + imagenes.length) % imagenes.length);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imagenes[index],
          }}
        />
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonBackground}>
          <Button title="anterior" color="white" onPress={anteriorFoto} />
        </View>

        <View style={styles.buttonBackground}>
          <Button title="siguiente" color="white" onPress={siguienteFoto} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  buttonBackground: {
    backgroundColor: "#0077b6",
    borderRadius: 15,
    padding: 5,
    margin: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
