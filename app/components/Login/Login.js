import React from 'react';
import PropTypes from 'prop-types';
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
                <Text style={styles.text}>Login page 1</Text>
                <Text style={styles.text}>Title: {title}</Text>
                <Text style={styles.text}>Data: {data}</Text>
                <Button style={styles.button} onPress={() => Actions.loginModal2({ data: "Custom data2", title: "Custom title2" })}>Login 2</Button>
                <Button style={styles.button} onPress={() => Actions.refresh({ title: "Changed title", data: "Changed data" })}>Change title</Button>
                <Button style={styles.button} onPress={Actions.pop}>Back</Button>
            </View>
        );
    }
}