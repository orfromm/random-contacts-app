import React from 'react';
import {Image, Text, View} from "react-native";
import {styles} from "./style";
import {Header} from "../../Common/Header";

interface InfoScreenProps {
    route: any;

    fullname: string;
    address: string;
    email: string;
    phone: string;
    picUrl: string;
}

const InfoScreen = (props: InfoScreenProps) => {
    const {contact} = props.route.params;
    const imgSrc = {uri: contact.picUrl};
    return (
        <>
            <Header text={contact.fullname}/>
            <View style={styles.container}>
                <Image source={imgSrc}
                       style={styles.image}/>
                <Text style={styles.mainTitle}>{contact.fullname}</Text>
                <Text style={styles.subTitle}>{contact.address}</Text>
                <Text style={styles.subTitle}>{contact.email}</Text>
                <Text style={styles.subTitle}>{contact.cell}</Text>
                <Text style={styles.subTitle}>{contact.phone}</Text>
            </View>
        </>
    );
};

export {InfoScreen}
