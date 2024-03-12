// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/700.css';
import SideNav from '../components/sidenav/sidenav';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import BottomNav from '../components/bottomnav/bottomnav';

export function App() {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      {!isMobile && (
        <SideNav isDrawerOpen={isDrawerOpen} setDrawerOpen={setIsDrawerOpen} />
      )}
      <div className={!isMobile ? styles.shiftTextRight : styles.marginBottom}>
        <Outlet />
      </div>
      {isMobile && <BottomNav />}
    </div>
  );
}

export default App;
