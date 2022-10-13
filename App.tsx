import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DatabaseContext from './database/DatabaseContext';
import useBackendResources from './hooks/useBackendResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation/RootTabNavigator';

const App = () => {
    const database = useBackendResources();
    const colorScheme = useColorScheme();

    if (!database) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <DatabaseContext.Provider value={database}>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
            </DatabaseContext.Provider>
        </SafeAreaProvider>
    );
};

export default App;
