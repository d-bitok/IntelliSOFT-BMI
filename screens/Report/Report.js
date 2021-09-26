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
        FirstName,
        LastName,
        DateDOB,
        MonthDOB,
        YearDOB,
        Date,
        Month,
        Year,
        Height,
        Weight,
        BMI,
        Comment,
    } = route.params;


    function getAge(x, y) {
        return y - x;
    }

    function getBMIStatus(x) {
        if (x > -1 && x < 19) {
            return 'Underweight'
        } else if (x > 18 && x < 26) {
            return 'Normal'
        } else if (x > 24) {
            return 'Overweight'
        }
        return 'Invalid Value'
    }

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
                            Patient Report
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

    function renderDataPopulation() {
        return (
            <View
                style={{
                    flex: 1,
                    // alignItems: 'center',
                    // justifyContent: 'center'
                }}
            >
                <View style={{
                    margin: 10,
                    ...styles.shadows,
                    alignItems: 'flex-end'
                }}
                >
                    <Text style={{
                        ...FONTS.h2,
                        color: COLORS.black,
                        top: -7,
                        padding: SIZES.padding / 2
                    }}>Date : {Date} / {Month} / {Year}</Text>
                </View>
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
                        }}>Full Names</Text>
                    </View>
                    <View style={{
                        margin: 10,
                        ...styles.shadows,
                        alignItems: 'center'
                    }}
                    >
                        <Text style={{
                            ...FONTS.h2,
                            color: COLORS.white,
                            paddingHorizontal: SIZES.padding / 2
                        }}>Age</Text>
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
                        }}>BMI Status</Text>
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
                        }}>{FirstName} {LastName}</Text>
                    </View>
                    <View style={{
                        margin: 10,
                        ...styles.shadows,
                        alignItems: 'center'
                    }}
                    >
                        <Text style={{
                            ...FONTS.h2,
                            color: COLORS.black,
                            padding: SIZES.padding / 2
                        }}>{getAge(YearDOB, Year)}</Text>
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
                        }}>{getBMIStatus(parseInt(BMI))}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: COLORS.blue,
                    height: 36,
                    borderRadius: 16,
                    margin: 10,
                    ...styles.shadows,
                    alignItems: 'center'
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

                    <Text>
                        Report Page
                    </Text> 
                    <Text>
                        Date :
                        {Date} / {Month} / {Year}
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
                    <Text>
                        Comments :
                        {Comment}
                    </Text>
                    <Text>
                        First Name :
                            {FirstName}
                    </Text>
                    <Text>
                        Last Name :
                            {LastName}
                    </Text>
                    <Text>
                        DOB :
                            {DateDOB} /
                            {MonthDOB} /
                            {YearDOB}
                    </Text>
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

export default Report;