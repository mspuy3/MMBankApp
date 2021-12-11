import React from 'react'
import { getTransactions } from '../../repositories/transactionRepository'
import {getAccountByAccountNo, getAccounts} from '../../repositories/accountRepository'


let noAccounts = getAccounts().length;


const Overview = () => {
  return (
   <div className="container-fluid col-md-10 offset-md-1 shadow p-3 mb-5 bg-white rounded">
      <h2 className="text-secondary">Overview</h2>

      <div className='d-flex'>

         <div className="container-fluid col-md-4 offset-md-0 shadow p-3 mb-5 bg-info rounded text-center bg-info">
            <h3>Cash Available</h3>

         </div>
         <div className="container-fluid col-md-4 offset-md-0 shadow p-3 mb-5 bg-info rounded text-center">
           <h3>No. of Accounts</h3>
           <h4>{noAccounts}</h4> 
         </div>
         <div className="container-fluid col-md-4 offset-md-0 shadow p-3 mb-5 bg-info rounded text-center">
            <h3>No. of Users</h3>
         </div>
      
      </div>

    </div>
  )
}

export default Overview
