/* eslint-disable global-require */
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import getDatabaseConnection, { DatabaseInterface } from '../database/model';

export default function useBackendResources() {
    const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);
    const [database, setDatabase] = useState<DatabaseInterface | null>(null);

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        async function loadResources() {
            try {
                SplashScreen.preventAutoHideAsync();
                const DB = await getDatabaseConnection();
                setDatabase(DB);

                // Load fonts
                await Font.loadAsync({
                    ...FontAwesome.font,
                    'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
                });
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResources();
    }, []);

    if (isLoadingComplete) {
        return database;
    }
    return null;
}
