import Profile from "./components/Profile"
import user from "./user.json"

import Statistics from "./components/Statistics"
import statisticalData from "./statisticalData.json"

import FriendList from "./components/FriendList"
import friends from "./friends.json"

import TransactionHistory from "./components/TransactionHistory"
import transactions from "./transactions.json"

function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics
       title="Upload stats"
      stats={statisticalData}
      />
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
      
    </>
  );
}

export default App;
