'use client';

import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { useAccordionScroll } from '../context/AcordionScrollContext';

export default function GridHolder({
  children,
}: {
  children: NonNullable<ReactNode>;
}) {
  const { mainScrollRef } = useAccordionScroll();

  return (
    <Box
      ref={mainScrollRef}
      sx={{
        width: '100%',
        flexGrow: 1,
        // Constrain the height so it becomes the scrollable container
        height: '100vh',
        overflowY: 'auto',
        // Optional: add some padding so cards don't touch the very edges of the screen
        p: 2,
      }}
    >
      {/* 2. The CSS Grid Container */}
      <Box
        sx={{
          display: 'grid',
          // Space between the cards
          gap: 2,

          // Pure CSS responsive columns!
          // MUI translates this directly into CSS @media queries, completely bypassing the SSR F5 bug.
          gridTemplateColumns: {
            xs: '1fr', // 1 column on mobile (0px+)
            sm: '1fr', // 2 columns on tablets (600px+)
            md: 'repeat(2, 1fr)', // 3 columns on small desktops (900px+)
            lg: 'repeat(3, 1fr)', // 3 columns on medium desktops (1200px+)
            xl: 'repeat(4, 1fr)', // 4 columns on large screens (1200px+)
          },

          // CRITICAL FOR FULL HEIGHT:
          // By default, CSS Grid stretches all items in a row to match the tallest item.
          // 'alignItems: start' tells each card to only be as tall as its own content.
          alignItems: 'start',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
