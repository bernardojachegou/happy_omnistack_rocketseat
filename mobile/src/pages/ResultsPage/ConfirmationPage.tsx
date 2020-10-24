import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function SuccessPage() {

    const navigation = useNavigation();

    function handleCancelForOrphanageCreation() {
        navigation.navigate("OrphanagesMap");
    }

    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Feather name="x-square" size={64} color="#FFFFFF" />
            </View>

            <Text style={styles.title}>
                Cancelar cadastro
                </Text>
            <Text style={styles.paragraph}>
                Tem certeza que quer cancelar esse cadastro?
            </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.noButton} onPress={navigation.goBack}>
                    <Text style={styles.textButton}>Não</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.yesButton} onPress={handleCancelForOrphanageCreation}>
                    <Text style={styles.textButton}>Sim</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C194E3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },

    title: {
        color: '#FFFFFF',
        fontSize: 32,
        lineHeight: 34,
        fontFamily: 'Nunito_800ExtraBold',
        textAlign: 'center',
        marginBottom: 12,

    },

    paragraph: {
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'Nunito_600SemiBold',
        textAlign: 'center',
        width: 250,
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 24,
        width: 300,
    },

    noButton: {
        backgroundColor: '#C194E3',
        borderColor: '#87689F',
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 128,
    },

    yesButton: {
        backgroundColor: '#87689F',
        borderColor: '#87689F',
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 128,
    },

    textButton: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    }

});
