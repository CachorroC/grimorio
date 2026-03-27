'use client';

import { ReactNode, useEffect, useState } from 'react';
import Masonry from '@mui/lab/Masonry';
import { Box } from '@mui/material';
import { useAccordionScroll } from '../context/AcordionScrollContext';
import { Loader } from '#@/lib/components/Loader/main-loader';

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

  // 1. Create a state to track if we are running in the browser
  const [
    isMounted,
    setIsMounted
  ] = useState(
    false
  );

  // 2. useEffect only runs on the client. Once it fires, we know it's safe to render Masonry.
  useEffect(
    () => {
      setIsMounted(
        true
      );
    }, []
  );

  return (
    <Box
      ref={mainScrollRef}
      sx={{
        width    : '100%',
        flexGrow : 1,
        minHeight: 0,
        height   : '100vh',
        // Ensure overflow is set so the ref can capture the scroll events
        overflowY: 'auto',
      }}
    >
      {/* 3. Only render the Masonry component if we are fully mounted in the browser */}
      { isMounted
        ? (
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
          )
        : (
      // Optional: You can put a loading spinner or skeleton here
      // to prevent a flash of empty space on F5.
            <div style={{
              opacity: 0
            }}
            >Loading layout... <Loader /></div>
          )}
    </Box>
  );
}