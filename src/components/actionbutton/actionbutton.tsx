import { IconButton, Typography } from '@mui/material';
import styles from './actionbutton.module.scss';

interface ActionButtonProps {
  name: string;
  icon: string;
  onClick?: () => void;
}

const ActionButton = ({ name, icon, onClick }: ActionButtonProps) => {
  return (
    <div className={styles.actionBtn}>
      <IconButton onClick={onClick} disableRipple>
        <img src={icon} alt={name} />
      </IconButton>
      <Typography sx={{ color: '#0C365A' }} variant={'body1'}>
        {name}
      </Typography>
    </div>
  );
};

export default ActionButton;
