import { Avatar, Typography } from '@mui/material';
import styles from './transaction.module.scss';

export interface AspireTransaction {
  id: string;
  date: string;
  amount: string;
  merchant: string;
  merchantIconCode: 0 | 1 | 2;
  type: string;
  cardType: 'credit card' | 'debit card';
}

interface TransactionProps {
  transaction: AspireTransaction;
}
const transactionIconMap = [
  {
    color: '#009DFF1A',
    src: 'file-storage.svg',
  },
  { color: '#00D6B51A', src: 'flights.svg' },
  { color: '#F251951A', src: 'megaphone.svg' },
];

const Transaction = ({ transaction }: TransactionProps) => {
  return (
    <div className={styles.transaction}>
      <Avatar
        sx={{
          backgroundColor:
            transactionIconMap[transaction.merchantIconCode].color,
          height: '50px',
          width: '50px',
          marginRight: '1em',
        }}
      >
        <img
          src={transactionIconMap[transaction.merchantIconCode].src}
          alt="merchant"
          className={styles.merchantIcon}
        />
      </Avatar>
      <div className={styles.transactionDetails}>
        <div className={styles.transactionTitle}>
          <Typography
            variant="body1"
            sx={{ fontWeight: '500', marginBottom: '0.25em' }}
          >
            {transaction.merchant}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: '600',
              display: 'flex',
              justifyContent: 'flex-end',
              color: transaction.type === 'Refund on' ? '#01D167' : '#FF0000',
            }}
          >
            {transaction.type === 'Refund on' ? '+ ' : '- '}
            {`S$ ${transaction.amount}`}
          </Typography>
        </div>
        <Typography variant="body2" sx={{ marginBottom: '0.5em' }}>
          {new Date(transaction.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </Typography>
        <div className={styles.transactionType}>
          <Avatar
            sx={{
              backgroundColor: '#325BAF',
              borderRadius: '40%',
              height: '1em',
              width: '1.25em',
              marginRight: '0.5em',
            }}
          >
            <img
              alt="business-and-finance-logo"
              src="business-and-finance.svg"
            />
          </Avatar>
          <Typography variant={'caption'} sx={{ fontWeight: '500' }}>
            {`${transaction.type} ${
              transaction.cardType === 'credit card'
                ? 'Credit card'
                : 'Debit card'
            }`}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Transaction;