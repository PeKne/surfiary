import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import useThemeColor from '../../hooks/useThemeColor';

type IconProps = React.ComponentProps<typeof FontAwesome>;

const Icon = ({ style, size = 20, ...otherProps }: IconProps) => {
    const color = useThemeColor('text');
    const backgroundColor = useThemeColor('background');
    const themed = { color, backgroundColor, marginTop: -3 };

    return <FontAwesome style={[themed, style]} size={size} {...otherProps} />;
};

export default Icon;
