import React from "react";
import { useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from "./style/style";

const Task = () => {
    const [taskName, setTaskName] = useState('');

    const [tasks, setTask] = useState([]);

    const AddNewView = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Add New Task</Text>
    </View>
    
    )

    const handleDelete = (item) => {
    setTask(tasks.filter(task => task.id !== item.id));
     }

    const setComplete = (task) => {

    let tempArray = [...tasks];
    const index = tempArray.findIndex((element) => element.id === task.id);
    tempArray[index] = {
      id: task.id,
      name: task.name,
      completed: !task.completed
    };
    setTask(tempArray);
    }
  return(
    <View style={{flex: 1}}>

      <View>
      <Text style={styles.sectionTitle}>Today's Scheduled </Text>

      </View>
      
      <FlatList
      style={styles.items}
        data={tasks}
        renderItem={({item}) =>  <>
          <TouchableOpacity style={{ backgroundColor: "green", marginHorizontal: 20, borderRadius: 5, marginTop: 5 }} onLongPress={() => setComplete(item)}>
            <Text style={[{paddingHorizontal: 20, paddingVertical: 5}, item.completed ? {textDecorationLine: 'line-through', textDecorationColor: 'black'} : {}]}>
              {item.name}

            </Text>
          </TouchableOpacity>
        </>}
        keyExtractor={(item) => item.id.toString()}
      />
  

    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? 'padding': 'height'} style={styles.keyboard}>
     <TextInput style={styles.input} placeholder='whats your todays schedule ' value={taskName}
          onChangeText={(name) => setTaskName(name)}
           />
       <TouchableOpacity onPress={() => {
            console.log("onPress");
            newTask = {
              id: tasks.length + 1,
              name: taskName,
              completed: false
            }
            setTask([...tasks, newTask])
            setTaskName('');
            Keyboard.dismiss();
          }} > 
         <View style={styles.add}>
          
           <Text style={styles.textAdd} > + </Text>

         </View>
       </TouchableOpacity>
     </KeyboardAvoidingView>    
    </View>
  )
}

export default Task;
