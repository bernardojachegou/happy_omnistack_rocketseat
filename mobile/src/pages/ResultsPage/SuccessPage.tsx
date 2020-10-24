import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import successIcon from '../../images/success.png';

export default function SuccessPage() {

    const navigation = useNavigation();

    function handleHappyNextScreen() {
        navigation.navigate('OrphanagesMap');
    }

    return (
        <View style={styles.container}>

        <View style={styles.imageContainer}>
            <Image source={successIcon} />
        </View>

        <Text style={styles.title}>
            Ebaaa!
            </Text>
        <Text style={styles.paragraph}>
            O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)
        </Text>

        <RectButton style={styles.nextButton} onPress={handleHappyNextScreen}>
            <Text style={styles.textButton}>Ok</Text>
        </RectButton>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3DB94',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },

    title: {
        color: '#000000',
        fontSize: 40,
        lineHeight: 45,
        fontFamily: 'Nunito_800ExtraBold',
        textAlign: 'center',
        marginBottom: 12,

    },

    paragraph: {
        color: '#000000',
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'Nunito_600SemiBold',
        textAlign: 'center',
        width: 340,
    },

    nextButton: {
        backgroundColor: '#C194E3',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 112,
        marginTop: 24,
    },

    textButton: {
        color: '#FFFFFF'
    }
})