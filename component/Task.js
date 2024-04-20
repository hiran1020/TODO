import React, { useState, useEffect } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./style/style";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Task = () => {
    const [taskName, setTaskName] = useState('');
    const [tasks, setTasks] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        // Load tasks from AsyncStorage when component mounts
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            // Retrieve tasks from AsyncStorage
            const storedTasks = await AsyncStorage.getItem('tasks');
            if (storedTasks !== null) {
                setTasks(JSON.parse(storedTasks));
            }
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
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
    };

    const addTask = () => {
        if (taskName.trim() === '') {
            return;
        }
        const newTask = {
            id: tasks.length + 1,
            name: taskName,
            completed: false
        };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        saveTasks(updatedTasks);
        setTaskName('');
        Keyboard.dismiss();
      };
      
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 5 }}>
                <Text style={styles.sectionTitle}>Today's Scheduled </Text>
                <TouchableOpacity style={styles.add} onPress={goToHome}>
                    <Icon name="arrow-left" size={35} color="black" />
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.items}
                data={tasks}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ backgroundColor: "#9A1CE0", marginHorizontal: 20, borderRadius: 5, marginTop: 5 }}
                        onLongPress={() => setComplete(item)}
                    >
                        <Text style={[{ paddingHorizontal: 20, paddingVertical: 5 }, item.completed ? { textDecorationLine: 'line-through', textDecorationColor: 'black' } : {}]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? 'padding' : 'height'} style={styles.keyboard}>
                <TextInput
                    style={styles.input}
                    placeholder="What's your today's schedule "
                    value={taskName}
                    onChangeText={(name) => setTaskName(name)}
                />
                <TouchableOpacity onPress={addTask}>
                    <View style={styles.add}>
                        <Text style={styles.textAdd}> + </Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
};
export default Task;
