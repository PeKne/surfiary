/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootTabParamList } from './navigationTypes';

const linking: LinkingOptions<RootTabParamList> = {
    prefixes: [Linking.createURL('/')],
    config: {
        screens: {
            SessionStackNavigator: {
                screens: { SessionList: 'SessionList', SessionDetail: 'SessionDetail', SessionEdit: 'SessionEdit' },
            },
            EquipmentTabNavigator: {
                screens: {
                    SurfboardStackNavigator: {
                        screens: {
                            SurfboardList: 'SurfboardList',
                            SurfboardDetail: 'SurfboardDetail',
                            SurfboardEdit: 'SurfboardEdit',
                        },
                    },
                    WetsuitStackNavigator: {
                        screens: {
                            WetsuitList: 'WetsuitList',
                            WetsuitDetail: 'WetsuitDetail',
                            WetsuitEdit: 'WetsuitEdit',
                        },
                    },
                },
            },
            Stats: 'Stats',
            Settings: 'Settings',
        },
    },
};

export default linking;
