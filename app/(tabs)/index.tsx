import { useState } from "react";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
} from "react-native";

import Loading from "../../src/components/Loading.tsx";

const App = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.background}>
      <Image
        style={styles.image}
        source={require("../../assets/images/loginIcon.png")}
      />
      <TextInput
      inputMode="email"
        style={styles.input}
        placeholder="Enter Your Email"
        value={name}
        onChangeText={setName}
      ></TextInput>
      <TextInput
      secureTextEntry={true}
        style={styles.input}
        placeholder="Enter Your Password"
        value={surName}
        onChangeText={setSurName}
      ></TextInput>

      <Pressable
        onPress={() => setIsLoading(true)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "tomato" : "green",
          },
          styles.button,]}
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
      <Text style={{ margin: 15 }}>Welcome To My World!</Text>


{isLoading ? <Loading changeIsLoading={ ()=> setIsLoading(false)}/>    :   null }


    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#9999c7",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "orange",
    textAlign: "center",
    margin: 10,
    color: "white",
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  // result: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
  image: {
    width: 150,
    height: 150,
  },
});

export default App;
