import { View,Text,StyleSheet } from "react-native"


export const Show=({item,index})=>{
   
        return(
            
          <View style={styles.container}>
            <Text>{index}</Text>
            <Text>{item.title}</Text>
          </View>
          
               )
}

const styles= StyleSheet.create({

    container:{

backgroundColor:`yellow`,
marginTop:4,
 width:350,
 height:50,
 justifyContent:`space-between`,
 alignItems:`center`,
 flexDirection:`row`,
 

     
}

})
