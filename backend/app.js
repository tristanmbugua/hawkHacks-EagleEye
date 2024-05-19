import { keyStores, KeyPair, connect, WalletConnection, Contract } from 'near-api-js';

const myKeyStore = new keyStores.InMemoryKeyStore();

const PRIVATE_KEY = "5UBL7YXB3yhujgkoPEMSoqkcxRLTXZgJKrLzkyUUhPsWgfRcbaZveT79oL6uMeTw2N5eU7WPzVfeC3NDFU5Gmt9D";

const keyPair = KeyPair.fromString(PRIVATE_KEY);

const accountId = "tristanmbugua.testnet"

await myKeyStore.setKey("testnet", accountId, keyPair);

const connectionConfig = {
    networkId: "testnet",
    keyStore: myKeyStore, // first create a key store
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://testnet.mynearwallet.com/",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://testnet.nearblocks.io",
  };

const nearConnection = await connect(connectionConfig);

const account = await nearConnection.account(accountId);


//Use sub-accounts for other users.




console.log(await account.);

await account.deleteAccount("baraka.tristanmbugua.testnet");

// await account.deleteKey("A12A2DSZwjbSWSuAg9f7MCdhJbQJLdJRQWnkmh6N1ARK")

// console.log(await account.getAccountBalance());

// // await account.sendMoney(
// //     "benjaminbates.testnet",
// //     "900000000000000000000000"
// // );

// // console.log(await account.getAccountBalance());

// const viewContract = new Contract(account, "tristanmbugua.testnet", {
//   viewMethods: ["testMessage"]
// });

// console.log(await viewContract.testMessage({}));


// account.addKey()

// const viewContract = new Contract(
//   account,
//   "tristanmbugua.testnet", {
//   viewMethods: ["testMessage"]
// });

// console.log(await viewContract.testMessage({}));

// const callContract = new Contract(account, "tristanmbugua.testnet", {
//   changeMethods: ["addUser"]
// });

// console.log(await callContract.addUser(
//   {
//     user: "Baraka",
//     amount: "15"
//   }
//   ));

// const viewContract = new Contract(account, "tristanmbugua.testnet", {
//   viewMethods: ["getAllUsers"]
// });

// console.log(await viewContract.getAllUsers());