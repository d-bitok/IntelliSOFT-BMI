import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { COLORS, FONTS, SIZES } from '../../constants';
import { styles } from '../../styles';

const Login = ({ route, navigation }) => {

    const [registrationData, setRegistrationData] = React.useState([]);

    // Api Connection
    React.useEffect(() => {
        // fetch("http://localhost:4000/dbIntelliSOFT/")
    //     .then(res => res.json())
    //     .then(res => {
    //         if (res && !registrationData.length) {
    //             setRegistrationData(res);
    //         }
    //     });
    //     // props
    }, []);
    
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
                    {/* Header Title */}
                    <View style={{
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
                            Login Report
                        </Text>
                    </View>
                </View>
                {/* Back Navigation */}
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

    function renderDataPopulation() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    margin: 10,
                    ...styles.shadows,
                    alignItems: 'flex-end'
                }}>
                    {/* DOB */}
                    <Text style={{
                        ...FONTS.h2,
                        color: COLORS.black,
                        top: -7,
                        padding: SIZES.padding / 2
                    }}>DOB : {DateDOB} / {MonthDOB} / {YearDOB}</Text>
                </View>
                {/* Names */}
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: COLORS.green
                }}>
                    <View style={{
                        margin: 10,
                        ...styles.shadows,
                        alignItems: 'flex-start'
                    }}
                    >
                        <Text style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            paddingHorizontal: SIZES.padding / 2
                        }}>First Name</Text>
                    </View>
                    <View style={{
                        margin: 10,
                        ...styles.shadows,
                        alignItems: 'flex-end'
                    }}
                    >
                        <Text style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            paddingHorizontal: SIZES.padding / 2
                        }}>Last Name</Text>
                    </View>
                </View>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: COLORS.lightGreen
                    }}>
                        <View style={{
                            margin: 10,
                            ...styles.shadows,
                            alignItems: 'flex-start'
                        }}
                        >
                            <Text style={{
                                ...FONTS.h2,
                                color: COLORS.black,
                                padding: SIZES.padding / 2
                            }}>{FirstName}</Text>
                        </View>
                        <View style={{
                            margin: 10,
                            ...styles.shadows,
                            alignItems: 'flex-end'
                        }}
                        >
                            <Text style={{
                                ...FONTS.h2,
                                color: COLORS.black,
                                padding: SIZES.padding / 2
                            }}>{LastName}</Text>
                        </View>
                    </View>
                    {/* BMI Navigation Button */}
                    <TouchableOpacity style={{
                        backgroundColor: COLORS.blue,
                        height: 36,
                        borderRadius: 16,
                        margin: 10,
                        ...styles.shadows,
                        alignItems: 'center'
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
        )
    }

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {renderHeader()}
            {renderDataPopulation()}
        </View>
    )
}

export default Login;