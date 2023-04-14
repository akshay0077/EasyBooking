// import { StyleSheet, Text, View ,SafeAreaView,KeyboardAvoidingView,Pressable,TextInput, Alert} from 'react-native'
// import React ,{useState} from 'react'
// import { useNavigation } from '@react-navigation/native';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from '../firebase';
// import { setDoc,doc } from 'firebase/firestore';
// import AsyncStorage from '@react-native-async-storage/async-storage';



// const RegisterScreen = () => {
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     const [phone,setPhone] = useState("");
//     const navigation = useNavigation();
//     const register = () => {
//         if(email === "" || password === "" || phone === "" ){
//             Alert.alert(
//                 "Invalid Detials",
//                 "Please enter all the credentials",
//                 [
//                   {
//                     text: "Cancel",
//                     onPress: () => console.log("Cancel Pressed"),
//                     style: "cancel"
//                   },
//                   { text: "OK", onPress: () => console.log("OK Pressed") }
//                 ],
//                 { cancelable: false }
//               );
//         }
//         createUserWithEmailAndPassword(auth,email,password).then((userCredentials) => {
           
//             const user = userCredentials._tokenResponse.email;
//             const uid = auth.currentUser.uid;

//              setDoc(doc(db,"users",`${uid}`),{
//                  email:user,
//                  phone:phone
//              })
//         })
//     }
//   return (
//     <SafeAreaView  style={{
//         flex: 1,
//         backgroundColor: "white",
//         padding: 10,
//         alignItems: "center",
//       }}>
//     <KeyboardAvoidingView>
//         <View
//           style={{
//             justifyContent: "center",
//             alignItems: "center",
//             marginTop: 100,
//           }}
//         >
//           <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
//             Register
//           </Text>

//           <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
//            Create an Account
//           </Text>
//         </View>

//         <View style={{ marginTop: 50 }}>
//           <View>
//             <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
//               Email
//             </Text>

//             <TextInput
//               value={email}
//               onChangeText={(text) => setEmail(text)}
//               placeholder="enter your email id"
//               placeholderTextColor={"black"}
//               style={{
//                 fontSize: email ? 18 : 18,
//                 borderBottomColor: "gray",
//                 borderBottomWidth: 1,
//                 marginVertical: 10,
//                 width: 300,
//               }}
//             />
//           </View>

//           <View style={{ marginTop: 15 }}>
//             <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
//               Password
//             </Text>

//             <TextInput
//               value={password}
//               onChangeText={(text) => setPassword(text)}
//               secureTextEntry={true}
//               placeholder="Password"
//               placeholderTextColor={"black"}
//               style={{
//                 fontSize: password ? 18 : 18,
//                 borderBottomColor: "gray",
//                 borderBottomWidth: 1,
//                 marginVertical: 10,
//                 width: 300,
//               }}
//             />
//           </View>

//           <View style={{ marginTop: 15 }}>
//             <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
//               Phone
//             </Text>

//             <TextInput
//               value={phone}
//               onChangeText={(text) => setPhone(text)}
//               placeholder="enter your Phone No"
//               placeholderTextColor={"black"}
//               style={{
//                 fontSize: password ? 18 : 18,
//                 borderBottomColor: "gray",
//                 borderBottomWidth: 1,
//                 marginVertical: 10,
//                 width: 300,
//               }}
//             />
//           </View>
//         </View>

//         <Pressable
//         onPress={register}
//           style={{
//             width: 200,
//             backgroundColor: "#003580",
//             padding: 15,
//             borderRadius: 7,
//             marginTop: 50,
//             marginLeft: "auto",
//             marginRight: "auto",
//           }}
//         >
//           <Text style={{textAlign:"center",color:"white",fontSize:17,fontWeight:"bold"}}>Register</Text>
//         </Pressable>

//         <Pressable onPress={() => navigation.goBack()} style={{marginTop:20}}>
//             <Text style={{textAlign:"center",color:"gray",fontSize:17}}>Already have an account? Sign In</Text>
//         </Pressable>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   )
// }

// export default RegisterScreen

// const styles = StyleSheet.create({})

import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Pressable, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();
  
  const register = async() => {
    if (email === '' || password === '' || phone === '') {
      Alert.alert(
        'Invalid Details',
        'Please enter all the credentials',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );
    }

    
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials._tokenResponse.email;
        const uid = auth.currentUser.uid;

        setDoc(doc(db, 'users', `${uid}`), {
          email: user,
          phone: phone
        })
      })
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.form}>
      <Text style={styles.appName}>EasyBooking</Text>
        <Text style={styles.heading}>Register</Text>
        <Text style={styles.subheading}>Create an Account</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter your email address"
            placeholderTextColor="#8f8f8f"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            placeholder="Enter your password"
            placeholderTextColor="#8f8f8f"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            value={phone}
            onChangeText={(text) => setPhone(text)}
            placeholder="Enter your phone number"
            placeholderTextColor="#8f8f8f"
            style={styles.input}
          />
        </View>

        <Pressable
          onPress={register}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.footerText}>Already have an account? Sign In</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  appName: {
    textAlign:"center",
    alignItems:"center",
    fontSize: 35,
    fontWeight: "bold",
    color: "#003580",
    marginBottom: 20,
  },
  form: {
    width: '80%'
  },
  heading: {
    color: '#003580',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20
  },
  subheading: {
    fontSize:16,
    fontWeight: '500',
    marginBottom: 40
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
    }
    });
    
    export default RegisterScreen;