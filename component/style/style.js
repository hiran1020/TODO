 import { StyleSheet } from "react-native";
 const styles = StyleSheet.create({
    ///Task component style
    sectionTitle: {
      color: 'black',
      fontSize: 30,
      fontWeight: '600',
      paddingHorizontal: 10,
      paddingTop: 20
    },
    items: {
      marginTop: 30,
      maxHeight:'80%',
      width: '90%',
      alignSelf: 'center',
    },
    input:{
      color: 'black'
    },
    keyboard: {
      position: 'absolute',
      justifyContent: 'space-between',
      width: '95%',
      bottom: 20,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 10,
      left: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    add:{
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#9A2BE1',
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
    
   },
   textAdd:{
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
      top: -5,
      paddingBottom:5,
    },
    ////greeting component style
    greeting:{
        color: 'black',
        borderRadius: 5,
        alignItems: 'center',
        fontSize: 30,
        fontWeight: '600',
        margin:10,
        paddingHorizontal: 10,
        paddingTop: 20
    },
    date:{
        flex: 0.6,
        marginBottom:5,
        backgroundColor:'#9A2BE1',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    dataIn:{
        width:'99%',
        borderBottomLeftRadius:25,
        alignItems:'center',
        borderBottomEndRadius: 25, 
        backgroundColor:'#9A0BE0'},
        
    text:{
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        padding:5,
        marginBottom:10,
        fontWeight: '600',
        top:20,
    },
    textTask:{
      color: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      padding:5,
      marginBottom:10,
      fontWeight: '600',
      top:20,
    },
    textView:{
      color: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      padding:5,
      marginBottom:10,
      fontWeight: '600',
      top:5,
    },
    taskView:{
      backgroundColor: '#9A2BE1',
      width: 200,
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      box: {
        width: 200,
        height: 200,
        backgroundColor: '#87CEEB',
        justifyContent: 'center',
        alignItems: 'center',
      },
      stack:{
        backgroundColor: 'black',
      }
  });
 
 
 
 export default styles