import styles from './blockquote.module.css';

interface IBlockquoteProps {
  quote: string;
  by: string;
}

export default function Blockquote({ quote, by }: IBlockquoteProps) {
  return (
    <blockquote className={styles.block}>
      {quote}
      <span>{by}</span>
    </blockquote>
  );
}
