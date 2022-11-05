import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


interface ItensTouchableProps{
  title: string;
}

function IntensTouchable(props: ItensTouchableProps){
  return (
    <TouchableOpacity>
      {props.title}
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      
      <IntensTouchable title='Item 1' />
      <IntensTouchable title='Item 2' />
      <IntensTouchable title='Item 3' />
      <IntensTouchable title='Item 4' />


      <StatusBar style="auto" />
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
