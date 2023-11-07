import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion(props) {
  return (
    <div className='!border-b !border-blue-500 !border-solid'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='!bg-blue-300'
        >
          <Typography>{ props.title }</Typography>
        </AccordionSummary>
        <AccordionDetails className='!px-0 !pb-0'>
          <Typography className='!px-2 !mb-8'>
            { props.details }
          </Typography>
          <div className='flex flex-col'>
            { props.children }
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}