import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import Header from './components/Header';
import Onboarding from './pages/Onboarding/Onboarding';
import OrphanagesMap from './pages/MainPage/OrphanagesMap';
import OrphanageDetails from './pages/CreateOrphanage/OrphanageDetails'
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import SuccessPage from './pages/ResultsPage/SuccessPage';
import ConfirmationPage from './pages/ResultsPage/ConfirmationPage';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen
                    name="Onboarding"
                    component={Onboarding}
                />
                <Screen
                    name="OrphanagesMap"
                    component={OrphanagesMap}
                />
                <Screen
                    name="OrphanageDetails"
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
                <Screen
                    name="ConfirmationPage"
                    component={ConfirmationPage}
                />
            </Navigator>
        </NavigationContainer>
    )
}