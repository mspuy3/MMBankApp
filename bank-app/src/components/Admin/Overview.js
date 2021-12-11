import React from 'react'
import { getTransactions } from '../../repositories/transactionRepository'
import {getAccountByAccountNo, getAccounts} from '../../repositories/accountRepository'
import {getUsers} from '../../repositories/userRepository'


let accountsCopy = getAccounts();
console.log(accountsCopy);

function amount(item){
   return parseInt(item.balanceAmount);
 }
 
 function sum(prev, next){
   return prev + next;
 }
 
let sumFinal = accountsCopy.map(amount).reduce(sum);
 

let noAccounts = getAccounts().length;
let noUsers = getUsers().length - 1;


const Overview = () => {
  return (
   <div className="container-fluid col-md-10 offset-md-1 shadow p-3 mb-5 bg-white rounded">
      <h2 className="text-secondary">Overview</h2>

      <div className='d-flex justify-content-center'>

         <div className="container-fluid col-md-3 offset-md-0 shadow p-3 m-2 bg-primary rounded text-center">
            <h3 className='text-light'>Cash Available:</h3>
            <h4 className='text-light'>{sumFinal}</h4>

         </div>
         <div className="container-fluid col-md-3 offset-md-0 shadow p-3 m-2 bg-danger rounded text-center">
           <h3 className='text-light'>No. of Accounts:</h3>
           <h4 className='text-light'>{noAccounts}</h4> 
         </div>
         <div className="container-fluid col-md-3 offset-md-0 shadow p-3 m-2 bg-warning rounded text-center">
            <h3 className='text-light'>No. of Users:</h3>
            <h4 className='text-light'>{noUsers}</h4> 
         </div>
      
      </div>

    </div>
  )
}

export default Overview
