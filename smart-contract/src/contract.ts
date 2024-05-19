import {
  NearBindgen,
  UnorderedMap,
  call,
  view,
  
} from "near-sdk-js";


  @NearBindgen({})
  export class main_contract {
    //Users implemented using dictionary
    users: UnorderedMap<Number>;
    
    constructor() {
      this.users =  new UnorderedMap<Number>("users");

    }


    //Add users
    @call({})
    addUser({user, amount}: {user: string, amount: number}) {
        this.users.set(user, amount);
    }

    //Remove users
    @call({})
    removeUser({user}: {user: string}) {
        this.users.remove(user);
    }

    //View user balance
    @view({})
    viewUser({user}: {user: string}) {
        return this.users.get(user);
    }

    //Add to user
    @call({})
    increaseUser({user, amount}: {user: string, amount: number}) {
        this.users.set(user, this.users.get(user).valueOf()+amount);
    }

    //Attempt withdrawal
    @view({})
    withdraw(user: string, withdrawalAmount: number): number {
        var userAmount = this.users[user];

        if ( userAmount !== undefined ) {
          if (withdrawalAmount > userAmount) {
            this.users[user] = 0;
            return withdrawalAmount - userAmount;
          } if (withdrawalAmount < userAmount) {
              userAmount -= withdrawalAmount;
              return withdrawalAmount;
          } else {
              userAmount = 0;
              return withdrawalAmount;
          }
        }
    }

    @view({})
    getAllUsers() {
      return this.users;
    }

    @view({})
    testMessage() {
      return ["Active"];
    }
  }