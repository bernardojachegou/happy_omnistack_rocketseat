import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import Header from './components/Header';
import FirstOnBoarding from './pages/OnBoarding/FirstOnBoarding';
import SecondOnBoarding from './pages/OnBoarding/SecondOnBoarding';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/CreateOrphanage/OrphanageDetails'
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import SuccessPage from './pages/SuccessPage';
import ConfirmationPage from './pages/ConfirmationPage';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen
                    name="ConfirmationPage"
                    component={ConfirmationPage}
                />
                <Screen
                    name="HappyFirst"
                    component={FirstOnBoarding}
                />
                <Screen
                    name="HappySecond"
                    component={SecondOnBoarding}
                />
                <Screen
                    name="OrphanagesMap"
                    component={OrphanagesMap}
                />
                <Screen
                    name="OrphanagesDetails"
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Orfanato" />
                    }}
                />
                <Screen
                    name="SelectMapPosition"
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Selecione no mapa" />
                    }}
                />
                <Screen
                    name="OrphanageData"
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados" />
                    }}
                />
                <Screen
                    name="SuccessPage"
                    component={SuccessPage}
                />
            </Navigator>
        </NavigationContainer>
    )
}