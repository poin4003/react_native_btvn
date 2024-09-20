import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from './layout/Header';
import Search from './layout/Search';
import Trending from './layout/Trending';
import Latest from './layout/Latest';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

const Stack = createNativeStackNavigator();

const apiEndpoint = 'https://66e7d895b17821a9d9da305c.mockapi.io/api/v1/'

const ListNews = () => {

    const [ newsData, setNewsData ]= useState([]);

    const fetchNewsData = async () => {
        try {
            const response = await axios.get(`${apiEndpoint}/news`);
            setNewsData(response.data);
        } catch (error) {
            console.error('Error fetching news data: ', error);
        }
    }

    useEffect(() => {
        fetchNewsData();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Header />
            <Search />
            <Trending />
            <Latest newsData={newsData} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    }
});

export default ListNews;

