import { Chip, ChipProps } from '@mui/material';

const CustomChip = ({ sx, ...rest }: ChipProps) => {
  return (
    <Chip
      sx={{
        backgroundColor: '#01D167',
        borderRadius: '0.5em',
        padding: '1em 0.25em',
        fontWeight: '600',
        fontSize: '0.8em',
        color: 'white',
        ...sx,
      }}
      size='small'
      {...rest}
    />
  );
};

export default CustomChip;
