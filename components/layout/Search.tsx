import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native';

const Search = () => {
    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search"
            />
            <TouchableOpacity style={styles.filterIcon}>
                <Image source={require('../../assets/filter_icon.png')} style={styles.iconImage} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    searchInput: {
        flex: 1,
        paddingVertical: 5,
        paddingLeft: 10,
        fontSize: 16
    },
    filterIcon: {
        padding: 5
    },
    iconImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    }
});

export default Search;
