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
         return (getAccountByAccountNo(x).accountName+ " (" + x + ")");
      }
   }
   

   return (

   shownTransactions.map(item => (
      <div key={item.id}
      className="bg-light container-fluid col-md-8 offset-md-2 shadow p-1 mb-3 rounded sm-8 d-flex flex-column justify-content-between"
      >
         <div className='d-flex flex-row justify-content-between align-items-center'> 
         <div className='w-25 d-flex'>
            <div className='bg-success rounded text-light p-1'>
               {item.type}
            </div>
         </div>
         <div className='w-25'>PHP {item.amount}</div>
         <div className='w-25'>{item.date}</div>
         </div>
         <div className='d-flex flex-row'> 
         <div className='w-75'>
            Partner: { returnSender(item.partner[0]) }
         </div>
         <div>
            Notes: {item.notes}
         </div>
         </div>
      </div>
   )))
}

export default TransactionsList
