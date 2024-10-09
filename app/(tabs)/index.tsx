import { useState } from "react";
import React from "react";
import { 
  StyleSheet, 
  Text,
   TextInput,
    View,
     Pressable,
    } from "react-native";

const App = () => {

  const [name , setName] = useState('')
  const [surName , setSurName] = useState('')
  const [result , setResult] = useState('')
  
  return (
    <View style={styles.background}>
      <TextInput style={styles.input} placeholder="Enter Your name" value={name} onChangeText={setName}></TextInput>
      <TextInput style={styles.input} placeholder="Enter Your surname" value={surName} onChangeText={setSurName}></TextInput>

      <Pressable 
      onPress={()=> setResult(name +' '+ surName)}
      style={({pressed})=>[{
        backgroundColor: pressed ? 'tomato' : 'green'
      },styles.button]}
      
      >
        <Text 
        style={styles.buttonText}>
          Save
          </Text>
      </Pressable>
      <Text style={{margin:15}}>
        Welcome To My World! 
      </Text>
      
      <Text style={styles.result}>
        {result}
      </Text>
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
    borderWidth:1,
    borderRadius:20,
    borderColor:'orange',
    textAlign:'center',
    margin:10,
    color:'white'
  },
  button:{
    width: "80%",
    height:50,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    marginTop:25,
  },
  buttonText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
  },
  result:{
    fontSize:20,
    fontWeight:'bold',
  }
});

export default App;
