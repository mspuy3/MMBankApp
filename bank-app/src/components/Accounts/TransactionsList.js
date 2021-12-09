import React from 'react'
import { getTransactions } from '../../repositories/transactionRepository'
import {getAccountByAccountNo} from '../../repositories/accountRepository'

function TransactionsList(props) {

   let allTransactions = getTransactions(); 
   console.log(allTransactions);

   let accountTransactions = props.account.transactionHistory;
   console.log(accountTransactions);

   let shownTransactions = allTransactions.filter(({id}) => accountTransactions.includes(id)).reverse();
   console.log(shownTransactions)

   const returnSender = (x) => {
      if(x === undefined) {
         return x;
      } else {
         return (getAccountByAccountNo(x).accountName+ "(" + x + ")");
      }
   }
   

   return (
      shownTransactions.map(item => (
      <div key={item.id} style={{border: "1px solid red"}}>
        <div>{item.type}</div>
        <div>{item.amount}</div>
        <div>{item.date}</div>
        <div>{item.notes}</div>
        <div>{ returnSender(item.partner[0]) }</div>
      </div>
    ))
   )
}

export default TransactionsList
