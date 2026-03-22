'use client';

import { useState } from 'react';
import { Button, Card, CardMedia, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EspecimenForm from './form/especimenForm';
import PlantCookbook from './display/plantCookbook';
import { EspecimenType } from '../types/especimenTypes';
import Link from 'next/link';

export default function SpecimenEditSelection(
  {
    plantData,
    isStandalone = false,
  }: {
    plantData    : EspecimenType;
    isStandalone?: boolean;
  }
) {
  const [
    isEditing,
    setIsEditing
  ] = useState(
    false
  );
  const defaultImage
    = 'https://via.placeholder.com/400x300?text=No+Image+Available';

  return (
    <Card
      sx={{
        width        : '100%',
        maxWidth     : '100%',
        mx           : 'auto',
        boxShadow    : 3,
        borderRadius : 2,
        containerType: 'inline-size',
        containerName: 'specimenCard',
        // 1. Constrain the total height of the card so it doesn't grow infinitely off-screen
        maxHeight    : isStandalone
          ? '85vh'
          : 'none',
        display      : 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display                                     : 'flex',
          flexDirection                               : 'column',
          // 2. Prevent this wrapper from overflowing the card
          flexGrow                                    : 1,
          overflow                                    : 'hidden',
          '@container specimenCard (min-width: 800px)': {
            flexDirection: 'row',
          },
        }}
      >
        {/* --- LEFT COLUMN: IMAGE --- */}
        <Box
          sx={{
            width                                       : '100%',
            // Optional: prevent the image side from scrolling if the image is tall
            overflow                                    : 'hidden',
            '@container specimenCard (min-width: 800px)': {
              width: '41.66%',
            },
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height                                      : 300,
              objectFit                                   : 'cover',
              '@container specimenCard (min-width: 800px)': {
                height: '100%',
              },
            }}
            image={plantData.imageUrl || defaultImage}
            alt={plantData.nombreCientifico}
          />
        </Box>

        {/* --- RIGHT COLUMN: DATA --- */}
        <Box
          sx={{
            width                                       : '100%',
            display                                     : 'flex',
            flexDirection                               : 'column',
            // 3. THE FIX: Tell this specific column to scroll if content is too long
            overflowY                                   : 'auto',
            // 4. Add some padding so the scrollbar doesn't hug the text too tightly
            p                                           : 2,
            '@container specimenCard (min-width: 800px)': {
              width: '58.33%',
            },
          }}
        >
          {isEditing
            ? (
                <EspecimenForm
                  initialData={plantData}
                  setIsEditing={setIsEditing}
                />
              )
            : (
                <PlantCookbook
                  plant={plantData}
                  setIsEditing={setIsEditing}
                />
              )}

          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setIsEditing(
                (
                  edit
                ) => {
                  return !edit;
                }
              );
            }}
            endIcon={<SendIcon />}
            sx={{
              mt       : 'auto', // Pushes the button to the bottom if there's extra space
              mb       : 2,
              alignSelf: 'flex-start'
            }}
          >
            Send
          </Button>
          <Link href={`/hierba/${ plantData.nombreCientifico }`}>View Details</Link>
        </Box>
      </Box>
    </Card>
  );
}