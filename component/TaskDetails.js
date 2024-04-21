import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import styles from './style/style';
import MyDatePicker from './Date_picker';

const Details = ({ route, navigation }) => {
  const { task } = route.params;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.name,
    description: task.description,
    dueDate: task.dueDate,
  });

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleEditTask = () => {
    // Implement your logic to handle task editing
    console.log('Edited Task:', editedTask);
    // Close the modal
    toggleModal();
  };
  const goToNewTask = () => {
    navigation.navigate('NewTask');
  };

  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || editedTask.dueDate;
    setShowDatePicker(Platform.OS === 'ios');
    setEditedTask({ ...editedTask, dueDate: currentDate });
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };






  return (
    <View style={styles.box}>
      <Text style={styles.greeting}>Title: {task.name}</Text>
      <Text style={styles.greeting}>Description: {task.description}</Text>
      <Text style={modalStyles.input}>Due Date: {task.dueDate}</Text>

      <View style={{flexDirection:'row', gap:5, padding:'auto', margin:5}}>

      <TouchableOpacity style={styles.date} onPress={goToNewTask}><Text style={styles.textAdd}>Back</Text></TouchableOpacity>
      <TouchableOpacity style={styles.date} onPress={toggleModal}><Text style={styles.textAdd}>Edit</Text></TouchableOpacity>
      </View>

      {/* Modal for editing task details */}
      <Modal visible={isModalVisible} animationType="slide">
        <View style={modalStyles.container}>
          <TextInput
            style={modalStyles.input}
            value={editedTask.title}
            onChangeText={(text) => setEditedTask({ ...editedTask, title: text })}
            placeholder="Title"
          />
          <TextInput
            style={modalStyles.input}
            value={editedTask.description}
            onChangeText={(text) => setEditedTask({ ...editedTask, description: text })}
            placeholder="Description"
          />

        <MyDatePicker
            testID="dateTimePicker"
            value={editedTask.dueDate}
            mode="datetime"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
            buttonStyle={modalStyles.button}
          />
            <View style={{flexDirection:'row', gap:5, padding:'auto', margin:5}}> 

          <TouchableOpacity style={modalStyles.button} onPress={handleEditTask}>
            <Text style={modalStyles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={modalStyles.button} onPress={toggleModal}>
            <Text style={modalStyles.buttonText}>Cancel</Text>
          </TouchableOpacity>
            </View>
        </View>
      </Modal>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'black',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#9A2BE1',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Details;
