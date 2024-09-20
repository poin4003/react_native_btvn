// ItemListNews.tsx
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const ItemListNews = ({ news }: any) => {
    if (!news) return null;

    return (
        <View style={styles.container}>
            {news.image && (
                <Image 
                    style={styles.image}
                    source={{ uri: news.image }}
                />
            )}

            <View style={styles.content}>
                <Text style={styles.category}>{news.category}</Text>
                <Text style={styles.textTitle}>{news.title}</Text>
                <Text style={styles.source}>{news.source} · {news.timeAgo}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10
    },
    category: {
        fontSize: 12,
        color: 'gray'
    },
    textTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5
    },
    source: {
        fontSize: 12,
        color: 'gray'
    },
    content: {
        flex: 1
    }
});

export default ItemListNews;

