import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Statistic } from "./components/Statistic/Statistic";
import { Friendlist } from "./components/Friendlist/Friendlist";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import article from "./data/user.json";
import data from "./data/data.json";
import friendlist from "./data/friends.json";
import transaction from "./data/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile {...article} />
      <Statistic title="Upload stats" items={data} />
      <Statistic items={data} />
      <Friendlist list={friendlist} />
      <TransactionHistory items={transaction} />
    </div>
  );
}

export default App;
