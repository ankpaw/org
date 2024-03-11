import { Card, CardContent, Typography } from '@mui/material';
import styles from './customcard.module.scss';

export interface AspireCard {
  id: string;
  name: string;
  cardNumber: string;
  cvv: string;
  type: 'debit' | 'credit';
  expiry: string;
  freezed: boolean;
}
interface CustomCardProps {
  isCardDetailsVisible: boolean;
  card: AspireCard;
}

const CustomCard = ({ isCardDetailsVisible, card }: CustomCardProps) => {
  const maskCardDetails = (cardNumber: string) => {
    return isCardDetailsVisible
      ? cardNumber
      : '•••• •••• •••• ' + cardNumber.slice(-4);
  };

  const maskCVV = (cvv: string) => {
    return isCardDetailsVisible ? cvv : '***';
  };

  return (
    <Card className={styles.card}>
      <CardContent>
        <div className={styles.cardHeader}>
          <img src="logo-white.svg" alt="aspire logo" />
        </div>
        <Typography
          className={styles.cardText}
          variant="h5"
          sx={{ fontWeight: '600', marginBottom: '2em' }}
        >
          {card.name}
        </Typography>
        <Typography
          className={styles.cardText}
          variant="h6"
          sx={{
            fontWeight: '500',
            letterSpacing: '0.5em',
            marginBottom: '1em',
          }}
        >
          {maskCardDetails(card.cardNumber)}
        </Typography>
        <Typography
          className={styles.cardText}
          variant="body2"
          sx={{ fontWeight: '500', marginBottom: '1em' }}
        >
          <span>Thru: {card.expiry}</span>
          <span>CVV: {maskCVV(card.cvv)}</span>
        </Typography>
        <div className={styles.cardHeader}>
          <img src="visa-logo.svg" alt="aspire logo" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
