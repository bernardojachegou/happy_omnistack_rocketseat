import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

// import happyIcon from '../../images/happyIcon.png';

export default function HappyFirst() {

    const navigation = useNavigation();

    function handleHappySecondPage() {
        navigation.navigate('OrphanagesMap');
    }

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                {/* <Image source={happyIcon} style={styles.happyIcon} /> */}
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Leve felicidade para o mundo
                </Text>
                <Text style={styles.paragraph}>
                    Visite orfanatos e mude o dia de muitas crianças.
                </Text>
            </View>

            <RectButton style={styles.nextButton} onPress={handleHappySecondPage}>
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
        width: 380,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },

    happyIcon: {
        width: 195,
        height: 195,
    },

    textContainer: {
        width: 380,
        paddingHorizontal: 60,
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
        bottom: 50,
        right: 50,
        backgroundColor: '#C194E3',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 56,
    }
})