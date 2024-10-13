import React, { useState } from "react";
import { CustomTextInput, CustomButton } from "../components";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";

const SignUpPage = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Image
            style={styles.image}
            source={require("../../assets/images/signUpIcon.png")}
          />
          <Text style={styles.signUp}>signUp</Text>
        </View>

        <View style={styles.textInputContainer}>
          <CustomTextInput
            title="Name"
            secureTextEntry={false}
            handleOnChangeText={setName}
            handleValue={name}
            handlePlaceholder="Enter Your Name"
          />
          <CustomTextInput
            title="Email"
            secureTextEntry={false}
            handleOnChangeText={setEmail}
            handleValue={email}
            handlePlaceholder="Enter Your Email"
          />
          <CustomTextInput
            title="Password"
            secureTextEntry={true}
            handleOnChangeText={setPassword}
            handleValue={password}
            handlePlaceholder="Create Your Password"
          />
        </View>

        <View style={styles.signUpOptions}>
          <CustomButton
            buttonText="Sign Up"
            setWidth="80%"
            handleOnPress={() => console.log(name, " ", email, " ", password)}
            buttonColor="blue"
            pressedButtonColor="grey"
          />
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontWeight: "bold" }}>
              Already have an account? Login
            </Text>
          </Pressable>
        </View>

    </SafeAreaView>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
    
    
  },
  signUp: {
    fontSize: 40,
    marginBottom: 10,
    fontWeight: "bold",
    color: "white",
    
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    flex: 2,
    width:'100%',
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textInputContainer: {
    flex: 2,
    padding: 20,
    width: `100%`,
    alignItems: "center",
    justifyContent: "space-between",
  },
  signUpOptions: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
