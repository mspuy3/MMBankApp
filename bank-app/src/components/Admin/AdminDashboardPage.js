import React from "react";
import Overview from "./Overview";
import TransactionsListAll from "./TransactionsListAll";
import TransactionsListAll2 from "./TransactionsListAll2";

function AdminDashboardPage() {
  return (
  <div className="" style={{}}>

    <h1 className="text-center text-primary mb-3">Welcome to BPO!</h1>
    
    <Overview />
    <TransactionsListAll2 />
    
  </div>
  );
}

export default AdminDashboardPage;

// Old implementation

{/* <div className="container-fluid col-md-10 offset-md-1 shadow p-3 mb-5 bg-white rounded"
    
>
  <h2 className="text-center text-secondary">List of All Transactions</h2>

  <div className="overflow-scroll overflow-hidden" style={{
  height: "50vh"
  }}
  >
    <TransactionsListAll />
  </div>

</div> */}