import { keyStores, KeyPair, connect, WalletConnection, Contract } from 'near-api-js';

const myKeyStore = new keyStores.InMemoryKeyStore();

const PRIVATE_KEY = "3CpQTsQW6QAyYp7h8T2TzUgQyJiG5SbMSrm75A76zfqzzKUsuTeEFGXC6SbAHGwtZZbZzpSqZsC3KDuF9joERkeJ";

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


const changeContract = new Contract(
  account,
  "tristanmbugua.testnet", {
  changeMethods: ["addUser", "removeUser", "increaseUser"]
});


const viewContract = new Contract(
  account,
  "tristanmbugua.testnet", {
  viewMethods: ["viewUser", "withdraw", "getAllUsers"]
});



export default {changeContract, viewContract};