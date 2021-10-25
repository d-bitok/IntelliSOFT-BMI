import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import { styles } from '../../styles';

const Profile = ({ route, navigation }) => {
    
    // const {
    //     firstName,
    //     lastName,
    //     date,
    //     month,
    //     year,
    // } = route.params;

    function renderHeader() {
        return (
            <View style={{
                justifyContent: 'center',
            }}>
                <View style={{
                    top: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        // top: 10,
                        backgroundColor: COLORS.lightGray3,
                        borderRadius: 16,
                        height: 50,
                        paddingHorizontal: SIZES.padding,
                        ...styles.shadows,
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            ...FONTS.h1,
                        }}>
                            Profile Page
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: COLORS.blue,
                    height: 36,
                    borderRadius: 16,
                    margin: 10,
                    width: 64,
                    ...styles.shadows,
                    alignItems: 'flex-start'
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
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                // alignItems: 'center',
                // justifyContent: 'center'
            }}
        >
            {renderHeader()}
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
        {/* <TouchableOpacity style={{
            backgroundColor: COLORS.black,
            height: 25
        }}
            onPress={() => {navigation.navigate('BMI')}}
        >
            <Text>Home</Text>
        </TouchableOpacity> */}
        </View>
        </View>
    )
}

export default Profile;