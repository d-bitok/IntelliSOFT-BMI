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

    // Age Calculation

    function getAge(x, y) {
        return y - x;
    }

    // Determining The BMI Status Using BMI

    function getBMIStatus(x) {
        // /**
        //  * @param {any} input 
        //  * @param {number} decimals 

        //  * var toFixed = function(input, decimals) {
        //  * var arr = ("" + input).split(".");
        //  * if (arr.length === 1) return input;
        //  * var int = arr[0],
        //  *     max = arr[1].length,
        //  *     dec = arr[1].substr(0, decimals > max ? max : decimals);
        //  * return decimals === 0 ? int : [int, "." , dec].join("");
        //  * } 
        //  */
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
                }}
            >
                {/* Date */}
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
                    {/* Names */}
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
                    {/* Age */}
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
                    {/* BMI Status */}
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

                {/* Data Output Corresponding to Table Header */}
                    
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
                        {/* Round Off BMI to One Decimal Place */}
                        <Text style={{
                            ...FONTS.h2,
                            color: COLORS.black,
                            padding: SIZES.padding / 2
                        }}>{getBMIStatus(BMI.toFixed(1))}</Text>
                    </View>
                </View>
                {/* Navigate To Home Page */}
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

                    {/* Extra Info to be sent to the Database */}
                    <Text style={{
                        ...FONTS.h2,
                        marginLeft: 20,
                        marginTop: 5,
                    }}>
                        Report Page
                    </Text> 
                    <Text style={{
                        ...FONTS.h2,
                        marginLeft: 20,
                        marginTop: 5,
                    }}>
                        Date :
                        {Date} / {Month} / {Year}
                    </Text>
                    <Text style={{
                        ...FONTS.h2,
                        marginLeft: 20,
                        marginTop: 5,
                    }}>
                        Height :
                        {Height}
                    </Text>
                    <Text style={{
                        ...FONTS.h2,
                        marginLeft: 20,
                        marginTop: 5,
                    }}>
                        Weight :
                        {Weight}
                    </Text>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                    <Text style={{
                        ...FONTS.h2,
                        marginLeft: 20,
                        marginTop: 5,
                    }}>
                        BMI :
                    </Text>
                    <Text style={{
                        fontSize: 24,
                        marginLeft: 20,
                        marginTop: 5,
                    }}>
                        {BMI.toFixed(1)}
                    </Text>

                    </View>
                    <Text style={{
                        ...FONTS.h2,
                        marginLeft: 20,
                        marginTop: 5,
                    }}>
                        Comments :
                        {Comment}
                    </Text>
                    <Text style={{
                        ...FONTS.h2,
                        marginLeft: 20,
                        marginTop: 5,
                    }}>
                        First Name :
                            {FirstName}
                    </Text>
                    <Text style={{
                        ...FONTS.h2,
                        marginLeft: 20,
                        marginTop: 5,
                    }}>
                        Last Name :
                            {LastName}
                    </Text>
                    <Text style={{
                        ...FONTS.h2,
                        marginLeft: 20,
                        marginTop: 5,
                    }}>
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