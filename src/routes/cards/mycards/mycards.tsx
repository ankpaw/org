import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
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
import Transaction, {
  AspireTransaction,
} from '../../../components/transaction/transaction';
import ActionButton from '../../../components/actionbutton/actionbutton';
import { useOutletContext } from 'react-router-dom';

interface CardDetails {
  id: string;
  accountHolder: string;
  accountNumber: string;
  branch: string;
  ifsc: string;
}

const MyCards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isCardDetailsVisible, setIsCardDetailsVisible] = useState(false);
  const [cards, setCards] = useState<AspireCard[]>([]);
  const [cardDetails, setCardDetails] = useState<CardDetails | null>(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);
  const [transactions, setTransactions] = useState<AspireTransaction[]>([]);
  const [refreshCards, setRefreshCards] = useOutletContext() as [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ];

  useEffect(() => {
    fetch('http://localhost:3001/my-cards')
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setRefreshCards(false);
      });
  }, [refreshCards, setRefreshCards]);

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

  const toggleCardFreezeStatus = () => {
    const selectedCardId = cards[selectedCardIndex]?.id;
    selectedCardId &&
      fetch(`http://localhost:3001/my-cards/${selectedCardId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ freezed: !cards[selectedCardIndex].freezed }),
      }).then(() => setRefreshCards(true));
  };

  const actions = [
    {
      name: `${cards[selectedCardIndex]?.freezed ? 'Unfreeze' : 'Freeze'} card`,
      icon: 'freeze.svg',
      onClick: toggleCardFreezeStatus,
    },
    { name: 'Set spend limit', icon: 'set-spend-limit.svg' },
    { name: 'Add to Gpay', icon: 'gpay.svg' },
    { name: 'Replace card', icon: 'replace.svg' },
    { name: 'Cancel card', icon: 'deactivate.svg' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.viewBtnContainer}>
            <Button
              sx={
                isMobile
                  ? {
                      color: '#01D167',
                      textTransform: 'none',
                      marginLeft: 'auto',
                      background: '#FFF',
                      paddingBottom: '1em',
                      marginBottom: '-1em',
                    }
                  : {
                      color: '#01D167',
                      textTransform: 'none',
                      marginLeft: 'auto',
                    }
              }
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
                  isMobile={isMobile}
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className={styles.btnGroup}>
          {actions.map((action, index) => (
            <ActionButton
              key={`${action.name}-${index}`}
              icon={action.icon}
              name={action.name}
              onClick={action?.onClick}
            />
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
            {transactions.map((transaction) => {
              return (
                <Transaction key={transaction.id} transaction={transaction} />
              );
            })}
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
