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
         return (getAccountByAccountNo(x).accountName+ " (" + x + ")");
      }
   }
   

   return (
      
         allTransactions.map(item => (
         <div key={item.id}
         className="bg-light container-fluid col-md-10 offset-md-1 shadow p-1 mb-2 rounded sm-8 d-flex flex-column justify-content-between"
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
               { returnSender(item.partner[0]) }
            </div>
            <div>
               {item.notes}
            </div>
            </div>
         </div>
         ))
   )
}

export default TransactionsListAll
