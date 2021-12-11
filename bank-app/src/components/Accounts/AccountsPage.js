import React from "react";
import AccountsTable from "./AccountsTable";


function AccountsPage() {
  return (
   <div>
      <h1 className="text-center text-primary">List of All Accounts</h1>
      <AccountsTable />
      
   </div>
  )
}

export default AccountsPage;