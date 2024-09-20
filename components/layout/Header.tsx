// Header.tsx
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                Ka
                <Text style={{ color: 'blue' }}>bar</Text>
            </Text>
            <TouchableOpacity style={styles.headerIcon}>
                {/* Thay thế bằng hình ảnh của biểu tượng thông báo */}
                <Image source={require('../../assets/notification_icon.png')} style={styles.iconImage} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerIcon: {
        width: 24,
        height: 24,
    },
    iconImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
});

export default Header;
