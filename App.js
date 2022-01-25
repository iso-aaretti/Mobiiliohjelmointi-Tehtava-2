import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [arvaus, setArvaus] = useState('');
  const [text, setText] = useState('Guess a number between 1-100');
  const [count, setCount] = useState(1);
  const [answer, setAnswer] = useState(Math.floor((Math.random() * 100) + 1));


  const buttonPressed = () => {
    setCount(parseInt(count) + 1);
    if (parseInt(arvaus) < answer) {
      setText('Your guess ' + arvaus + ' is too low');
    } else if (parseInt(arvaus) > answer) {
      setText('Your guess ' + arvaus + ' is too high');
    } else {
      Alert.alert('You guessed the number in ' + count + ' guesses');
    }
  }



  return (
    
    <View style={styles.container}>
      <View>
      <Text>{text}</Text>
      <TextInput style={styles.input} keyboardType = 'numeric' onChangeText={arvaus=> setArvaus(arvaus)} value={arvaus}/>
      <Button onPress={buttonPressed} title="MAKE GUESS"/>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:200,
    borderColor: 'gray',
    borderWidth: 1
  },
});
