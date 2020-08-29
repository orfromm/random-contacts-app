interface FetchedContact {
    name: { first: string; last: string; };
    location: { postcode: number; city: string; state: string; country: string; };
    email: string;
    cell: string;
    phone: string;
    picture: { large: string; };
}

export interface Contact {
    fullname: string;
    address: string;
    email: string;
    cell: string;
    phone: string;
    picUrl: string;
}

class ContactsApiService {
    private static readonly API_URL = 'https://randomuser.me/api/?results=1&inc=name,location,email,cell,phone,picture';
    private static readonly METHOD = 'GET';
    private static readonly HEADERS = {
        'accept': 'application/json',
        'content-type': 'application/json'
    };

    public fetchOne(): Promise<Contact> {
        return new Promise(async (resolve) => {
                const response: Response = await fetch(ContactsApiService.API_URL, {
                    method: ContactsApiService.METHOD,
                    headers: ContactsApiService.HEADERS
                });

                const fetchedContact: FetchedContact = (await response.json()).results?.[0];
                resolve(this._convertToContact(fetchedContact));
            }
        );
    }

    private _convertToContact = (fetchedContact: FetchedContact): Contact =>
        fetchedContact && ({
            fullname: `${fetchedContact.name.first} ${fetchedContact.name.last}`,
            address: `${fetchedContact.location.postcode} ${fetchedContact.location.city}, ${fetchedContact.location.state}, ${fetchedContact.location.country}`,
            email: fetchedContact.email,
            cell: fetchedContact.cell,
            phone: fetchedContact.phone,
            picUrl: fetchedContact.picture.large
        });
}

export {ContactsApiService}
