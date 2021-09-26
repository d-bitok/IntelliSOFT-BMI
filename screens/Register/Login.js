import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { COLORS, FONTS, SIZES } from '../../constants';
import { styles } from '../../styles';

const Login = ({ route, navigation }) => {
    
    const {
        f_name,
        l_name,
        date_DOB,
        month_DOB,
        year_DOB,
    } = route.params;

    let FirstName = f_name;
    let LastName = l_name;
    let DateDOB = date_DOB;
    let MonthDOB = month_DOB;
    let YearDOB = year_DOB;

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
        <TouchableOpacity style={{
            backgroundColor: COLORS.blue,
            height: 36,
            borderRadius: 16,
            margin: 10,
            ...styles.shadows
        }}
            onPress={() => {navigation.goBack()}}
        >
            <Text style={{
                ...FONTS.h2,
                color: COLORS.white,
                top: -7,
                padding: SIZES.padding / 2
            }}>Back</Text>
        </TouchableOpacity>
            <Text>
                Home Page
            </Text> 
            <Text>
                DOB :
                 {DateDOB} {MonthDOB} {YearDOB}
            </Text>
            <Text>
                FirstName :
                 {FirstName}
            </Text>
            <Text>
                LastName :
                 {LastName}
            </Text>
        <TouchableOpacity style={{
            backgroundColor: COLORS.blue,
            height: 36,
            borderRadius: 16,
            margin: 10,
            ...styles.shadows
        }}
            onPress={() => {navigation.navigate('BMI',
            {
                FirstName,
                LastName,
                DateDOB,
                MonthDOB,
                YearDOB,
            })}}
        >
            <Text style={{
                ...FONTS.h2,
                color: COLORS.white,
                top: -7,
                padding: SIZES.padding / 2
            }}>Check BMI</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}

export default Login;