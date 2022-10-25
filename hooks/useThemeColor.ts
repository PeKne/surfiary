import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const useThemeColor = (colorName: keyof typeof Colors.light & keyof typeof Colors.dark) => {
    const theme = useColorScheme();
    return Colors[theme][colorName];
};

export default useThemeColor;
