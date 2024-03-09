import { Chip, Typography } from '@mui/material';
import styles from './cards.module.scss';
const Cards = () => {
  return (
    <div className={styles.container}>
      <div>
        <Typography variant={'body1'}>Available balance</Typography>
        <div className={styles.currencyContainer}>
          <Chip
            className={styles.chip}
            size={'medium'}
            color="success"
            label="S$"
          />
          <Typography fontWeight={'600'} variant={'h5'}>
            3,000
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Cards;
