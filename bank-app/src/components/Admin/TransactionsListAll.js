import React from 'react'
import { getTransactions } from '../../repositories/transactionRepository'
import {getAccountByAccountNo} from '../../repositories/accountRepository'

function TransactionsListAll() {

   let allTransactions = getTransactions().reverse(); 
   console.log(allTransactions);

   const returnSender = (x) => {
      if(x === undefined) {
         return x;
      } else {
         return (getAccountByAccountNo(x).accountName+ "(" + x + ")");
      }
   }
   

   return (
         allTransactions.map(item => (
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

export default TransactionsListAll
