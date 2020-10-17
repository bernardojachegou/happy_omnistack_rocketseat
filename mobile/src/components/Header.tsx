import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    showCancel?: boolean;
}

export default function Header({ title, showCancel = true }: HeaderProps) {

    const navigation = useNavigation();

    function handleGoBackToMapPage() {
        navigation.navigate('OrphanagesMap');
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#C194E3" />
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>

            { showCancel ? (
                <BorderlessButton onPress={handleGoBackToMapPage}>
                    <Feather name="x" size={24} color="#ff669d" />
                </BorderlessButton>
            ) : (
                    <View />
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    title: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#87689f',
        fontSize: 16,
    }
})