import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { Avatar, ListItem, Icon } from "react-native-elements";
import firebase from "firebase";

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        };
    }

    handleLogin = (email, password) =>{
        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then(()=>{
                this.props.navigation.navigate("BottomTab");
            })
            .catch(error => {
                Alert.alert(error.message);
            });
    };
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <ImageBackground source={bgImage} style={styles.bgImage}>
              <View style={styles.upperContainer}>
                <Image source={appIcon} style={styles.appIcon} />
                <Image source={appName} style={styles.appName} />
              </View>
              <View style={styles.lowerContainer}>
                  <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ email: text })}
                    placeholder={"Enter Email"}
                    placeholderTextColor={"#FFFFFF"}
                    autoFocus
                  />
                   <TextInput
                    style={[styles.textinput,{marginTop:20}]}
                    onChangeText={text => this.setState({ password: text })}
                    placeholder={"Enter Password"}
                    placeholderTextColor={"#FFFFFF"}
                    secureTextEntry
                  />
                  <TouchableOpacity
                    style={[styles.button,{marginTop:20}]}
                    onPress={() => this.handleLogin(email,password)}
                  >
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
                </View>
            </ImageBackground>
            </KeyboardAvoidingView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },
    bgImage:{
      flex:1,
      resizeMode:"cover",
      justifyContent:"center"
    },
    upperContainer: {
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center"
    },
    appIcon:{
      width:280,
      height:280,
      resizeMode:"contain",
      marginTop:80
    },
    appname:{
        width:130,
        height:130,
        resizeMode:"contain"
    },
    textinputContainer: {
      borderWidth: 2,
      borderRadius: 10,
      flexDirection: "row",
      backgroundColor: "#9DFD24",
      borderColor: "#FFFFFF"
    },
    textinput: {
      width: "75%",
      height: 55,
      padding: 10,
      borderColor: "#FFFFFF",
      borderRadius: 10,
      borderWidth: 4,
      fontSize: 18,
      backgroundColor: "#5653D4",
      fontFamily: "Rajdhani_600SemiBold",
      color: "#FFFFFF"
    },
    button: {
      width: "43%",
      height: 55,
      backgroundColor: "#F48D20",
      borderRadius: 15,
      justifyContent: "center",
      alignItems: "center"
    },
    buttonText: {
      fontSize: 24,
      color: "#FFFFFF",
      fontFamily: "Rajdhani_600SemiBold"
    },
    lowerContainer: {
      flex: 0.5,
      alignItems:"center"
    },
    title: {
      fontSize: 20,
      fontFamily: "Rajdhani_600SemiBold"
    },
    subtitle: {
      fontSize: 16,
      fontFamily: "Rajdhani_600SemiBold"
    },
    lowerLeftContaiiner: {
      alignSelf: "flex-end",
      marginTop: -40
    },
    transactionContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    transactionText: {
      fontSize: 20,
  
      fontFamily: "Rajdhani_600SemiBold"
    },
    date: {
      fontSize: 12,
      fontFamily: "Rajdhani_600SemiBold",
      paddingTop: 5
    }
  });
  