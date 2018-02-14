import React from 'react';

import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Register } from '../components/Register';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Home } from '../components/Home';
import { Login } from '../components/Login';

export default () => (
    <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <View />
        <Router>
            <Stack key="root">
                <Scene key="login" component={Login} title="Login" />
                <Scene key="register" component={Register} title="Register" />
                <Scene key="home" component={Home} />
            </Stack>
        </Router>
    </Container>
);