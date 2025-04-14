import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import { Votes, VoteType } from "../../types/votes";
import css from "./App.module.css";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  const positiveRate = votes.good + votes.neutral + votes.bad;

  return (
    <div className={css.app}>
      <p className={css.title}>Sip Happens Café</p>
      <h1 className={css.description}>
        Please rate our service by selecting one of the options below.
      </h1>
    </div>
  );
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (

      )}
    </div>
  );
}
