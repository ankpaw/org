import { Button, ButtonProps } from '@mui/material';

const CustomButton = (props: ButtonProps) => (
  <Button sx={{
    backgroundColor: '#325BAF',
    textTransform: 'none',
  }} variant={'contained'} {...props}></Button>
);
export default CustomButton;
