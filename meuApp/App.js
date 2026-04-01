import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';

export default function App() {
  const [tarefas,setTarefas] = useState([]);
  const [texto,setTexto] = useState('');
  const API = 'https://SEU-APP.onrender.com/tarefas';

  async function carregar(){ 
    const res=await fetch(API);
    const data=await res.json(); setTarefas(data)
  }

  async function adicionar(){
    if(!texto) return; await fetch(API,{method:'POST',headers:{'ContentType':'application/json'},body:JSON.stringify({titulo:texto})}); setTexto('');
    carregar() 
  }

  async function deletar(id){
   await fetch(`${API}/${id}`,{method:'DELETE'});
    carregar() 
  }

  useEffect(()=>{carregar()},[])
  
  return (
    <View style={{marginTop:150}}>
      <FlatList
        data={dados}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
        <View style={{padding:10, margin:5, backgroundColor:'#ddd', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>{item.nome}</Text>
          <TouchableOpacity onPress={()=>{setDados(dados.filter(d => d.id !== item.id))}}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
      />
      </View>
  );
}

