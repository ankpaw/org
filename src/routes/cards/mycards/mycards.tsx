import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import styles from './mycards.module.scss';
import { RemoveRedEye } from '@mui/icons-material';
import DownArrowIcon from '../../../icons/DownArrowIcon';
const MyCards = () => {
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
          >
            Show card number
          </Button>
        </div>
        <Card className={styles.card}>
          <CardContent>
            <div className={styles.cardHeader}>
              <img src="logo-white.svg" alt="aspire logo" />
            </div>
            <Typography
              className={styles.cardText}
              variant="h6"
              sx={{ fontWeight: 'bold' }}
            >
              Mark Henry
            </Typography>
            <Typography
              className={styles.cardText}
              variant="body2"
              sx={{ fontWeight: 'bold' }}
            >
              1234 5678 9101 1121
            </Typography>
            <Typography
              className={styles.cardText}
              variant="body2"
              sx={{ fontWeight: 'bold' }}
            >
              <span>Thru: 12/25</span>
              <span>CVV: 123</span>
            </Typography>
            <div className={styles.cardHeader}>
              <img src="visa-logo.svg" alt="aspire logo" />
            </div>
          </CardContent>
        </Card>
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
