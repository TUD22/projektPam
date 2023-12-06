import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, Button, Alert} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import Tinput from './Tinput'
import Radio from './Radio';
import Gryffindor from './Gryffindor.png'
import Ravenclaw from './Ravenclaw.png'
import Hufflepuff from './Hufflepuff.png'
import Slytherin from './Slytherin.png'


export default function Formularz() {

    const [name, setName] = useState('imię')
    const [surName, setSurName] = useState('nazwisko')
    const [value, setValue] = useState('1');
    
    const klik = function(){
      Alert.alert('Alert Title', 'My Alert Msg', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }

    

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Formularz TSWH</Text>
      <img></img>
      <Tinput value={name} style={styles.input} onChangeText={setName} name='imię'></Tinput>
      <Tinput value={surName} style={styles.input} onChangeText={setSurName} name='nazwisko'></Tinput>
      <Text style={styles.text}>Do jakiego domu należysz?</Text>
      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        <View style={styles.radio}>
          <Radio img={Gryffindor} value='1' />
          <Radio img={Hufflepuff} value='2' />
          <Radio img={Ravenclaw} value='3' />
          <Radio img={Slytherin} value='4' />
        </View>
      </RadioButton.Group>
      <Button onPress={klik}
      title='wyślij dane'
      color='#ed9434'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202060',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: '5vh'
  },
  text:{
    color: 'white',
    marginBottom: '3vh'
  },
  input:{
    color: 'white',
    border: 'solid white 1px',
    borderRadius: '3px',
    marginBottom: '5vh',
    width: '50vw'
  },
  radio:{
    flexDirection: 'row',
    justifyContent: 'center'
  }

});