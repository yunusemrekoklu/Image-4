import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Image
        style={{width :300, height: 300, margin:10 , borderRadius: 40}}
        source = {require("./assets/dumbell.jpg")}     
      />

      <Image
        style={{width :300, height: 300 , margin: 10 , borderRadius:40}}
        
        source={{uri:"https://media.istockphoto.com/id/1391410249/tr/foto%C4%9Fraf/sports-and-gym-activities.jpg?s=1024x1024&w=is&k=20&c=MBeZwBnoZpbu1MKdajIbSGELMitsv3tR6-nUexpakZ4="
          
        }}
      
      
      />    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
