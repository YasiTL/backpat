import React from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Box from '@material-ui/core/Box';

function FAQ({ faq, index, toggleFAQ }) {
  const theme = createMuiTheme();

  theme.typography.h5 = {
    fontSize: '1rem',
    fontWeight: 'normal',
    '@media (min-width:600px)': {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2rem',
    },
  };

  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)
      }
    >
      <ThemeProvider theme={theme}>
        <Box className='faq-question' m={2}>
          <Box display="flex" justifyContent="space-between" p={2}>
            <Typography variant='h5'>{faq.question}</Typography>
            <KeyboardArrowDownIcon />
          </Box>
        </Box>
      </ThemeProvider>
      <Box className='faq-answer' m={2}>{faq.answer}</Box>
    </div >
  );
}
export default FAQ;
