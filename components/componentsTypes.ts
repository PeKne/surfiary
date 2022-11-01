import { FontAwesome } from '@expo/vector-icons';
import { SurfSessionModel } from '../database/modelTypes';

export type DetailAttributeProps = {
    icon: React.ComponentProps<typeof FontAwesome>['name'];
    title: string;
    value: string;
};

type ImageIconName = 'surf' | 'wetsuit';

export type ImageIconProps = {
    icon: ImageIconName;
};
