import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput} from 'react-native';

export default function Tinput({value, onChangeText, style, name}) {


  return (
    <View style={styles.container}>
      <TextInput name={name} value={value} style={style} onChangeText={onChangeText}/>
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