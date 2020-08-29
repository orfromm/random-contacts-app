import React from 'react';
import {Image, Text, View} from "react-native";
import {styles} from "./style";
import {Contact} from "../../../Services/ContactsApiService";

interface ContactPreviewProps {
    data: Contact;
}

const ContactPreview = (props: ContactPreviewProps) => {
    const imgSrc = {uri: props.data.picUrl};
    return (
        <View style={styles.container}>
            <Image source={imgSrc} style={styles.image}/>
            <Text style={styles.mainTitle}>{props.data.fullname}</Text>
            <Text style={styles.subTitle}>{props.data.cell}</Text>
            <Text style={styles.subTitle}>{props.data.phone}</Text>
        </View>
    );
};

export {ContactPreview}
