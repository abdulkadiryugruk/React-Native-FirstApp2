import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Loading, CustomTextInput, CustomButton } from "../components/";
import { login } from "../redux/UserSlice";

import { useSelector, useDispatch } from "react-redux";
import {setIsLoading, setLogin} from "../redux/UserSlice";

const LoginPage = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // userSlice içerisindeki verilerin okunması
  const {isLoading, error,  } = useSelector((state) => state.user);


  // userSlice içerisindeki reducer yapılarını kullanma veya veri gönderme
  const dispatch = useDispatch();

  return (
    <View style={styles.background}>
      <Text style={styles.welcome}>Welcome</Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/loginIcon.png")}
      />

      <CustomTextInput
        title="Email"
        secureTextEntry={false}
        handleOnChangeText={(text) => setEmail(text)}
        handleValue={email}
        handlePlaceholder="Enter Your Email"
      />

      <CustomTextInput
        title="Password"
        secureTextEntry={true}
        handleOnChangeText={(password) => setPassword(password)}
        handleValue={password}
        handlePlaceholder="Enter Your Password"
      />

      <Text>{error}</Text>

      <CustomButton
        buttonText="Login"
        setWidth="80%"
        handleOnPress={() => dispatch(login({email, password}))}
        buttonColor="blue"
        pressedButtonColor="gray"
      />

      <CustomButton
        buttonText="Sign Up"
        setWidth="30%"
        handleOnPress={() => navigation.navigate("SignUp")}
        buttonColor="gray"
        pressedButtonColor="lightgray"
      />

      {isLoading ? (
        <Loading changeIsLoading={() => dispatch(setIsLoading(false))} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  welcome: {
    fontSize: 40,
    marginBottom: 10,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: 150,
    height: 150,
  },
  signUpButton: {
    width: "30%",
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
});

export default LoginPage;
