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
import Allter from './Allter';


export default function Formularz() {

    const [dane, setDane] = useState('')
    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')
    const [value, setValue] = useState('1');
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    
    const klik = ()=>{
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
      <Tinput value={name} style={styles.input} onChangeText={setName} name='imię' placeholder='imię'/>
      <Tinput value={surName} style={styles.input} onChangeText={setSurName} name='nazwisko' placeholder='nazwisko'></Tinput>
      <Text style={styles.text}>Do jakiego domu należysz?</Text>
      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        <View style={styles.radio}>
          <Radio img={Gryffindor} value='Gryffindor' />
          <Radio img={Hufflepuff} value='Hufflepuff' />
          <Radio img={Ravenclaw} value='Ravenclaw'/>
          <Radio img={Slytherin} value='Slytherin'/>
        </View>
      </RadioButton.Group>
      <Text style={styles.stext}>Mugol
      <Switch
        style={styles.switch}
        trackColor={{false: '#767577', true: '#b36b00'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        activeThumbColor={'#ffaa00'}
      />Czarodziej
      </Text>
      <Button onPress={klik}
      title='wyślij dane'
      color='#ed9434'/>
      <StatusBar style="auto" />
      <Allter></Allter>
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
  },
  switch: {
    margin: '15px'
  },
  stext:{
    color: 'white',
    fontSize: '1.1rem'
  }

});