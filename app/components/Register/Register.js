import React from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

export default class Register extends React.Component {
    render() {
        return <View style={styles.container}>
            <Text>Register page</Text>
            <Button onPress={() => Actions.register2()}>Register</Button>
            <Button onPress={Actions.home}>Replace screen</Button>
            <Button onPress={Actions.pop}>Back</Button>
        </View>
    }
}

