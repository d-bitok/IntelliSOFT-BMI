import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { COLORS } from '../../constants';

const Profile = ({ route, navigation }) => {
    
    // const {
    //     firstName,
    //     lastName,
    //     date,
    //     month,
    //     year,
    // } = route.params;

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
                FirstName :
                 {/* {firstName} */}
            </Text>
            <Text>
                LastName :
                 {/* {lastName} */}
            </Text>
            <Text>
                dateDOB :
                 {/* {date} */}
            </Text>
            <Text>
                monthDOB :
                 {/* {month} */}
            </Text>
            <Text>
                yearDOB :
                 {/* {year} */}
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

export default Profile;