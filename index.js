let history = [];
const account = {
    owenName: "Taras",
    accountNumber: 17573,
    balance: 0,
    deposit () {
        if(confirm("хочете покласти гроші на рахунок") !== null){
           const plus = Number(prompt("скільки ви хочете поклсти"));
           this.balance +=  plus;
           history.push(`Ви поклали ${plus}`);
        }
        return(`у вас ${this.balance}`);
    },
    withdraw () {
        if(confirm("хочете зняти гроші з рахунок") !== null){ 
          const minus =  Number(prompt("скільки ви хочете зняти"));
           this.balance -= minus;
           history.push(`Ви зняли ${minus}`);
        }

        return(`у вас ${this.balance}`);
    },
    history () {
        if(confirm("показати історію") === true){
            return(history);
        }
    }
}
console.log(account.deposit());
console.log(account.withdraw());
console.log(account.history());
