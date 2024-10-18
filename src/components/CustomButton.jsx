import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({buttonText, flexValue, handleOnPress, buttonColor, pressedButtonColor}) => {


  
  return (
      <Pressable
        onPress={() => handleOnPress()}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? pressedButtonColor : buttonColor,
        flex: flexValue,

          },
          
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
      },
})