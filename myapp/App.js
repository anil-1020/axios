import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { Show } from './ShowComponent';
 

export default function App() {

const[data,setData]=useState([]);
 const[count,setCount]=useState(0)

  useEffect(()=>{

axios.get('https://jsonplaceholder.typicode.com/posts/'+ `${count}`)
.then((res)=> setData([...data,res.data]) )
.catch((err)=>console.log(err))

  },[count])

  const Count=()=>{
setCount(pre=> pre + 1)

  }
 
  return (

    
    <View style={styles.container}>
 
    <FlatList 
    data={data}
    keyExtractor={(item) => item.id}
    onEndReachedThreshold={0.4}
    onEndReached={Count}
    renderItem={({item,index}) =>  <Show item={item} index={index} /> }
    />
     
      <StatusBar style="auto" />
      <Button title='Ekle' onPress={()=> setCount(pre=> pre + 1)} />
      <Text>{count}</Text>
    </View>
                    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:25
  },
});
