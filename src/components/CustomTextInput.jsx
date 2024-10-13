import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({title, secureTextEntry, handleOnChangeText, handleValue, handlePlaceholder}) => {
  return (

      <View style={styles.inputContainer}>
        <Text style={styles.inputBoxText}>{title}</Text>
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          secureTextEntry={secureTextEntry}
          placeholder={handlePlaceholder}
          onChangeText={handleOnChangeText}
          value={handleValue}
        />
      </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer: {
        width: "80%",
        height: 50,
        marginVertical: 10,
        textAlign: "center",
        color: "blue",
        fontWeight: "bold",
      },
      inputBoxText: {
        color: "white",
      },
      input: {
        height: 50,
        borderBottomWidth: 0.5,
        borderColor: "black",
        textAlign: "center",
        color: "white",
      },
})