import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import HappyFirst from './pages/OnBoarding/HappyFirst';
import HappySecond from './pages/OnBoarding/HappySecond';
import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/CreateOrphanage/OrphanageDetails'
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import Header from './components/Header';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen
                    name="HappyFirst"
                    component={HappyFirst}
                />
                <Screen
                    name="HappySecond"
                    component={HappySecond}
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
            </Navigator>
        </NavigationContainer>
    )
}