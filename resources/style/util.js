import {Dimensions,Platform} from 'react-native';
const X_WIDTH = 375;
const X_HEIGHT = 812;
export const WINDOW = Dimensions.get('window');
const SCREEN_WIDTH = WINDOW.width;
const SCREEN_HEIGHT = WINDOW.height;
export const isiPhoneX = () => {
    return (Platform.OS === 'ios' &&((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) || SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT));
};
