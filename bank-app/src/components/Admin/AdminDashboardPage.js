import React from "react";
import TransactionsListAll from "./TransactionsListAll";

function AdminDashboardPage() {
  return (
  <div className="" style={{}}>

    <h1 className="text-center text-primary">Welcome to BPO!</h1>
    
    <div className="container-fluid col-md-10 offset-md-1 shadow p-3 mb-5 bg-white rounded"
    
    >
      <h2 className="text-center text-secondary">List of All Transactions</h2>

      <div className="overflow-scroll overflow-hidden" style={{
      height: "50vh"
      }}
      >
        <TransactionsListAll />
      </div>

    </div>
    
  </div>
  );
}

export default AdminDashboardPage;
