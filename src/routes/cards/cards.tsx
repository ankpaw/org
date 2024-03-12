import { Box, Tab, Tabs, Typography } from '@mui/material';
import styles from './cards.module.scss';
import CustomChip from '../../components/customchip/customchip';
import CustomButton from '../../components/custombutton/custombutton';
import AddIcon from '../../icons/AddIcon';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AddCardDialog from '../../components/addcarddialog/addcarddialog';
const Cards = () => {
  const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = useState('my-cards');
  const [refreshCards, setRefreshCards] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (event: React.ChangeEvent, newValue: string) => {
    setCurrentRoute(newValue);
    navigate(`${newValue.replace(/\s+/g, '-').toLowerCase()}`);
  };

  const tabs = [
    {
      label: 'My debit cards',
      value: 'my-cards',
    },
    {
      label: 'All company cards',
      value: 'all',
    },
  ];

  return (
    <div className={styles.container}>
      <div>
        <Typography variant={'body1'}>Available balance</Typography>
        <div className={styles.currencyContainer}>
          <CustomChip className={styles.chip} label="S$" />
          <Typography fontWeight={'600'} variant={'h5'}>
            3,000
          </Typography>
          <CustomButton
            onClick={handleClickOpen}
            className={styles.addBtn}
            startIcon={<AddIcon />}
          >
            New card
          </CustomButton>
        </div>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          className={styles.tab}
          onChange={handleChange}
          value={currentRoute}
          aria-label="Cards"
          TabIndicatorProps={{
            className: styles.tabIndicator,
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              className={`${styles.tabItem} ${
                currentRoute === tab.value ? styles.selectedTabItem : ''
              }`}
              label={tab.label}
              value={tab.value}
            />
          ))}
        </Tabs>
      </Box>
      <div className={styles.content}>
        <Outlet context={[refreshCards, setRefreshCards]} />
      </div>
      <AddCardDialog
        setRefreshCards={setRefreshCards}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default Cards;
