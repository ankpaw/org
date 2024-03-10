import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import styles from './mycards.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RemoveRedEye } from '@mui/icons-material';
import DownArrowIcon from '../../../icons/DownArrowIcon';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './mycards.scss';
const MyCards = () => {
  const [isCardDetailsVisible, setIsCardDetailsVisible] = useState(false);
  const cards = [
    { name: 'Mark Henry', cardNumber: '1234567890123456', cvv: 123 },
    { name: 'John Doe', cardNumber: '1234567890123456', cvv: 123 },
    { name: 'Jane Doe', cardNumber: '1234567890123456', cvv: 123 },
  ];

  const actions = [
    { name: 'Freeze card', icon: 'freeze.svg' },
    { name: 'Set spend limit', icon: 'set-spend-limit.svg' },
    { name: 'Add to Gpay', icon: 'gpay.svg' },
    { name: 'Replace card', icon: 'replace.svg' },
    { name: 'Cancel card', icon: 'deactivate.svg' },
  ];

  const maskCardDetails = (cardNumber: string) => {
    return isCardDetailsVisible
      ? cardNumber
      : '•••• •••• •••• ' + cardNumber.slice(-4);
  };

  const maskCVV = (cvv: number) => {
    return isCardDetailsVisible ? cvv : '***';
  };
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.viewBtnContainer}>
          <Button
            sx={{
              color: '#01D167',
              textTransform: 'none',
              marginLeft: 'auto',
            }}
            startIcon={<RemoveRedEye fill="#01D167" />}
            onClick={() => setIsCardDetailsVisible(!isCardDetailsVisible)}
          >
            {isCardDetailsVisible ? 'Hide' : 'Show'} card number
          </Button>
        </div>
        <Carousel
          showArrows={false}
          showStatus={false}
          className={'aspire-carousel'}
        >
          {cards.map((card, index) => (
            <div key={index}>
              <Card className={styles.card}>
                <CardContent>
                  <div className={styles.cardHeader}>
                    <img src="logo-white.svg" alt="aspire logo" />
                  </div>
                  <Typography
                    className={styles.cardText}
                    variant="h5"
                    sx={{ fontWeight: '600', marginBottom: '2em'}}
                  >
                    {card.name}
                  </Typography>
                  <Typography
                    className={styles.cardText}
                    variant="h6"
                    sx={{ fontWeight: '500', letterSpacing: '0.5em', marginBottom: '1em'}}
                  >
                    {maskCardDetails(card.cardNumber)}
                  </Typography>
                  <Typography
                    className={styles.cardText}
                    variant="body2"
                    sx={{ fontWeight: '500', marginBottom: '1em'}}
                  >
                    <span>Thru: 12/25</span>
                    <span>CVV: {maskCVV(card.cvv)}</span>
                  </Typography>
                  <div className={styles.cardHeader}>
                    <img src="visa-logo.svg" alt="aspire logo" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </Carousel>
        <div className={styles.btnGroup}>
          {actions.map((action, index) => (
            <div key={index} className={styles.actionBtn}>
              <IconButton disableRipple>
                <img src={action.icon} alt={action.name} />
              </IconButton>
              <Typography sx={{ color: '#0C365A', }} variant={'body1'}>
                {action.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.statementContainer}>
        <Accordion sx={{ marginBottom: '2em' }} className={styles.accordion}>
          <AccordionSummary
            className={styles.accordionSummary}
            expandIcon={<DownArrowIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <img src="details.svg" alt="statement" />
            <Typography sx={{ marginLeft: '0.5em' }}>Card details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Name: Mark Henry</Typography>
            <Typography>Account number: 1234 5678 9101 1121</Typography>
            <Typography>Branch: 1234 5678 9101 1121</Typography>
            <Typography>IFSC Code: 1234 5678 9101 1121</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<DownArrowIcon />}
            aria-controls="panel1b-content"
            id="panel1b-header"
          >
            <img src="transactions.svg" alt="statement" />
            <Typography sx={{ marginLeft: '0.5em' }}>
              Recent Transactions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Name: Mark Henry</Typography>
            <Typography>Account number: 1234 5678 9101 1121</Typography>
            <Typography>Branch: 1234 5678 9101 1121</Typography>
            <Typography>IFSC Code: 1234 5678 9101 1121</Typography>
          </AccordionDetails>
        </Accordion>
        <Button
          sx={{
            color: '#01D167',
            backgroundColor: '#EDFFF5',
            textTransform: 'none',
            padding: '1em',
            ':hover': {
              backgroundColor: '#EDFFF5',
              opacity: '80%',
            },
          }}
          fullWidth
        >
          View all card transactions
        </Button>
      </div>
    </div>
  );
};

export default MyCards;
