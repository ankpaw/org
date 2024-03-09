// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SideNav from '../components/sidenav';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <SideNav isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
      <div
        className={styles.shiftTextRight}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
