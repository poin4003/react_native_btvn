import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const apiEndpoint = 'https://66e7d895b17821a9d9da305c.mockapi.io/api/v1/';

const Register = ({ navigation }: any) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleRegister = async () => {
        const name: string = "";

        const newUser = { name, email, password }

        try {
            await axios.post(`${apiEndpoint}/users`, newUser);
            Alert.alert('Success', 'User registered successfully. You can login.');

            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error registering user: ', error);
            Alert.alert('Error', 'Registraion failed. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Register Screen</Text>
            <TextInput
                style={styles.input} 
                value={email}
                placeholder="Input email..."
                onChangeText={(text: string) => setEmail(text)}
            ></TextInput>
            <TextInput
                style={styles.input} 
                value={password}
                placeholder="Input password..."
                onChangeText={(text: string) => setPassword(text)}
                secureTextEntry={true}
            >
            </TextInput>
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => handleRegister()}
            >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.navButton} 
                onPress={() => navigation.navigate('Login')}
            >
                <Text>Go to Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        marginBottom: 10
    },
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 20,
        color: '#6646ee'
    },
    input: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: width / 1.5,
        height: height / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1 
    },
    buttonContainer: {
        marginTop: 10,
        width: width / 2,
        height: height / 15,
        backgroundColor: '#6495ed',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff'
    }
});

export default Register;
