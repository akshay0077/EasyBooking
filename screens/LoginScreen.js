import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {

  // new added
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  // const login = () => {
  //   if(email){
  //     setEmailError("");
  //   }if(password){
  //     setPasswordError("");
  //   }
  //   if(!email)
  //   {
  //     setEmailError("Please fill out Email fields.");
  //   }
  //   if (!password) {
  //     setPasswordError("Please fill out Password fields.");
  //   } 
  //   if(password && email){
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         console.log("user credential", userCredential);
  //         const user = userCredential.user;
  //         console.log("user details", user);
  //       })
  //       .catch((error) => {
  //         if (error.code === "auth/invalid-email") {
  //           setEmailError("Invalid email address.");
  //           setPasswordError("");
  //         } else {
  //           setEmailError("");
  //           setPasswordError("Incorrect email or password.");
  //         }
  //       });
  //   }
  // };

  const login = () => {
    let emailError = "";
    let passwordError = "";
    
    if(!email) {
      emailError = "Please fill out Email field.";
    }
    if (!password) {
      passwordError = "Please fill out Password field.";
    } 
    if(emailError || passwordError) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      return;
    }
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user credential", userCredential);
        const user = userCredential.user;
        console.log("user details", user);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          setEmailError("Invalid email address.");
          setPasswordError("");
        } else {
          setEmailError("");
          setPasswordError("Incorrect email or password.");
        }
      });
  };
  
  

 useEffect(() => {
   try {
     const unsubscribe = auth.onAuthStateChanged((authUser) => {
       if (authUser) {
         navigation.replace("Main");
       }
     });

     return unsubscribe;
   } catch (e) {
     console.log(e);
   }
 }, []);

  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>EasyBooking</Text>
      <Text style={styles.title}>Welcome Back!</Text>
      <View style={styles.form}>
        {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Enter your email address"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Enter your password"
            onChangeText={setPassword}
            value={password}
          />
        </View> */}
        <View style={styles.inputContainer}>
  <Text style={styles.label}>Email</Text>
  <TextInput
    style={styles.input}
    autoCapitalize="none"
    placeholder="Enter your email address"
    onChangeText={setEmail}
    value={email}
  />
  <Text style={styles.errorText}>{emailError}</Text>
</View>
<View style={styles.inputContainer}>
  <Text style={styles.label}>Password</Text>
  <TextInput
    style={styles.input}
    autoCapitalize="none"
    secureTextEntry={true}
    placeholder="Enter your password"
    onChangeText={setPassword}
    value={password}
  />
  <Text style={styles.errorText}>{passwordError}</Text>
</View>

        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <Text style={styles.linkText} onPress={handleRegisterPress}>
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  appName: {
    textAlign:"center",
    alignItems:"center",
    fontSize: 35,
    fontWeight: "bold",
    color: "#003580",
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
  },
  form: {
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: "#333",
  },
  loginButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    borderRadius: 4,
  },
 
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#333",
  },
  linkText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
    textDecorationLine: "underline"
  },

  inputContainer: {
    marginBottom: 20
    },
    label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5
    },
    input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000'
    },
    button: {
      backgroundColor: '#003580',
      borderRadius: 10,
      paddingVertical: 12,
      alignItems: 'center',
      marginTop: 20
      },
      buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '500'
      },
    footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#003580',
    fontSize: 16,
    fontWeight: '500'
    },
    errorText: {
      color: "red",
      fontSize: 12,
      marginVertical: 5,
    },
    
});

export default LoginScreen;