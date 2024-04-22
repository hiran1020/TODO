 import { StyleSheet } from "react-native";
const $brand = '#9A2BE1';


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
      color: 'black',
      width:'90%',
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
        backgroundColor:$brand,
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
   },
   home:{
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:$brand,
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
    top: 5,
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
        backgroundColor:$brand,
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
        backgroundColor:'#9A0BE0'
      },
        
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
      backgroundColor: $brand,
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignment:'center',
        borderRadius: 10,
      },
      stack:{
        backgroundColor: 'black',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalInput: {
        width: '80%',
        height: 40,
        backgroundColor: 'black',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: 'white',
        fontSize: 18,
      },
      modalButton: {
        backgroundColor: '#9A2BE1',
        width: '70%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      modalButtonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
      },
  });
  
 
 
 
 export default styles