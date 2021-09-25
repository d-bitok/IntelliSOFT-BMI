import React from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';

import {
    COLORS,
    SIZES,
    icons,
    FONTS,
} from '../constants';
// import { toggleTheme } from '../stores/themeActions';
// import { styles } from '../styles';

const HeaderBar = ({ toggleTheme, appTheme, label }) => {
    function toggleThemeHandler() {
        if (appTheme.name == "light") {
            toggleTheme("dark")
        } else {
            toggleTheme("light")
        }
    }

    return (
        <TouchableOpacity style={{
            paddingRight: SIZES.padding,
        }}>
            {/* Light and Dark Theme */}
            <View style={{
                width: 40,
                height: 40,
            }}></View>
        </TouchableOpacity>
    )
}