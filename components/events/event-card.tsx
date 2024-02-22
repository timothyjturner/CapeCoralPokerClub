import * as React from 'react';
import { Box } from '@mui/material';


export default function EventCard({children, order}) {
  let boxClass = "ccpc-event w-max h-30 bg-slate-100 border-1 mb-4 flex items-center"; 
  if(order == "1") {
    boxClass += " ccpc-event__sticky";
  }
  return (
      <Box className={boxClass}>{children}</Box>
  );
}