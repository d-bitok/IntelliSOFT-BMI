import React from 'react';
import {
    View,
    Text
} from 'react-native';
// import Tabs from './navigation/tabs'

const Home = ({ route }) => {
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
        </View>
    )
}

export default Home;