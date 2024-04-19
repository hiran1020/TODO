import { View, Text ,StyleSheet} from "react-native"
import styles from "./style/style";
import { useEffect,useState } from "react";


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
                <Text style={styles.greeting}>Welcome to your dashboard</Text>
                <Text >You have 10 new task to complete</Text>

            </View>
         </>
    )
}