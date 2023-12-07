import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput} from 'react-native';
import { useState } from 'react';

export default function Dane({dane, style}) {

  const [zainteresowania, setZainteresowania] = useState('')
  const changeHandler = (text) => {
    setZainteresowania(text);
    dane(text)
  };
 

  return (
    <View style={styles.container}>
      <TextInput name='zainteresowania' value={zainteresowania} placeholder='Ulubiony przedmiot magiczny' style={style} onChangeText={text => changeHandler(text)}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202060',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    width: '100%',
    justifyContent: 'flex-start',
  },
  text:{
    color: 'white'
  }

});