import { FontAwesome } from '@expo/vector-icons';
import { SurfSessionModel } from '../database/modelTypes';

export type SessionCardProps = {
    sessionData: SurfSessionModel;
    openDetail(): void;
};

export type DetailAttributeProps = {
    icon: React.ComponentProps<typeof FontAwesome>['name'];
    title: string;
    value: string;
};

type ImageIconName = 'surf' | 'wetsuit';

export type ImageIconProps = {
    icon: ImageIconName;
};
