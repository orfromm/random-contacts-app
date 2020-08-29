import React, {ReactElement} from 'react';
import {styles} from "./style";
import {Header} from "../../Common/Header";
import {ActivityIndicator, ScrollView, TouchableOpacity, View} from "react-native";
import {ContactPreview} from "./ContactPreview";
import {Contact, ContactsApiService} from "../../Services/ContactsApiService";

interface ContactsScreenProps {
    navigation: any;
}

interface ContactsScreenState {
    contacts: ReactElement<typeof ContactPreview>[];
    isLoading: boolean;
}

class ContactsScreen extends React.Component<ContactsScreenProps, ContactsScreenState> {
    private readonly _contactsApiService: ContactsApiService;

    constructor(props: ContactsScreenProps) {
        super(props);

        this._contactsApiService = new ContactsApiService();

        this.state = {
            contacts: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this._buildContacts();
    }

    private async _buildContacts() {
        const contacts: ReactElement<typeof ContactPreview>[] = [];
        let contact: Contact;

        for (let contactNo = 0; contactNo < 10; contactNo++) {
            contact = await this._contactsApiService.fetchOne();
            contact && contacts.push(this._buildContact(contactNo, contact));
        }

        this.setState({contacts, isLoading: false});
    }

    private _buildContact(contactNo: number, contact: Contact): ReactElement<typeof ContactPreview> {
        return (
            <TouchableOpacity onPress={() => this._displayInfoOf(contact)}>
                <ContactPreview key={`contact_${contactNo}`} data={contact}/>
            </TouchableOpacity>
        );
    }

    private _displayInfoOf(contact: Contact) {
        this.props.navigation.navigate('info_screen', {contact});
    }

    render() {
        return (
            <>
                <Header text={"Randomize me!"}/>
                <ScrollView style={styles.container}>
                    <View style={styles.innerContainer}>
                        {this.state.isLoading && <ActivityIndicator color={'black'} size={50}/>}
                        {this.state.contacts}
                    </View>
                </ScrollView>
            </>
        );
    }
}

export {ContactsScreen};
