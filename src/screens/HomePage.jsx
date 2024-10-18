import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { CustomButton } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/UserSlice";
import Animated, { FadeIn } from "react-native-reanimated";
import { FlipInEasyX, FlipOutEasyX } from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { setUserInput, saveData } from "../redux/dataSlice";


const HomePage = () => {

  const dispatch = useDispatch();

  const {data, userInput} = useSelector(state => state.data)

  console.log(userInput)



  //TODO delete data from database
  const deleteData = async (value) => {
    try {
      await deleteDoc(doc(db, "reactNativeLesson", value));
      console.log(`delete succesful`);
    } catch (error) {
      console.log(error);
    }
  };
  //TODO update data from firebase
  // const updateData = async (value) => {
  //   try {
  //     const lessonData = doc(db, "reactNativeLesson", value);

  //     await updateDoc(lessonData, {
  //       content: updateTheData,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // TODO kullanici cikis islemleri
  const handleLogouth = () => {
    dispatch(logout());
  };


  const handleTextInput =(text)=>{
    dispatch(setUserInput(text))
  }

  const renderItem = ({ item, index }) => {
    return (
      <Animated.View
        style={styles.flatListView}
        entering={FlipInEasyX.delay(100 * (index + 1))}
        exiting={FlipOutEasyX}
      >
        <Pressable style={styles.iconContainer}
        onPress={() => deleteData(item.id)}>
          <AntDesign name="checkcircle" size={24} color="black" />
          <Entypo name="circle" size={24} color="black" />
        </Pressable>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        entering={FadeIn}
        data={data}
        style={styles.flatList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <View style={styles.userInputContainer}>
      <TextInput
        value={userInput}
        onChangeText={handleTextInput}
        placeholder="Add To Do"
        placeholderTextColor={'lightgray'}
        style={styles.textInput}
      />
      <CustomButton
        buttonText={"Save"}
        flexValue={1}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={()=>dispatch(saveData(userInput))}
      />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "teal",
  },
  flatListView: {
    borderBottomWidth: 0.4,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flatList: {
    width: "90%",
    padding: 10,
  },
  itemContainer: {
    flex: 6,
    marginLeft: 13,
  },
  itemTitle: {
    fontWeight: "bold",
  },
  iconContainer: {
    borderWidth: 1,
    flex: 1,
    alignItems: "center",
  },
  userInputContainer:{
    width: "90%",
    flexDirection:'row',
  },
  textInput:{
    borderWidth: 0.4,
    flex:3,
    textAlign: "center",
    marginRight:5,
    borderRadius:5,
    textAlign:'center',
    borderColor:'white'
  }
});
