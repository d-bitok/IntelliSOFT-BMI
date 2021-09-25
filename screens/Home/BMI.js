import React, { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
    Alert,
    Pressable,
    ImageBackground
} from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../../constants';
import { styles } from '../../styles';

const BMI = ({ navigation }) => {

    const [formModalVisible, setFormModalVisible] = useState(false);

    function renderHeader() {
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 90,
                backgroundColor: COLORS.blue,
                borderBottomRightRadius: 24,
                borderBottomLeftRadius: 24,
            }}
        >
            <Text style={{
                ...FONTS.h1,
                top: 16,
                color: COLORS.white,
            }}>BMI Vitals Form</Text>
        </View>
        )
    }

    function renderData() {
        
        const healthData = [
            {
                id: 0,
                label: 'Good',
                color: COLORS.green,
                selected: true,
                value: 'Good'
            },
            {
                id: 1,
                label: 'Poor',
                color: COLORS.red,
                selected: false,
                value: 'Poor'
            }
        ];
        const dietData = [
            {
                id: 0,
                label: 'Yes',
                color: COLORS.green,
                selected: true,
                value: 'Yes'
            },
            {
                id: 1,
                label: 'No',
                color: COLORS.red,
                selected: false,
                value: ''
            }
        ];
        const drugsData = [
            {
                id: 0,
                label: 'Yes',
                color: COLORS.green,
                selected: true,
                value: 'Yes'
            },
            {
                id: 1,
                label: 'No',
                color: COLORS.red,
                selected: false,
                value: ''
            }
        ];

        
        const [date, setDate] = useState('');
        const [month, setMonth] = useState('');
        const [year, setYear] = useState('');
        const [height, setHeight] = useState('');
        const [weight, setWeight] = useState('');
        const [comments, setComments] = useState('');

        const [healthRadioButtons, setHealthRadioButtons] = useState(healthData);
        const [dietRadioButtons, setDietRadioButtons] = useState(dietData);
        const [drugsRadioButtons, setDrugsRadioButtons] = useState(drugsData);

        const onPressHealthRadioButtons = healthRadioButtonsArray => {
            console.log(healthRadioButtonsArray);
            setHealthRadioButtons(healthRadioButtonsArray);
        };

        const onPressDietRadioButtons = dietRadioButtonsArray => {
            console.log(dietRadioButtonsArray);
            setDietRadioButtons(dietRadioButtonsArray);
        };

        const onPressDrugsRadioButtons = drugsRadioButtonsArray => {
            console.log(drugsRadioButtonsArray);
            setDrugsRadioButtons(drugsRadioButtonsArray);
        };

        function getBMI(x,y){
            return ((y / (x * x)) * 10000) || 0;
        }

        return (
            <View style={{
                flex: 1,
                height: 390,
                backgroundColor: COLORS.white,
                alignItems: 'cemter',
                justifyContent: 'center'
            }}>
                <View style={{
                    flex: 1,
                }}>
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
                                Height (cm)
                            </Text>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <TextInput 
                            value={height}
                            onChangeText={setHeight}
                            keyboardType="numeric"
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
                                Weight (kg)
                            </Text>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <TextInput 
                            value={weight}
                            onChangeText={setWeight}
                            keyboardType="numeric"
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
                                ...FONTS.h1,
                            }}>
                                BMI
                            </Text>
                        </View>
                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: 'bold',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {getBMI(parseInt(height), parseInt(weight)).toFixed(2)}
                            </Text>
                        </View>
                    </View>
            
                </View>
                <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 22,
            }}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={formModalVisible}
                    onRequestClose={() => {
                        Alert.alert("Form Closed!");
                        setFormModalVisible(!formModalVisible)
                    }}
                >
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 22,
                    }}>
                        <View style={{
                            margin: 20,
                            backgroundColor: COLORS.white,
                            borderRadius: 16,
                            padding: 35,
                            alignItems: 'center',
                            justifyContent: 'center',
                            shadowColor: COLORS.black,
                            shadowOffset: {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                            ...styles.shadow
                        }}>

                            {/* Form to Show When BMI is 0 > BMI < 25 */}
                            {
                               getBMI(parseInt(height), parseInt(weight)) < 25 && getBMI(parseInt(height), parseInt(weight)) != 0 &&
                                <View style={{
                                    flex: 1,
                                    width: 270,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <View style={{
                                        paddingHorizontal: SIZES.padding * 3,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        ...styles.shadowy
                                    }}>
                                        {/* Form A Title */}
                                        <Text style={{
                                            ...FONTS.h1,
                                            color: COLORS.black,
                                            padding: SIZES.padding / 3,
                                        }}>
                                            Form A
                                        </Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            paddingTop: SIZES.padding
                                        }}>
                                            <View style={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <Text style={{
                                                    ...FONTS.h2,
                                                }}>
                                                    Date
                                                </Text>
                                            </View>
                                            <View style={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <TextInput 
                                                value={date}
                                                onChangeText={setDate}
                                                keyboardType="numeric"
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
                                            paddingVertical: SIZES.padding
                                        }}>
                                            <Text style={{
                                                ...FONTS.h2
                                            }}>
                                                General Health :
                                            </Text>
                                            <View style={{
                                                alignItems: 'flex-start',
                                            }}>
                                                <RadioGroup
                                                    radioButtons={healthRadioButtons}
                                                    onPress={onPressHealthRadioButtons}
                                                    layout="column"
                                                />
                                            </View>
                                        </View>
                                        <View style={{
                                            paddingVertical: SIZES.padding
                                        }}>
                                            <Text style={{
                                                ...FONTS.h2
                                            }}>
                                                Have you ever been on diet to loose weight ?
                                            </Text>
                                            <View style={{
                                                alignItems: 'flex-start',
                                            }}>
                                                <RadioGroup
                                                    radioButtons={dietRadioButtons}
                                                    onPress={onPressDietRadioButtons}
                                                    layout="column"
                                                />
                                            </View>
                                        </View>
                                        <View style={{
                                            paddingVertical: SIZES.padding
                                        }}>
                                            <Text style={{
                                                ...FONTS.h2
                                            }}>
                                                Comments :
                                            </Text>
                                            <View style={{
                                                alignItems: 'flex-start',
                                            }}>
                                                <TextInput 
                                                value={comments}
                                                onChangeText={setComments}
                                                keyboardType="default"
                                                editable
                                                multiline
                                                style={{
                                                    backgroundColor: COLORS.white,
                                                    width: '100%',
                                                    // height: '60%',
                                                    borderWidth: .2,
                                                    borderColor: COLORS.black,
                                                    borderRadius: 12,
                                                    // marginLeft: 10,
                                                    padding: 10,
                                                }}/>
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
                                            ...styles.shadows
                                        }}
                                        onPress={() => {setFormModalVisible(!formModalVisible)}}
                                        >
                                            <Text style={{
                                                color: COLORS.white,
                                                ...FONTS.h1,
                                                fontSize: 24,
                                            }}>
                                                Cancel
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
                                        onPress={() => {}}
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
                            }

                            {/* Form to Show When BMI is BMI >= 25 */}

                            {
                               getBMI(parseInt(height), parseInt(weight)) == 25 || getBMI(parseInt(height), parseInt(weight)) > 25 &&
                               <View style={{
                                    flex: 1,
                                    width: 270,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <View style={{
                                        paddingHorizontal: SIZES.padding * 3,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        ...styles.shadowy
                                    }}>
                                        {/* Form B Title */}
                                        <Text style={{
                                            ...FONTS.h1,
                                            color: COLORS.black,
                                            padding: SIZES.padding / 3,
                                        }}>
                                            Form B
                                        </Text>
                                    </View>
                                    <View style={{
                                        paddingHorizontal: SIZES.padding * 3,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%'
                                    }}>
                                        <Text style={{
                                            ...FONTS.h3,
                                            color: COLORS.black,
                                            // padding: SIZES.padding / 3,
                                        }}>
                                            (Overweight)
                                        </Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            paddingTop: SIZES.padding
                                        }}>
                                            <View style={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <Text style={{
                                                    ...FONTS.h2,
                                                }}>
                                                    Date
                                                </Text>
                                            </View>
                                            <View style={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <TextInput 
                                                value={date}
                                                onChangeText={setDate}
                                                keyboardType="numeric"
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
                                            paddingVertical: SIZES.padding
                                        }}>
                                            <Text style={{
                                                ...FONTS.h2
                                            }}>
                                                General Health :
                                            </Text>
                                            <View style={{
                                                alignItems: 'flex-start',
                                            }}>
                                                <RadioGroup
                                                    radioButtons={healthRadioButtons}
                                                    onPress={onPressHealthRadioButtons}
                                                    layout="column"
                                                />
                                            </View>
                                        </View>
                                        <View style={{
                                            paddingVertical: SIZES.padding
                                        }}>
                                            <Text style={{
                                                ...FONTS.h2
                                            }}>
                                                Are you currently taking any drugs ?
                                            </Text>
                                            <View style={{
                                                alignItems: 'flex-start',
                                            }}>
                                                <RadioGroup
                                                    radioButtons={drugsRadioButtons}
                                                    onPress={onPressDrugsRadioButtons}
                                                    layout="column"
                                                />
                                            </View>
                                        </View>
                                        <View style={{
                                            paddingVertical: SIZES.padding
                                        }}>
                                            <Text style={{
                                                ...FONTS.h2
                                            }}>
                                                Comments :
                                            </Text>
                                            <View style={{
                                                alignItems: 'flex-start',
                                            }}>
                                                <TextInput 
                                                value={comments}
                                                onChangeText={setComments}
                                                keyboardType="default"
                                                editable
                                                multiline
                                                style={{
                                                    backgroundColor: COLORS.white,
                                                    width: '100%',
                                                    // height: '60%',
                                                    borderWidth: .2,
                                                    borderColor: COLORS.black,
                                                    borderRadius: 12,
                                                    // marginLeft: 10,
                                                    padding: 10,
                                                }}/>
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
                                            ...styles.shadows
                                        }}
                                        onPress={() => {setFormModalVisible(!formModalVisible)}}
                                        >
                                            <Text style={{
                                                color: COLORS.white,
                                                ...FONTS.h1,
                                                fontSize: 24,
                                            }}>
                                                Cancel
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
                                        onPress={() => {setFormModalVisible(!formModalVisible) && navigation.navigate('Profile')}}
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
                            
                            }

                            {/* Form to Show When BMI is BMI = 0 */}
                            {
                                getBMI(parseInt(height), parseInt(weight)) == 0 &&
                                <>
                                    <Text style={{
                                        ...FONTS.h2,
                                    }}>
                                        Enter Data to Calculate your BMI
                                    </Text>
                                    <Pressable style={{
                                        borderRadius: 16,
                                        padding: 10,
                                        elevation: 2,
                                        backgroundColor: COLORS.red,
                                    }}
                                    onPress={() => setFormModalVisible(!formModalVisible)}
                                    >
                                        <Text>
                                            CLose
                                        </Text>
                                    </Pressable>
                                </>
                            }
                        </View>
                    </View>
                </Modal>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
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
                        ...styles.shadows
                    }}
                    onPress={() => navigation.navigate("Profile", {height})}
                    >
                        <Text style={{
                            color: COLORS.white,
                            ...FONTS.h1,
                            fontSize: 24,
                        }}>
                            Cancel
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
                    onPress={() => setFormModalVisible(true)}
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
        
            </View>
        )
    }

    function renderBottom(){
        return (
            <View style={{
                flex: 1,
                backgroundColor: COLORS.white,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ImageBackground
                    source={icons.bmi}
                    resizeMode='contain'
                    style={{
                        width: '100%',
                        height: 300,
                    }}
                />
            </View>
        )
    }


    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white,
        }}>
            {renderHeader()}
            <ScrollView>
                {renderData()}
                {renderBottom()}
            </ScrollView>
        </View>
    )
}

export default BMI;