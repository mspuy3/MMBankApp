import React from 'react'
import TransactionsList from './TransactionsList'


function TransactionsContent(props) {
  return (
    <div>
      <TransactionsList 
         account={props.account}
      />
    </div>
  )
}

export default TransactionsContent
