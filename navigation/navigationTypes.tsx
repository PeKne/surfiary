/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// declare global {
//   namespace ReactNavigation {
//     type RootParamList = RootStackParamList;
//   }
// }

export type RootTabParamList = {
    SessionStackNavigator?: NavigatorScreenParams<SessionStackParamList>;
    EquipmentStackNavigator?: NavigatorScreenParams<EquipmentStackParamList>;
    Stats: undefined;
    Settings: undefined;
};

export type SessionStackParamList = {
    SessionList: Screen;
    SessionDetail: undefined;
    SessionEdit: undefined;
};

export type EquipmentStackParamList = {
    EquipmentList: undefined;
    EquipmentDetail: undefined;
    EquipmentEdit: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    CompositeScreenProps<NativeStackScreenProps<SessionStackParamList>, NativeStackScreenProps<EquipmentStackParamList>>
>;

export type SessionStackScreenProps<Screen extends keyof SessionStackParamList> = NativeStackScreenProps<
    SessionStackParamList,
    Screen
>;

export type EquipmentStackScreenProps<Screen extends keyof EquipmentStackParamList> = NativeStackScreenProps<
    EquipmentStackParamList,
    Screen
>;
