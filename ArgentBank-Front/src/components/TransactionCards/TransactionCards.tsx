import "./TransactionCards.css"


interface TransactionCardProps {
    accountType: string;
    accountNumber: string;
    balance: string;
    balanceType: string;
    onViewTransactions?: () => void;
  }
  
  const TransactionCard = ({
    accountType,
    accountNumber,
    balance,
    balanceType,
    onViewTransactions,
  }: TransactionCardProps) => {
    return (
      <div className="transaction-card">
        <div className="transaction-card-details">
        <h3>{accountType} ({accountNumber})</h3>
        <p className="transaction-card_balance">${balance}</p>
        <p className="transaction-card_balance_type">{balanceType}</p>
        </div>
        <div className="transaction-card-button">
        <button className="transaction-card_button" onClick={onViewTransactions}>View transactions</button>
        </div>
      </div>
    );
  };
  
  export default TransactionCard;