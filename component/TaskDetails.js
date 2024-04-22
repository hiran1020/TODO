import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import styles from './style/style';
import MyDatePicker from './Date_picker';
import DateTime from './Date_time';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Details = ({ route, navigation }) => {
  const { task } = route.params;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState({
    title: task.name,
    description: task.description,
    dueDate: task.dueDate,
    id: task.id,
  });





  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };




  useEffect(() => {
    loadTasks();
}, []);

  const loadTasks = async () => {
    try {
        // Retrieve tasks from AsyncStorage
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks !== null) {
            const parsedTasks = JSON.parse(storedTasks);
            setTasks(parsedTasks);           
        }
    } catch (error) {
        console.error('Error loading tasks:', error);
    }
};






  const [date,setDate] = useState(new Date());
  const handleEditTask = async() => {
    const updatedTask = {
      ...task,
      title: editedTask.title,
      description: editedTask.description,
      // dueDate: editedTask.date instanceof Date ? editedTask.date : task.dueDate,
    
      dueDate: date,
    };

    const currentTaskId = task.id;
    const updatedTasks = tasks.filter((task) => {
      return task.id !== currentTaskId;
    } )

    try {
      // Save tasks to AsyncStorage
      await AsyncStorage.setItem('tasks', JSON.stringify([...updatedTasks, updatedTask]));
      loadTasks()

  } catch (error) {
      console.error('Error saving tasks:', error);
  }

    console.log('Edited Task:', updatedTask);
    toggleModal();
  };
  const goToNewTask = () => {
    navigation.navigate('NewTask');
  };

  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };






  return (
    <View style={styles.box}>
      <View style={{flex: 1,flexDirection:'column', gap:5, padding:'auto', margin:5}}>

      <Text style={styles.greeting}>Title: {task.name}</Text>
      <Text style={styles.greeting}>Description: {task.description}</Text>
      <Text style={styles.greeting}>Due Date: {task.dueDate}</Text>

      </View>
      <View style={{flex: 0.1,flexDirection:'row', gap:5, padding:'auto', margin:5}}>

      <TouchableOpacity style={styles.date} onPress={goToNewTask}><Text style={styles.textAdd}>Back</Text></TouchableOpacity>
      <TouchableOpacity style={styles.date} onPress={toggleModal}><Text style={styles.textAdd}>Edit</Text></TouchableOpacity>
      </View>

      {/* Modal for editing task details */}
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.modalInput}
            value={editedTask.title}
            onChangeText={(text) => setEditedTask({ ...editedTask, title: text })}
            placeholder="Title"
          />
          <TextInput
            style={styles.modalInput}
            value={editedTask.description}
            onChangeText={(text) => setEditedTask({ ...editedTask, description: text })}
            placeholder="Description"
          />
          
            <DateTime 
            style={styles.modalButton}
            setDate ={setDate}
            date ={date}
            />
            <View style={{flexDirection:'row', gap:5, padding:'auto', margin:5}}> 

          <TouchableOpacity style={styles.modalButton} onPress={handleEditTask}>
            <Text style={styles.modalButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
      
            </View>
        </View>
      </Modal>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  
});

export default Details;
