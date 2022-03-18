import { StatusBar } from 'expo-status-bar';
import{useState} from 'react';
import { StyleSheet, Text,ScrollView, View,TextInput,Button } from 'react-native';

export default function App() {
  const[enteredGoals,setEnteredGoals]=useState();
  const[courseGoals,setCourseGoals]=useState([]);

  const goalInputHandler=(enteredText)=>{
        setEnteredGoals(enteredText);
  }
   const AddGoalInputHandler=()=>{
        setCourseGoals(currentGoals=>[...currentGoals,enteredGoals]);
  }


  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
    <TextInput placeholder='course goals' style={{border:'black', borderWidth:1,width:'80%', padding:10}} onChangeText={goalInputHandler} value={enteredGoals}/>
      <Button title='ADD' onPress={AddGoalInputHandler}/>
      <StatusBar style="auto" />
      </View>
      <ScrollView>
        {courseGoals.map((goal)=><View style={styles.inputtext}><Text key={goal}>{goal}</Text></View>)}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding:50,
  },
  inputContainer:{

    
    alignItems: 'center',
    justifyContent: 'space-between',
    
     flexDirection:'row',
  },

  inputtext:{

    borderWidth:1,
    borderColor:'black',
    padding:10,
    backgroundColor:'#ccc',
    marginVertical:10,
  }
});
