/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SurfSessionFormatted, SurfboardFormatted, WetsuitFormatted } from '../database/modelTypes';

export type RootTabParamList = {
    SessionStackNavigator?: NavigatorScreenParams<SessionStackParamList>;
    EquipmentTabNavigator?: NavigatorScreenParams<EquipmentTabParamList>;
    Stats: undefined;
    Settings: undefined;
};

export type SessionStackParamList = {
    SessionList: undefined;
    SessionDetail: { sessionData: SurfSessionFormatted };
    SessionEdit?: { sessionData: SurfSessionFormatted };
};

export type EquipmentTabParamList = {
    SurfboardStackNavigator: NavigatorScreenParams<SurfboardStackParamList>;
    WetsuitStackNavigator: NavigatorScreenParams<WetsuitStackParamList>;
};

export type SurfboardStackParamList = {
    SurfboardList: undefined;
    SurfboardDetail: { surfboard: SurfboardFormatted };
    SurfboardEdit?: { surfboard: SurfboardFormatted };
};

export type WetsuitStackParamList = {
    WetsuitList: undefined;
    WetsuitDetail: { wetsuit: WetsuitFormatted };
    WetsuitEdit?: { wetsuit: WetsuitFormatted };
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    CompositeScreenProps<NativeStackScreenProps<SessionStackParamList>, NativeStackScreenProps<EquipmentTabParamList>>
>;

export type SessionStackScreenProps<Screen extends keyof SessionStackParamList> = NativeStackScreenProps<
    SessionStackParamList,
    Screen
>;

export type SurfboardStackScreenProps<Screen extends keyof SurfboardStackParamList> = NativeStackScreenProps<
    SurfboardStackParamList,
    Screen
>;

export type WetsuitStackScreenProps<Screen extends keyof WetsuitStackParamList> = NativeStackScreenProps<
    WetsuitStackParamList,
    Screen
>;
