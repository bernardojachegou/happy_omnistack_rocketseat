import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import happyIcon from '../../../assets/icon.png';

export default function HappyFirst() {

    const navigation = useNavigation();

    function handleHappyNextScreen() {
        navigation.navigate('HappySecond');
    }

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image source={happyIcon} style={styles.happyIcon} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Leve felicidade para o mundo
                </Text>
                <Text style={styles.paragraph}>
                    Visite orfanatos e mude o dia de muitas crianças.
                </Text>
            </View>

            <RectButton style={styles.nextButton} onPress={handleHappyNextScreen}>
                <Feather name="arrow-right" size={24} color="#FFFFFF" />
            </RectButton>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3DB94',
        alignItems: 'center',
        justifyContent: 'center'
    },

    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
    },

    happyIcon: {
        width: 335,
        height: 335,
    },

    textContainer: {
        width: 380,
        paddingHorizontal: 60,
        marginBottom: 50,
    },

    title: {
        color: '#000000',
        fontSize: 50,
        fontFamily: 'Nunito_800ExtraBold',
        lineHeight: 52,
    },

    paragraph: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 20,
        lineHeight: 30,
    },

    nextButton: {
        position: 'absolute',
        bottom: 35,
        right: 35,
        backgroundColor: '#C194E3',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 56,
    }
})