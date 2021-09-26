import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import { styles } from '../../styles';

const Report = ({ route, navigation }) => {
    
    const {
        f_name,
        l_name,
        date_DOB,
        month_DOB,
        year_DOB,
        Date,
        Month,
        Year,
        Height,
        Weight,
        BMI,
        // Health,
        Comment,
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
            <Text>
                Date :
                {Date} {Month} {Year}
            </Text>
            <Text>
                Height :
                 {Height}
            </Text>
            <Text>
                Weight :
                 {Weight}
            </Text>
            <Text>
                BMI :
                 {BMI}
            </Text>
            {/* <Text>
                monthDOB :
                 {Health}
            </Text> */}
            <Text>
                Comments :
                 {Comment}
            </Text>
        <TouchableOpacity style={{
            backgroundColor: COLORS.blue,
            height: 36,
            borderRadius: 16,
            margin: 10,
            ...styles.shadows
        }}
            onPress={() => {navigation.navigate('Home')}}
        >
            <Text style={{
                ...FONTS.h2,
                color: COLORS.white,
                top: -7,
                padding: SIZES.padding / 2
            }}>Home</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}

export default Report;