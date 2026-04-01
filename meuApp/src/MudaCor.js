import { View, Text, StyleSheet } from 'react-native'; 

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Meu App</Text>
            <Text style={styles.subtitulo}>Aprendendo React Native</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { 
        flex:1, 
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00a2ff' 
    },
    titulo: { 
        fontSize:24,
        fontWeight:'bold',
        color:'#ff00dd'
    },
    subtitulo: {
        fontSize:18,
        color:'#ff3300'
    }
});