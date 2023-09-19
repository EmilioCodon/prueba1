import { Client, Account } from 'appwrite';


const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64f49a508890c89e6538');


export const account = new Account(client);

export default client;