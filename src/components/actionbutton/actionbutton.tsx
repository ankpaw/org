import { IconButton, Typography } from '@mui/material';
import styles from './actionbutton.module.scss';

interface ActionButtonProps {
  name: string;
  icon: string;
}

const ActionButton = ({ name, icon }: ActionButtonProps) => {
  return (
    <div className={styles.actionBtn}>
      <IconButton disableRipple>
        <img src={icon} alt={name} />
      </IconButton>
      <Typography sx={{ color: '#0C365A' }} variant={'body1'}>
        {name}
      </Typography>
    </div>
  );
};

export default ActionButton;
