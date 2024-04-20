import { View, Text , TouchableOpacity} from "react-native"
import styles from "./style/style";
import { useEffect,useState } from "react";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


    export default Greeting = ()=> {


        const date = new Date();
        const dateOptions = {
        weekday: 'long', // Full name of the day of the week (e.g., Friday)
        month: 'short', // Abbreviated name of the month (e.g., Apr)
        day: '2-digit' // Two-digit day of the month (e.g., 19)
            };
        const [currentTime, setCurrentTime] = useState('');

        useEffect(() => {
        const intervalId = setInterval(() => {
            const currentDate = new Date();
            setCurrentTime(currentDate.toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalId); 
        }, []); 
        const navigation = useNavigation();




        const [taskCount, setTaskCount] = useState(0);

        useEffect(() => {
          const loadTasks = async () => {
            try {
              const storedTasks = await AsyncStorage.getItem('tasks');
              if (storedTasks !== null) {
                const tasks = JSON.parse(storedTasks);
                const incompleteTask = tasks.filter(task => task.completed === false);
                const count = incompleteTask.length
                setTaskCount(count > 0 ? count : "NO");
              }
            } catch (error) {
              console.error('Error loading tasks:', error);
            }
          };
      
          const refreshTaskCount = () => {
            const intervalId = setInterval(loadTasks, 1000); // Refresh every second
      
            // Clear the interval when component unmounts
            return () => clearInterval(intervalId);
          };
      
          refreshTaskCount(); // Start refreshing task count
      
          // Clean up function to clear the interval when component unmounts
          return () => clearInterval(intervalId);
        }, []);








        const goToNewTask = () => {
        navigation.navigate('NewTask');
         };

        return(
        <>

        <View style={styles.date}>
        <View style={styles.dataIn}>
            <Text style={styles.text}>{date.toLocaleDateString('en-US', dateOptions)}</Text>
            <Text style={styles.text}>{currentTime}</Text>
        </View>
        </View>
            <View style={styles.greeting}>
                <Text style={styles.greeting}>Hello Hiran</Text>
                {/* <Text style={styles.greeting}>Welcome to your dashboard</Text> */}
                <Text style={styles.textTask} >You have {taskCount} new task to complete</Text>

            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={goToNewTask} style={styles.taskView}>
                    <Text style={styles.textView}>View New Task</Text>
                </TouchableOpacity>
            </View>
         </>
    )
}