 import { StyleSheet } from "react-native";
 const styles = StyleSheet.create({
    ///Task component style
    sectionTitle: {
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
        backgroundColor:'#87CEEB',
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
        color: 'white',
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
        backgroundColor:'#9400D3',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    dataIn:{
        width:'100%',
        borderBottomLeftRadius:25,
        alignItems:'center',
        borderBottomEndRadius: 25, 
        backgroundColor:'#9A0BE0'},
        
    text:{
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        padding: 10,
        marginBottom:5,
        fontWeight: '600',
    },
    ////swipe left 
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
      }
  });
 
 
 
 export default styles