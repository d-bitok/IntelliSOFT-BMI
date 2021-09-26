import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { COLORS } from '../../constants';

const Report = ({ route, navigation }) => {
    
    const {
        Date,
        Month,
        Year,
        Height,
        Weight,
        BMI,
        // Health,
        Comment,
    } = route.params;

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
                Home Page :
                {Date}
            </Text> 
            <Text>
                FirstName :
                 {Month}
            </Text>
            <Text>
                LastName :
                 {Year}
            </Text>
            <Text>
                dateDOB :
                 {Height}
            </Text>
            <Text>
                monthDOB :
                 {Weight}
            </Text>
            <Text>
                yearDOB :
                 {BMI}
            </Text>
            {/* <Text>
                monthDOB :
                 {Health}
            </Text> */}
            <Text>
                yearDOB :
                 {Comment}
            </Text>
        <TouchableOpacity style={{
            backgroundColor: COLORS.black,
            height: 25
        }}
            onPress={() => {navigation.navigate('Home')}}
        >
            <Text>Home</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}

export default Report;