import React from 'react';
import { View, Text } from "react-native";
import Button from "react-native-button";
import { Actions } from "react-native-router-flux";

import styles from './styles';

export default class Login extends React.Component {
    static onEnter = () => {
        Actions.refresh({
            title: 'Login!',
            rightTitle: 'rightTitle',
            onRight: () => { },
        });
    };

    render() {
        const title = this.props.title || 'No Title';
        const data = this.props.data || 'No Data';
        console.log("Login RENDER");
        return (
            <View style={[styles.container, this.props.style]}>
                <Text>Login page 1</Text>
                <Text>Title: {title}</Text>
                <Text>Data: {data}</Text>
                <Button onPress={() => Actions.loginModal2({ data: "Custom data2", title: "Custom title2" })}>Login 2</Button>
                <Button onPress={() => Actions.refresh({ title: "Changed title", data: "Changed data" })}>Change title</Button>
                <Button onPress={Actions.pop}>Back</Button>
            </View>
        );
    }
}