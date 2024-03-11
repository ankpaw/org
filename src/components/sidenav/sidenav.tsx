import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import styles from './sideNav.module.scss'; // Import the SCSS module
import HomeIcon from '../../icons/HomeIcon';
import CardIcon from '../../icons/CardIcon';
import PaymentsIcon from '../../icons/PaymentsIcon';
import CreditIcon from '../../icons/CreditIcon';
import AccountIcon from '../../icons/AccountIcon';
import { useLocation } from 'react-router-dom';

interface SideNavProps {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDrawerOpen: boolean;
}
const SideNav = ({ isDrawerOpen, setDrawerOpen }: SideNavProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

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

  const drawer = (
    <div className={styles.drawer}>
      <div className={styles.drawerHeader}>
      <img src="/logo.svg" alt="Aspire logo" />
      <Typography color="#53738b" variant="subtitle2">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </Typography>
      </div>
     
      <List>
        {routes.map((route) => (
          <ListItemButton
            className={styles.listButton}
            href={route.path}
            key={route.path}
          >
            {route.icon && (
              <route.icon
                fillB={location.pathname === route.path ? '#01d167' : '#fff'}
              />
            )}

            <Typography
              variant="body1"
              className={styles.listItem}
              color={location.pathname === route.path ? '#01d167' : '#fff'}
              fontWeight={location.pathname === route.path ? 'bold' : 'normal'}
            >
              {route.name}
            </Typography>
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  return (
    !isMobile && (
      <div className={styles.root}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          className={styles.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <nav className={styles.nav} aria-label="nav links">
          <Drawer
            variant="permanent"
            anchor="left"
            open={isDrawerOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: styles.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </div>
    )
  );
};

export default SideNav;
