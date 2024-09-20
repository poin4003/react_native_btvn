import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import ItemListNews from '../ItemListNews'; // Assuming this is the correct import for your ItemListNews component

const categories = ['All', 'Sports', 'Politics', 'Business', 'Health', 'Travel', 'Science', 'Tech']; // Example categories

const Latest = ({ newsData }: any) => {
    return (
        <View style={styles.latestSection}>
            <Text style={styles.sectionTitle}>Latest</Text>
            <View style={styles.categoryBar}>
                {categories.map((category, index) => (
                    <TouchableOpacity key={index} style={styles.categoryItem}>
                        <Text style={styles.categoryText}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            {newsData.map((item: any, index: any) => <ItemListNews key={index} news={item} />)}

        </View>
    );
};

const styles = StyleSheet.create({
    latestSection: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    categoryBar: {
        flexDirection: 'row',
        marginBottom: 10,
        flexWrap: 'wrap', // This will allow items to wrap to the next line if there's not enough horizontal space
    },
    categoryItem: {
        padding: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        marginRight: 10,
    },
    categoryText: {
        fontSize: 14,
        color: '#333',
    },
});

export default Latest;
