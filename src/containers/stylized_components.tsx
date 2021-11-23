import {
  Button, ButtonProps, styled, TextField,
} from '@mui/material';

export const StylizedTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#1f6feb',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1f6feb',
    },
  },
});

export const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: '#fff',
}));
