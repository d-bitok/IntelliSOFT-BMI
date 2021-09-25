import React from 'react';
import {
    View,
    Text
} from 'react-native';

import { connect } from 'react-redux';

import { HeaderBar } from '../../components'
import appTheme from '../../constants/theme';

const Report = ({ appTheme }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>Report</Text>
        </View>
    )
}
function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTheme: (themeType) => {
            return dispatch(toggleTheme(themeType))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Report);