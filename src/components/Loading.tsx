import { 
    StyleSheet,
     Text,
      View, 
    ActivityIndicator,
    Pressable,
    } from 'react-native'
import React from 'react'


const  Loading = ({changeIsLoading}) => {
  return (
    <View style={styles.container}>
        <Pressable 
        onPress={()=>changeIsLoading()}
        style={[{}, styles.closeButtonContainer]}>
            <Text style={styles.closeButton}>X</Text>
        </Pressable>
        <ActivityIndicator size={'large'} color={'black'}/>
      <Text style={styles.loginText}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        backgroundColor:'grey',
        width:'100%',
        height:'100%',
    },
    loginText :{
fontWeight: 'bold' ,
fontSize: 17,
color: 'white',
marginTop:20,
    },
    closeButton:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
    },
    closeButtonContainer:{
        position:'absolute',
        top:30,
        right:30,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        width:50,
        height:50,
    },
});