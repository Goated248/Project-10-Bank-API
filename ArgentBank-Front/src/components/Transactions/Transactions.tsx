import "./Transactions.css"
import TransactionCard from '../TransactionCards/TransactionCards';

const Transactions = () => {
  
  const accounts = [
    {
      type: "Argent Bank Checking",
      number: "x8349",
      balance: "2,082.79",
      balanceType: "Available Balance",
    },
    {
      type: "Argent Bank Savings",
      number: "x67124",
      balance: "10,928.42",
      balanceType: "Available Balance",
    },
    {
        type: "Argent Bank Credit Card",
        number: "x5201",
        balance: "184.30",
        balanceType: "Current Balance",
      },
  ];

  return (
    <div className="transactions">
      {accounts.map((account, index) => (
        <TransactionCard
          key={index}
          accountType={account.type}
          accountNumber={account.number}
          balance={account.balance}
          balanceType={account.balanceType}
        />
      ))}
    </div>
  );
};

export default Transactions;