import styles from "./VoteStats.module.css";
import { Votes } from "../../types/votes";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  votes: { good, neutral, bad },
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div class={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{best}</strong>
      </p>
      <p class={styles.stat}>
        Neutral: <strong>{netural}</strong>
      </p>
      <p class={styles.stat}>
        Bad: <strong>{wors}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{totalVote}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positiveRates}%</strong>
      </p>
    </div>
  );
}
