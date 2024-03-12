import { Button, ButtonProps } from '@mui/material';

const CustomButton = ({
  isMobile,
  ...props
}: ButtonProps & { isMobile: boolean }) => (
  <Button
    sx={
      isMobile
        ? {
            textTransform: 'none',
            color: '#23CEFD',
          }
        : {
            backgroundColor: '#325BAF',
            textTransform: 'none',
          }
    }
    variant={isMobile ? 'text' : 'contained'}
    {...props}
  ></Button>
);
export default CustomButton;
