import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, useWindowDimensions } from 'react-native';

const LoginPage = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [boxColor, setBoxColor] = useState('rgba(0,0,0,0.4)');

 const windowDimensions = useWindowDimensions();

 let inputWidth;
 let inputMarginTop;
 let loginButtonMarginBottom;
 if (windowDimensions.width <= 768) { // Assuming 768px is the breakpoint for phones
 inputWidth = windowDimensions.width * 0.9; // 90% of screen width for phones
 inputMarginTop = windowDimensions.height * 0.2 - 50; // Spread the input fields more vertically and move them 50px up
 loginButtonMarginBottom = windowDimensions.height * 0.2; // Move the login button 150px from the bottom
 } else {
 inputWidth = windowDimensions.width * 0.5; // 50% of screen width for laptops
 inputMarginTop = 0;
 loginButtonMarginBottom = 0;
 }

 const inputHeight = windowDimensions.height * 0.075; // 10% of screen height

 return (
 <View style={styles.container}>
 <Text style={[styles.header, { marginTop: -75 }]}>QYL</Text>
 <Text style={styles.title}>HAC Login</Text>
 <TextInput
 style={[styles.input, { backgroundColor: boxColor, width: inputWidth, height: inputHeight, color: 'rgba(195,195,195,0.5)', marginTop: inputMarginTop }]}
 placeholder="Username"
 value={username}
 onChangeText={(text) => setUsername(text)}
 />
 <TextInput
 style={[styles.input, { backgroundColor: boxColor, width: inputWidth, height: inputHeight, color: 'rgba(195,195,195,0.5)', marginTop: 15 }]}
 placeholder="Password"
 secureTextEntry={true}
 value={password}
 onChangeText={(text) => setPassword(text)}
 />
 <Button 
 title="Login" 
 color="#5B0DBE"
 style={[ styles.login, {marginBottom: loginButtonMarginBottom, width: inputWidth, height: inputHeight, }]}
 titleStyle={{ fontSize: 35, textAlign: 'center' }}
 />
 </View>
 );
};

const styles = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 paddingHorizontal: 20,
 backgroundColor: '#15151A',
 },
 title: {
 fontSize: 25,
 fontWeight: 'bold',
 color: '#C9BADD',
 marginBottom: 20,
 },
 header: {
 fontSize: 125,
 fontWeight: 'bold',
 color: 'rgba(195,195,195,0.5)',
 marginBottom: 20,
 },
 input: {
 borderColor: '#252425',
 borderWidth: 2,
 marginBottom: 10,
 paddingLeft: 10,
 borderRadius: 7,
 fontSize: 25,
 fontWeight: 'bold',
 color: 'rgba(195,195,195,0.5)',
 },
 login: {

 },
});

export default LoginPage;
