import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function OnboardingProcess() {

    const navigation = useNavigation();

    const completeOnboarding = async () => {
        await AsyncStorage.setItem('hasOnboarded', JSON.stringify({
            hasOnboarded: true
        }));

        navigation.navigate('OrphanagesMap');
    }

    return (
        <Onboarding
            onDone={completeOnboarding}
            controlStatusBar={false}
            imageContainerStyles={{ paddingBottom: 20 }}
            showSkip={false}
            bottomBarColor={'#E3DB94'}
            bottomBarHeight={80}
            nextLabel={<Feather name="arrow-right" size={32} color="#000000" />}
            pages={[
                {
                    backgroundColor: '#E3DB94',
                    image:
                        <Image
                            source={require('../../images/logo.png')}
                        />,
                    title:
                        <Text style={styles.title}>
                            Leve felicidade para o mundo
                        </Text>,
                    subtitle:
                        <Text style={styles.paragraph}>
                            Visite orfanatos e mude o dia de muitas crianças.
                        </Text>,
                },
                {
                    backgroundColor: '#E3DB94',
                    image:
                        <Image
                            source={require('../../images/landing.png')}
                        />,
                    title:
                        <Text style={styles.secondTitle}>
                            Escolha um orfanato no mapa e faça uma visita
                        </Text>,
                    subtitle: '',
                }
            ]}
        />
    )
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Nunito_800ExtraBold',
        color: '#000000',
        fontSize: 50,
        lineHeight: 55,
        textAlign: 'left',
        width: 280,
    },

    paragraph: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#000000',
        fontSize: 20,
        lineHeight: 30,
        textAlign: 'left',
        width: 280,
        marginBottom: 30
    },

    secondTitle: {
        color: '#000000',
        fontSize: 30,
        fontFamily: 'Nunito_800ExtraBold',
        lineHeight: 36,
        textAlign: 'right',
        width: 270,
        marginBottom: 30
    }
});