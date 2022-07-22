export default function TransactionHistory({ transactions }) {
  return (
    <table className="transaction-history">
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
