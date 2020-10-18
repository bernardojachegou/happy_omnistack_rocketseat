import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import LandingImg from '../../images/landing.png';

export default function HappyFirst() {

    const navigation = useNavigation();

    function handleHappyNextScreen() {
        navigation.navigate('OrphanagesMap');
    }

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image source={LandingImg} />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Escolha um orfanato no mapa e faça uma visita
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
        backgroundColor: '#E3DB94'
    },

    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },

    happyIcon: {
        width: 195,
        height: 195,
    },

    textContainer: {
        width: 350,
        paddingHorizontal: 30,
        marginLeft: 30,
        marginTop: 0,
    },

    title: {
        color: '#000000',
        fontSize: 30,
        fontFamily: 'Nunito_800ExtraBold',
        lineHeight: 36,
        textAlign: 'right'
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