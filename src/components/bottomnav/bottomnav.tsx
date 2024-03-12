import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import styles from './bottomnav.module.scss';
import { useLocation } from 'react-router-dom';
import HomeIcon from '../../icons/HomeIcon';
import CardIcon from '../../icons/CardIcon';
import PaymentsIcon from '../../icons/PaymentsIcon';
import CreditIcon from '../../icons/CreditIcon';
import AccountIcon from '../../icons/AccountIcon';
const routes = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
  },
  {
    path: '/cards/my-cards',
    name: 'Cards',
    icon: CardIcon,
  },
  {
    path: '/payments',
    name: 'Payments',
    icon: PaymentsIcon,
  },
  {
    path: '/credit',
    name: 'Credit',
    icon: CreditIcon,
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: AccountIcon,
  },
];
export default function BottomNav() {
  const location = useLocation();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: 'auto', bottom: 0, background: '#FFF' }}
      >
        <Toolbar>
          <List className={styles.list}>
            {routes.map((route) => (
              <ListItemButton
                className={styles.listButton}
                href={route.path}
                key={route.path}
              >
                {route.icon && (
                  <route.icon
                    fillB={
                      location.pathname === route.path ? '#01d167' : '#DDDDDD'
                    }
                  />
                )}

                <Typography
                  variant="caption"
                  className={styles.listItem}
                  color={
                    location.pathname === route.path ? '#01d167' : '#DDDDDD'
                  }
                  fontWeight={
                    location.pathname === route.path ? 'bold' : 'normal'
                  }
                >
                  {route.name}
                </Typography>
              </ListItemButton>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
