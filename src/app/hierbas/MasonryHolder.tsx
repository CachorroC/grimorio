'use client';

import { ReactNode } from 'react';
import Masonry from '@mui/lab/Masonry';
import { Box, useMediaQuery } from '@mui/material';
import { useAccordionScroll } from '../context/AcordionScrollContext';

export default function MasonryHolder(
  {
    children 
  }: { children: NonNullable<ReactNode> } 
) {
  const isLarge = useMediaQuery(
    '(min-width:1200px)' 
  );
  const isSmall = useMediaQuery(
    '(max-width:1099px)' 
  );

  const {
    mainScrollRef 
  } = useAccordionScroll();

  let columns = 3;

  if ( isLarge ) {
    columns = 3;
  } else if ( isSmall ) {
    columns = 1;
  }

  return (
    <Box
      ref={mainScrollRef}
      sx={{
        // CRITICAL: These properties ensure the Box is the actual scrollable area.
        // If your scrolling is handled by a parent div elsewhere, remove these two lines.
        height   : '100vh',
        overflowY: 'auto'
      }}
    >
      <Masonry columns={columns} spacing={2}>
        {children}
      </Masonry>
    </Box>
  );
}