import React from 'react';

import styles from "./TransactionHistory.module.css"

import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  const TransactionHistoryElements = items.map(item => (
    <tr className={styles.transactionHistoryTr} key={item.id}>
      <td className={styles.transactionHistoryTd}>{item.type}</td>
      <td className={styles.transactionHistoryTd}>{item.amount}</td>
      <td className={styles.transactionHistoryTd}>{item.currency}</td>
    </tr>
  ))
    return (
        <table className={styles.transactionHistory}>
  <thead>
    <tr className={styles.transactionHistoryTr}>
      <th className={styles.transactionHistoryTh}>Type</th>
      <th className={styles.transactionHistoryTh}>Amount</th>
      <th className={styles.transactionHistoryTh}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {TransactionHistoryElements}
  </tbody>
</table>
    )
};

TransactionHistory.defaultProps = {
  items: [],
}

TransactionHistory.prototype = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })
}


export default TransactionHistory;
