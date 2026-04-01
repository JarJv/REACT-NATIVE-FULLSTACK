import { View, Text, StyleSheet, Button } from 'react-native'; 
import { useState } from 'react';

export default function App() { 
  const [contador, setContador] = useState(0);
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:24}}>{contador}</Text>
      <View style={styles.container}>
        <Button title="+" onPress={() => setContador(contador+1)} />
        <Button title="-" onPress={() => contador > 0 ? setContador(contador-1) : setContador(0)} />
      </View>
    </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  },
});