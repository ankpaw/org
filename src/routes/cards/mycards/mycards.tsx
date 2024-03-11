import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  IconButton,
  Typography,
} from '@mui/material';
import styles from './mycards.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RemoveRedEye } from '@mui/icons-material';
import DownArrowIcon from '../../../icons/DownArrowIcon';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './mycards.scss';
import CustomCard, {
  AspireCard,
} from '../../../components/customcard/customcard';

interface CardDetails {
  id: string;
  accountHolder: string;
  accountNumber: string;
  branch: string;
  ifsc: string;
}

interface Transaction {
  id: string;
  date: string;
  amount: string;
  merchant: string;
  merchantIconCode: 0 | 1 | 2;
  type: string;
  cardType: 'credit card' | 'debit card';
}

const MyCards = () => {
  const [isCardDetailsVisible, setIsCardDetailsVisible] = useState(false);
  const [cards, setCards] = useState<AspireCard[]>([]);
  const [cardDetails, setCardDetails] = useState<CardDetails | null>(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const transactionIconMap = [
    {
      color: '#009DFF1A',
      src: 'file-storage.svg',
    },
    { color: '#00D6B51A', src: 'flights.svg' },
    { color: '#F251951A', src: 'megaphone.svg' },
  ];

  useEffect(() => {
    fetch('http://localhost:3001/my-cards')
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  useEffect(() => {
    const selectedCardId = cards[selectedCardIndex]?.id;
    selectedCardId &&
      fetch(`http://localhost:3001/card-details/${selectedCardId}`)
        .then((response) => response.json())
        .then((data) => setCardDetails(data));
    selectedCardId &&
      fetch(`http://localhost:3001/transactions/${selectedCardId}`)
        .then((response) => response.json())
        .then((data) => setTransactions(data.transactions));
  }, [selectedCardIndex, cards]);

  const actions = [
    { name: 'Freeze card', icon: 'freeze.svg' },
    { name: 'Set spend limit', icon: 'set-spend-limit.svg' },
    { name: 'Add to Gpay', icon: 'gpay.svg' },
    { name: 'Replace card', icon: 'replace.svg' },
    { name: 'Cancel card', icon: 'deactivate.svg' },
  ];

  
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
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          className={'aspire-carousel'}
          selectedItem={selectedCardIndex}
          onChange={(index) => setSelectedCardIndex(index)}
        >
          {cards.map((card) => (
            <div key={card?.id}>
              <CustomCard
                isCardDetailsVisible={isCardDetailsVisible}
                card={card}
              />
            </div>
          ))}
        </Carousel>
        <div className={styles.btnGroup}>
          {actions.map((action, index) => (
            <div key={index} className={styles.actionBtn}>
              <IconButton disableRipple>
                <img src={action.icon} alt={action.name} />
              </IconButton>
              <Typography sx={{ color: '#0C365A' }} variant={'body1'}>
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
            <Typography>Name: {cardDetails?.accountHolder}</Typography>
            <Typography>
              Account number: {cardDetails?.accountNumber}
            </Typography>
            <Typography>Branch: {cardDetails?.branch}</Typography>
            <Typography>IFSC Code: {cardDetails?.ifsc}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded className={styles.accordion}>
          <AccordionSummary
            className={styles.accordionSummary}
            expandIcon={<DownArrowIcon />}
            aria-controls="panel1b-content"
            id="panel1b-header"
          >
            <img src="transactions.svg" alt="statement" />
            <Typography sx={{ marginLeft: '0.5em' }}>
              Recent Transactions
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.accordionDetails}>
            {transactions.map(
              (transaction) => {
                return (
                  <div key={transaction.id} className={styles.transaction}>
                    <Avatar
                      sx={{
                        backgroundColor:
                          transactionIconMap[transaction.merchantIconCode]
                            .color,
                        height: '50px',
                        width: '50px',
                        marginRight: '1em',
                      }}
                    >
                      <img
                        src={
                          transactionIconMap[transaction.merchantIconCode].src
                        }
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
                            color:
                              transaction.type === 'credit'
                                ? '#01D167'
                                : '#FF0000',
                          }}
                        >
                          {transaction.type === 'credit' ? '+ ' : '- '}
                          {`S$ ${transaction.amount}`}
                        </Typography>
                      </div>
                      <Typography
                        variant="body2"
                        sx={{ marginBottom: '0.5em' }}
                      >
                        {new Date(transaction.date).toLocaleDateString(
                          'en-GB',
                          {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          }
                        )}
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
                        <Typography
                          variant={'caption'}
                          sx={{ fontWeight: '500' }}
                        >
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
              } /* render transaction */
            )}
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
