import { StyleSheet } from 'react-native'
import { COLORS } from '../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shadow: {
        shadowColor: COLORS.black1,
        shadowOffset: {
            width: 2,
            height: 3
        },
        shadowOpacity: 3.2,
        shadowRadius: 12,
        elevation: 1,
    },
    shadowy: {
        shadowColor: COLORS.black1,
        shadowOffset: {
            width: 2,
            height: 3
        },
        shadowOpacity: .8,
        shadowRadius: 12,
        elevation: 1,
    },
    shadows: {
        shadowColor: COLORS.black1,
        shadowOffset: {
            width: 2,
            height: 3
        },
        shadowOpacity: .26,
        shadowRadius: 12,
        elevation: 1,
    },
    selectedDarkModeStyle: {
        borderRadius: 24,
        backgroundColor: COLORS.transparentWhite,
    },
    selectedLightModeStyle: {
        borderRadius: 24,
        backgroundColor: COLORS.transparentBlack
    },
    button: {
        backgroundColor: 'white',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },
    menu: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // backgroundColor: COLORS.transparentBlack
    }
})

export default styles;