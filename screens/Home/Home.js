import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { COLORS, FONTS, SIZES } from '../../constants';
import { styles } from '../../styles';

const Home = ({ route, navigation }) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("http://10.0.2.2:27017/dbIntelliSOFT/api")
    .then((res) => res.json())
    .then((data) => setData(data.message))
    .catch((e) => {
        console.log(e)

    });
  }, []);
  
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
                            IntelliSOFT BMI
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
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* <Text> */}
                    {/* Home Page */}
                {/* </Text>  */}
                <Text>
                    {/* FirstName : */}
                    {/* {firstName} */}
                    {!data ? "API Loading ..." : data }
                </Text>
                {/* <Text> */}
                    {/* LastName : */}
                    {/* {lastName} */}
                {/* </Text> */}
                {/* <Text> */}
                    {/* dateDOB : */}
                    {/* {date} */}
                {/* </Text> */}
                {/* <Text> */}
                    {/* monthDOB : */}
                    {/* {month} */}
                {/* </Text> */}
                {/* <Text> */}
                    {/* yearDOB : */}
                    {/* {year} */}
                {/* </Text> */}
            </View>
        </View>
    )
}

export default Home;