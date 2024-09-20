import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from 'expo-router';

const apiEndpoint = 'https://66e7d895b17821a9d9da305c.mockapi.io/api/v1/'

const Login = ({ navigation, route } : any) => {

    const [ users, setUsers ] = useState<any[]>([]);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${apiEndpoint}/users`);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users: ', error);
        }
    };


    useFocusEffect(
        React.useCallback(() => {
            fetchUsers();
        }, [])
    );

    const handleLogin = () => {
        const user = users.find(
            (user: any) => user.email === email && user.password === password
        );
        if (user) {
            navigation.navigate('ListNews');
        } else {
            Alert.alert('Error', 'Invalid email or password');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Login Screen </Text>
            <TextInput
                style={styles.input} 
                value={email}
                placeholder='Email'
                onChangeText={(text: string) => setEmail(text)}
            >
                
            </TextInput>
            <TextInput
                style={styles.input} 
                value={password}
                placeholder="password"
                onChangeText={(text: string) => setPassword(text) }
                secureTextEntry={true}
            ></TextInput>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                handleLogin();
            }}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => {
                navigation.navigate('Register');
            }}>
                <Text>New user? Join here</Text>
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

export default Login;
