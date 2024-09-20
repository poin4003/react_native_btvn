// Trending.tsx
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Trending = () => {
    return (
        <View style={styles.trendingSection}>
            <Text style={styles.sectionTitle}>Trending</Text>
            <View style={styles.trendingItem}>
                <Image source={{ uri: 'https://e1.pxfuel.com/desktop-wallpaper/153/171/desktop-wallpaper-japanese-battleship-yamato-gameplay-ijn-yamato.jpg' }} style={styles.trendingImage} />
                <View style={styles.trendingContent}>
                    <Text style={styles.trendingCategory}>Europe</Text>
                    <Text style={styles.trendingTitle}>Russian warship: Moskva sinks in Black Sea</Text>
                    <Text style={styles.trendingSource}>BBC News · 4h ago</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    trendingSection: {
        marginBottom: 20
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    trendingItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden'
    },
    trendingImage: {
        width: 100,
        height: 100
    },
    trendingContent: {
        padding: 10,
        flex: 1
    },
    trendingCategory: {
        fontSize: 12,
        color: 'gray'
    },
    trendingTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 5
    },
    trendingSource: {
        fontSize: 12,
        color: 'gray'
    }
});

export default Trending;
