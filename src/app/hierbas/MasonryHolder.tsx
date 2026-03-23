'use client';

import { ReactNode } from 'react';
import Masonry from '@mui/lab/Masonry';
import { Box } from '@mui/material';
import { useAccordionScroll } from '../context/AcordionScrollContext';

export default function MasonryHolder(
  {
    children
  }: {
    children: NonNullable<ReactNode>
  } 
) {
  const {
    mainScrollRef 
  } = useAccordionScroll();

  return (
    <Box
      ref={mainScrollRef}
      sx={{
        // 1. THE FIX: Force the Box to span the full width of its parent
        // so Masonry can accurately calculate the columns.
        width: '100%',

        // 2. If your MainLayout (the parent) is a flex container,
        // this ensures the Box fills the available space.
        flexGrow: 1,

        // 3. A classic CSS reset to prevent nested flex/scroll containers from breaking out
        minHeight: 0,

        // 4. The scrolling constraints
        height: '100vh',
      }}
    >
      <Masonry
        columns={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4 
        }}
        spacing={2}
        sx={{
          margin: 0 
        }}
      >
        {children}
      </Masonry>
    </Box>
  );
}