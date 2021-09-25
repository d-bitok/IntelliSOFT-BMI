import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import {
    COLORS,
    SIZES,
    FONTS,
} from '../../constants'
import { styles } from '../../styles'

const Register = ({ navigation, route }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    function renderRegistration() {
        return (
            <View style={{
                backgroundColor: COLORS.white,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
                borderRadius: 16,
                borderWidth: .2,
                borderColor: COLORS.black,
                ...styles.shadowy
            }}>
                <View style={{
                    // flex: 1,
                    height: 360,
                    backgroundColor: COLORS.white,
                    alignItems: 'cemter',
                    justifyContent: 'center',
                    margin: 10,
                }}>
                    <View style={{
                        paddingHorizontal: SIZES.padding * 2.5,
                        marginTop: -60,
                        paddingVertical: SIZES.padding,
                        alignItems: 'center',
                        ...styles.shadowy
                    }}>
                        <Text style={{
                            ...FONTS.h1,
                            // fontSize: 24,
                            color: COLORS.black,
                        }}>
                            Registration page
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingLeft: SIZES.padding * 1.2,
                        paddingTop: SIZES.padding
                    }}>
                        <View style={{
                            width: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                ...FONTS.h2,
                            }}>
                                First Name
                            </Text>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <TextInput 
                            value={firstName}
                            onChangeText={setFirstName}
                            keyboardType="default"
                            style={{
                                backgroundColor: COLORS.white,
                                height: 36,
                                width: 200,
                                borderWidth: .2,
                                borderColor: COLORS.black,
                                borderRadius: 12,
                                marginLeft: 10,
                                padding: 10,
                            }}/>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingLeft: SIZES.padding * 1.2,
                        paddingTop: SIZES.padding
                    }}>
                        <View style={{
                            width: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                ...FONTS.h2,
                            }}>
                                Last Name
                            </Text>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <TextInput 
                            value={lastName}
                            onChangeText={setLastName}
                            keyboardType="default"
                            style={{
                                backgroundColor: COLORS.white,
                                height: 36,
                                width: 200,
                                borderWidth: .2,
                                borderColor: COLORS.black,
                                borderRadius: 12,
                                marginLeft: 10,
                                padding: 10,
                            }}/>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingLeft: SIZES.padding * 1.2,
                        paddingTop: SIZES.padding
                    }}>
                        <View style={{
                            width: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                ...FONTS.h2,
                            }}>
                                DOB
                            </Text>
                            <Text style={{
                                ...FONTS.h3,
                            }}>
                                (DD/MM/YYYY)
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <View>
                                <TextInput 
                                value={date}
                                onChangeText={setDate}
                                keyboardType="numeric"
                                maxLength={2}
                                style={{
                                    backgroundColor: COLORS.white,
                                    height: 36,
                                    width: 50,
                                    borderWidth: .2,
                                    borderColor: COLORS.black,
                                    borderRadius: 12,
                                    marginLeft: 10,
                                    padding: 10,
                                }}/>
                            </View>
                            <View>
                                <TextInput 
                                value={month}
                                onChangeText={setMonth}
                                keyboardType="numeric"
                                maxLength={2}
                                style={{
                                    backgroundColor: COLORS.white,
                                    height: 36,
                                    width: 50,
                                    borderWidth: .2,
                                    borderColor: COLORS.black,
                                    borderRadius: 12,
                                    marginLeft: 10,
                                    padding: 10,
                                }}/>
                            </View>
                            <View>
                                <TextInput 
                                value={year}
                                onChangeText={setYear}
                                keyboardType="numeric"
                                maxLength={4}
                                style={{
                                    backgroundColor: COLORS.white,
                                    height: 36,
                                    width: 50,
                                    borderWidth: .2,
                                    borderColor: COLORS.black,
                                    borderRadius: 12,
                                    marginLeft: 10,
                                    padding: 10,
                                }}/>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity style={{
                        borderRadius: 16,
                        padding: 10,
                        elevation: 2,
                        alignItems: 'center',
                        backgroundColor: COLORS.red,
                        height: 50,
                        paddingHorizontal: SIZES.padding,
                        marginHorizontal: SIZES.padding,
                        marginBottom: SIZES.padding,
                        ...styles.shadows
                    }}
                    onPress={() => {}}
                    >
                        <Text style={{
                            color: COLORS.white,
                            ...FONTS.h1,
                            fontSize: 24,
                        }}>
                            Clear
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderRadius: 16,
                        padding: 10,
                        elevation: 2,
                        alignItems: 'center',
                        backgroundColor: COLORS.green,
                        height: 50,
                        paddingHorizontal: SIZES.padding,
                        marginHorizontal: SIZES.padding,
                        ...styles.shadows
                    }}
                    onPress={() => navigation.navigate('Profile'
                    // , {
                    //     firstName,
                    //     lastName,
                    //     date,
                    //     month,
                    //     year,
                    // }
                    )}
                    >
                        <Text style={{
                            color: COLORS.white,
                            ...FONTS.h1,
                            fontSize: 24,
                        }}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: SIZES.padding * 6,
                // paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.lightpurple,
            }}>
                {renderRegistration()}
            </View>
        </ScrollView>
    )
}

export default Register;