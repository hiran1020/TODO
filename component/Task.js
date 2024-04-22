import React, { useState, useEffect } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./style/style";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Task = () => {
    const [taskName, setTaskName] = useState('');
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [uncompletedTasks, setUncompletedTasks] = useState([]);
    const navigation = useNavigation();




    const getEndOfDay = () => {
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999); // Set time to end of the day
      
        const options = {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true // Use 24-hour format
        };
      
        return endOfDay.toLocaleString('en-US', options);
      };
    







    const loadTasks = async () => {
        try {
            // Retrieve tasks from AsyncStorage
            const storedTasks = await AsyncStorage.getItem('tasks');
            if (storedTasks !== null) {
                const parsedTasks = JSON.parse(storedTasks);
                setTasks(parsedTasks);
                setCompletedTasks(parsedTasks.filter(task => task.completed));
                setUncompletedTasks(parsedTasks.filter(task => !task.completed));
            }
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    };



    useEffect(() => {
        loadTasks();
    }, []);










    const addTask = () => {
        if (taskName.trim() === '') {
            return;
        }
        
        console.log(getEndOfDay([]))
        const newTask = {
            id: tasks.length + 1,
            name: taskName,
            completed: false,
            dueDate: getEndOfDay([]),
        };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
        setCompletedTasks(updatedTasks.filter(task => task.completed));
        setUncompletedTasks(updatedTasks.filter(task => !task.completed));
        setTaskName('');
        Keyboard.dismiss();
    };
  


    const saveTasks = async (newTasks) => {
        try {
            // Save tasks to AsyncStorage
            await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
        } catch (error) {
            console.error('Error saving tasks:', error);
        }
    };








    const goToHome = () => {
        navigation.navigate('Home');
    };








    const goToTaskDetails = (task) => {
        console.log(task);
        navigation.navigate('Details', { task });

    };






    
    const handleDelete = (item) => {
        const updatedTasks = tasks.filter(task => task.id !== item.id);
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
    };








    const setComplete = (task) => {
        const updatedTasks = tasks.map(t => {
            if (t.id === task.id) {
                return { ...t, completed: !t.completed };
            }
            return t;
        });
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
        setCompletedTasks(updatedTasks.filter(task => task.completed));
        setUncompletedTasks(updatedTasks.filter(task => !task.completed));
    };












    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 5 }}>
                <Text style={styles.sectionTitle}>Today's Scheduled</Text>
                <TouchableOpacity style={styles.home} onPress={goToHome}>
                    <Icon name="arrow-left" size={35} color="black" />
                </TouchableOpacity>
            </View>


            <View style={{ flex: 1 }}>



            <View style={{ flex: 1 }}>
                <Text style={styles.sectionTitle}>Uncompleted Tasks</Text>
                <FlatList
                    style={styles.items}
                    data={uncompletedTasks}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{ backgroundColor: "#9A1CE0", borderRadius: 5, marginTop: 5,height: 35 }}
                            onLongPress={() => setComplete(item)} 
                            onPress={() => goToTaskDetails(item)}
                        >
                            <Text style={[{ paddingHorizontal: 20, paddingVertical: 10,alignContent: 'center',alignItems: 'center' }, item.completed ? { textDecorationLine: 'line-through', textDecorationColor: 'black' } : {}]}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>

            <View style={{ flex: 1 }}>
                <Text style={styles.sectionTitle}>Completed Tasks</Text>
                <FlatList
                    style={styles.items}
                    data={completedTasks}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{ backgroundColor: "#9A1CE0", marginHorizontal: 10, borderRadius: 5, marginTop: 5 }}
                            onLongPress={() => setComplete(item)}
                            onPress={() => goToTaskDetails(item)}
                        >
                            <Text style={[{ paddingHorizontal: 20, paddingVertical: 5 }, item.completed ? { textDecorationLine: 'line-through', textDecorationColor: 'black' } : {}]}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />

            </View>
            
               
               
                </View>

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? 'padding' : 'height'} style={styles.keyboard}>
                <TextInput
                    style={styles.input}
                    value={taskName}
                    onChangeText={(name) => setTaskName(name)}
                />
                <TouchableOpacity onPress={addTask}>
                    <View style={styles.add}>
                        <Text style={styles.textAdd}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
};

export default Task;
