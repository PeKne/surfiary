/* eslint-disable global-require */
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import setUpDatabase from '../database/model';
import { DatabaseInterface } from '../database/modelTypes';

export default function useBackendResources() {
    const [database, setDatabase] = useState<DatabaseInterface | null>(null);

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        async function loadResources() {
            SplashScreen.preventAutoHideAsync();
            const DB = await setUpDatabase();
            setDatabase(DB);

            // Load fonts
            await Font.loadAsync({
                ...FontAwesome.font,
                'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
            });
            SplashScreen.hideAsync();
        }

        loadResources();
    }, []);

    return database;
}
