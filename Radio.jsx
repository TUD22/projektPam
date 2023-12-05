import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,  Text, Switch, Button, Alert} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';


export default function Radio({img, value}) {
  
  const [checked, setChecked]= useState('')


  return (
    <View style={styles.container}>
      <img style={styles.img} src={img}></img>
      <RadioButton
        value={value}
        status={ checked === value ? 'checked' : 'unchecked' }
        onPress={() => setChecked({value})}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202060',
    alignItems: 'center',

    width: '40%',
    color: 'white',
  },
  text:{
    color: 'white'
  },
  img:{
    height: '8vh'
  }

});