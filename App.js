import React from 'react';
import {StyleSheet, TextInput, Text} from 'react-native';

export default function App() {
  const [value, onChangeText] = React.useState('Vector1');
  const [value2, onChangeText2] = React.useState('Vector2');
  const [value3, onChangeText3] = React.useState('Vector3');

  return (
    <>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => onChangeText(text)}
        value={value}
      />

      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => onChangeText2(text)}
        value={value2}
      />

      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => onChangeText3(text)}
        value={value3}
      />

      <Text numberOfLines={5}>{value.split(',')[0]}{value.split(',')[1]}{value.split(',')[2]}</Text>
      <Text numberOfLines={5}>{value2.split(',')[0]}{value2.split(',')[1]}{value2.split(',')[2]}</Text>
      <Text numberOfLines={5}>{value3.split(',')[0]}{value3.split(',')[1]}{value3.split(',')[2]}</Text>


      <Text numberOfLines={5}>{1/6*(((value.split(',')[0])*(value2.split(',')[1])*(value3.split(',')[2])+((value2.split(',')[0])*(value3.split(',')[1])*(value.split(',')[2]))+((value3.split(',')[0])*(value.split(',')[1])*(value2.split(',')[2])))-((value2.split(',')[0])*(value.split(',')[1])*(value3.split(',')[2])+((value.split(',')[0])*(value3.split(',')[1])*(value2.split(',')[2]))+((value3.split(',')[0])*(value2.split(',')[1])*(value.split(',')[2]))))}</Text>


    
        
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
