import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function InnerAccordion(props) {
  return (
    <div>
      <Accordion className='!rounded-none !shadow-none !border !border-blue-500 !border-solid !border-b-0'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <code>{ props.title }</code>
        </AccordionSummary>
        <AccordionDetails>
          <div className='mb-4'> { props.details } </div>
          { props.children }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}