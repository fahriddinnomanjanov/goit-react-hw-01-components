import Profile from "./components/Profile"
import Statistics from "./components/Statistics"
import FriendList from "./components/FriendList"
import TransactionHistory from "./components/TransactionHistory"

import user from "./user.json"
import statisticalData from "./statisticalData.json"
import friends from "./friends.json"
import transactions from "./transactions.json"



function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics
       title="Upload stats"
      stats={statisticalData}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      
    </>
  );
}

export default App;
