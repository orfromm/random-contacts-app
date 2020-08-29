import React from 'react';
import {Text, View} from "react-native";
import {styles} from "./style";

interface HeaderProps {
    text: string;
}

const Header = (props: HeaderProps) => (
    <View style={styles.container}>
        <Text style={styles.title}>{props.text}</Text>
    </View>
);

export {Header}
