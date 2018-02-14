import React from 'react';
import { View, Text } from "react-native";
import Button from "react-native-button";
import { Actions } from "react-native-router-flux";

import styles from './styles';

class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Replace screen</Text>
                <Button onPress={Actions.pop}>Back</Button>
            </View>
        );
    }
}

export default Home;