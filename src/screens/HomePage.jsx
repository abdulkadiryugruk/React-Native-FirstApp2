import { Pressable, StyleSheet, Text, TextInput, View, FlatList,SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc  } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { CustomButton } from "../components";
import { useDispatch } from "react-redux";
import { logout } from "../redux/UserSlice";
import  Animated, { FadeIn } from 'react-native-reanimated';
import { FlipInEasyX, FlipOutEasyX } from 'react-native-reanimated';

const HomePage = () => {
  const [data, setData] = useState([]);
const [isSaved, setIsSaved] = useState(false)
const [updateTheData, setUpdateTheData] = useState("");

const dispatch= useDispatch()

console.log(isSaved)
  // console.log("data: ", data);

  useEffect(()=>{
    getData()
  },[isSaved])

  // TODO send data to firebase
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "zero to hero",
        content: "React Native tutorial for beginner",
        lesson: 95,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //TODO get data from firebase

  const getData = async () => {
    const allData=[]


    try {
    const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      allData.push({...doc.data(), id: doc.id});
    });
    setData(allData)

  } catch (error){
    console.log(error)
  }
  };



  //TODO delete data from database
  const deleteData = async(value)=>{
    try{
    await deleteDoc(doc(db, "reactNativeLesson",value));
      console.log(`delete succesful`)
    } catch(error){
      console.log(error)
    }
  }
//TODO update data from firebase
const updateData = async (value) => {

  try{
    const lessonData = doc(db, "reactNativeLesson",value);

    await updateDoc(lessonData, {
      content: updateTheData
    })


  }catch(error){
    console.log(error)
  }

}


// TODO kullanici cikis islemleri
const handleLogouth = ()=>{
dispatch(logout())
}



const renderItem = ({item, index})=>{
  return(
    <Animated.View 
    style={styles.flatListView}
    entering={FlipInEasyX.delay(100 * (index + 1))} 
    exiting={FlipOutEasyX}
    >
      <Text>{item.id}</Text>
      <Text>{item.title}</Text>
      <Text>{item.content}</Text>
      <Text>{item.lesson}</Text>
    </Animated.View>
  )
}

  return (
    <SafeAreaView style={styles.container}>
      
      <TextInput
      value={updateTheData}
      onChangeText={setUpdateTheData}
      placeholder="enter your data"
      style={{borderWidth:1, width:'50%', paddingVertical:10, textAlign:'center',marginBottom:30}}
      />


      <Animated.FlatList
      entering={FadeIn}
      data={data}
      style={styles.flatList}
      keyExtractor={item=>item.id}
      renderItem={renderItem}
      />



      <CustomButton
        buttonText={"Save"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={()=>{sendData(), setIsSaved(isSaved=== false ? true : false)}}
      />

<CustomButton
        buttonText={"Get Data"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={getData}
      />

<CustomButton
        buttonText={"Delete Data"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={deleteData}
      />

      <CustomButton
        buttonText={"Update Data"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={updateData}
      />

<CustomButton
        buttonText={"Logout"}
        setWidth={"40%"}
        buttonColor={"red"}
        pressedButtonColor={"gray"}
        handleOnPress={handleLogouth}
      />

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
  flatListView:{
    borderWidth:1,
    marginVertical:1,
  },
  flatList:{borderWidth:1,
  width:'90%',
  padding:10,
  backgroundColor:'yellow'
    }
});
