import React from 'react';
import {
    View,
    Text
} from 'react-native';
// import Tabs from './navigation/tabs'

const Home = ({ route }) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);
  
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
    )
}

export default Home;