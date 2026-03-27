'use client';

import { useState } from 'react';
import { Button, Card, CardMedia, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EspecimenForm from './form/especimenForm';
import PlantCookbook from './display/plantCookbook';
import { EspecimenType } from '../types/especimenTypes';
import Link from 'next/link';
import { useAccordionScroll } from '#@/app/context/AcordionScrollContext';
import buttonStyles from '../styles/buttons.module.css';

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
  const {
    cardRefs
  } = useAccordionScroll();
  const defaultImage = 'https://via.placeholder.com/400x300?text=No+Image+Available';

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
        maxHeight    : isStandalone
          ? '85vh'
          : 'none',
        display      : 'flex',
        flexDirection: 'column',
      }}
      ref={(
        el: HTMLDivElement | null
      ) => {
        if ( el ) {
          cardRefs.current[ plantData.nombreCientifico ] = el;
        }
      }}
    >
      <Box
        sx={{
          display                                     : 'flex',
          flexDirection                               : 'column',
          flexGrow                                    : 1,
          overflow                                    : 'hidden',
          '@container specimenCard (min-width: 800px)': {
            flexDirection: 'row',
          },
        }}
      >
        <Box
          sx={{
            width                                       : '100%',
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

        <Box
          sx={{
            width                                       : '100%',
            display                                     : 'flex',
            flexDirection                               : 'column',
            overflowY                                   : 'auto',
            p                                           : 2,
            '@container specimenCard (min-width: 800px)': {
              width: '58.33%',
            },
          }}
        >
          {isEditing
            ? (
                <EspecimenForm initialData={plantData} setIsEditing={setIsEditing} />
              )
            : (
                <PlantCookbook plant={plantData} setIsEditing={setIsEditing} />
              ) }
          <div style={{
            display : 'flex',
            flexFlow: 'row nowrap'
          }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                return setIsEditing(
                  (
                    edit
                  ) => {
                    return !edit;
                  }
                );
              }}
              endIcon={<EditIcon />}
              sx={{
                mt       : 'auto',
                mb       : 2,
                alignSelf: 'flex-start'
              }}
            >
              Editar
            </Button>

            <Link href={`/hierba/${ plantData.nombreCientifico }`} className={buttonStyles.buttonActiveCategory} style={{
              alignSelf: 'flex-start'
            }}
            >
              <span className={`material-symbols-outlined ${ buttonStyles.icon }`}>
                expand_all
              </span>
              <p className={buttonStyles.text}>ver más</p>
            </Link>
          </div>
        </Box>
      </Box>
    </Card>
  );
}