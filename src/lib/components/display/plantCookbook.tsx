'use client';

import React, { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import CircleIcon from '@mui/icons-material/Circle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { EspecimenType,
  PreparacionType,
  ChakraType,
  ElementosType, } from '#@/lib/types/especimenTypes';
import { useAccordionScroll } from '#@/app/context/AcordionScrollContext';

interface PlantCookbookProps {
  plant        : EspecimenType;
  setIsEditing?: Dispatch<SetStateAction<boolean>>;
  isStandalone?: boolean;
}

// --- Color Mappings ---

const getChakraColor = (
  colorDescription: ChakraType['color']
): string => {
  switch ( colorDescription ) {
      case 'Rojo':
        return 'var(--chakra-rojo)'; // Red

      case 'Naranja':
        return 'var(--chakra-naranja)'; // Orange

      case 'Amarillo':
        return 'var(--chakra-amarillo)'; // Yellow

      case 'Verde o rosa':
        return 'var(--chakra-verde)'; // Green

      case 'Azul claro':
        return 'var(--chakra-azul)'; // Light Blue

      case 'Índigo':
        return 'var(--chakra-indigo)'; // Indigo

      case 'Blanco o violeta':
        return 'var(--chakra-violeta)'; // Violet

      case 'gris':
        return 'var(--chakra-gris)';
      default:
        return 'var(--chakra-default)';
  }
};

const getPolarityColor = (
  polarity: 'Masculine' | 'Feminine' | 'Neutral'
): string => {
  switch ( polarity ) {
      case 'Masculine':
        return 'var(--masculine-color)';

      case 'Feminine':
        return 'var(--feminine-color)';

      case 'Neutral':
        return 'var(--neutral-color)';
      default:
        return 'var(--neutral-color)';
  }
};

const getElementColor = (
  element: ElementosType
): string => {
  switch ( element ) {
      case 'Metal':
        return 'var(--element-metal)'; // Grey/Silver

      case 'Madera':
        return 'var(--element-madera)'; // Green

      case 'Fuego':
        return 'var(--element-fuego)'; // Red

      case 'Tierra':
        return 'var(--element-tierra)'; // Brown

      case 'Aire':
        return 'var(--element-aire)'; // Cyan

      case 'Agua':
        return 'var(--element-agua)'; // Blue

      case 'Sin Elemento Asociado':
        return 'var(--element-none)';
      default:
        return 'var(--element-default)';
  }
};

const getDoshaColor = (
  dosha: 'Vata' | 'Pitta' | 'Kapha'
): string => {
  switch ( dosha ) {
      case 'Vata':
        return 'var(--dosha-vata)';

      case 'Pitta':
        return 'var(--dosha-pitta)';

      case 'Kapha':
        return 'var(--dosha-kapha)';
      default:
        return 'var(--element-default)';
  }
};

const getUsoColor = (
  uso: PreparacionType['uso']
): string => {
  switch ( uso ) {
      case 'Tópico':
        return 'var(--uso-topico)';

      case 'Inhalado':
        return 'var(--uso-inhalado)';

      case 'Oral':
        return 'var(--uso-oral)';

      case 'Sublingual':
        return 'var(--uso-sublingual)';

      case 'Nasal':
        return 'var(--uso-nasal)';

      case 'Ótica':
        return 'var(--uso-otica)';

      case 'Oftálmica':
        return 'var(--uso-oftalmica)';

      case 'Rectal':
        return 'var(--uso-rectal)';

      case 'Vaginal':
        return 'var(--uso-vaginal)';

      case 'Cataplasma':
        return 'var(--uso-cataplasma)';

      case 'Baño Terapéutico':
        return 'var(--uso-bano)';

      case 'Sahumerio':
        return 'var(--uso-sahumerio)';

      case 'Uso Multipropósito':
        return 'var(--uso-multiproposito)';
      default:
        return 'var(--uso-multiproposito)';
  }
};

// --- Components ---


const TagSection = (
  {
    title,
    tags,
    color,
  }: {
    title: string;
    tags : string[];
    color:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  }
) => {
  if ( !tags || tags.length === 0 ) {
    return null;
  }

  let icon = 'call_made';

  if ( title === 'Partes Útiles' ) {
    icon = 'nest_eco_leaf';
  } else if ( title === 'Esencias Florales' ) {
    icon = 'deceased';
  } else if ( title === 'Propiedades Medicinales' ) {
    icon = 'medical_services';
  } else if ( title === 'Correspondencias Energéticas' ) {
    icon = 'energy_savings_leaf';
  } else if ( title === 'Síntomas Físicos' ) {
    icon = 'personal_injury';
  } else if ( title === 'Síntomas Emocionales' ) {
    icon = 'heart_broken';
  }

  return (
    <>
      <Box
        sx={{
          mb: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          color="textPrimary"
          gutterBottom
        >
          {title}
        </Typography>
        {/* <Box
          sx={{
            display : 'flex',
            flexWrap: 'wrap',
            gap     : 1,
          }}
        >
          {tags.map(
            (
              tag, index
            ) => {
              return (
                <Chip
                  key={index}
                  label={tag}
                  size="small"
                  color={color}
                  variant="outlined"
                />
              );
            }
          )}
        </Box> */}

        <List>
          {tags.map(
            (
              tag
            ) => {
              return (
                <ListItem
                  disablePadding
                  key={tag}
                >
                  <ListItemIcon
                    sx={{
                      color: `${ color }.light`,
                    }}
                  >
                    <span className="material-symbols-outlined">{icon}</span>
                  </ListItemIcon>
                  <ListItemText primary={tag} />
                </ListItem>
              );
            }
          )}
        </List>

        <Divider />
      </Box>
    </>
  );
};

const CustomColorTagSection = (
  {
    title,
    tags,
  }: {
    title: string;
    tags : { label: string; hexColor: string; tooltipContent?: React.ReactNode }[];
  }
) => {
  if ( !tags || tags.length === 0 ) {
    return null;
  }

  return (
    <Box
      sx={{
        mb: 2,
        mt: 2
      }}
    >
      <Typography
        variant="subtitle1"
        color="textPrimary"
        gutterBottom
      >
        {title}
      </Typography>
      <Box
        sx={{
          display : 'flex',
          flexWrap: 'wrap',
          gap     : 1,
        }}
      >
        {tags.map(
          (
            tag, index
          ) => {
            const chip = (
              <Chip
                label={tag.label}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: tag.hexColor,
                  color      : tag.hexColor,
                  fontWeight : 500,
                  cursor     : tag.tooltipContent
                    ? 'help'
                    : 'default',
                }}
              />
            );

            // Wrap in a Tooltip if tooltipContent is provided
            if ( tag.tooltipContent ) {
              return (
                <Tooltip
                  key={index}
                  title={tag.tooltipContent}
                  arrow
                  placement="top"
                >
                  {chip}
                </Tooltip>
              );
            }

            // Otherwise, return just the chip with the key applied
            return <React.Fragment key={index}>{chip}</React.Fragment>;
          }
        )}
      </Box>
    </Box>
  );
};

export default function PlantCookbook(
  {
    plant,
    setIsEditing,
    isStandalone,
  }: PlantCookbookProps
) {
  const {
    expanded, handleAccordionChange
  } = useAccordionScroll();

  return (
    <>
      <Grid
        container
        spacing={2}
      >
        <Grid
          sx={{
            xs: 12,
            md: isStandalone
              ? 12
              : 7,
            minWidth: isStandalone
              ? '100%'
              : 'auto',
          }}
        >
          <CardContent
            sx={{
              display       : 'flex',
              flexDirection : 'column',
              justifyContent: 'center',
              p             : {
                xs: 0,
                md: 2,
              },
            }}
          >
            <Box sx={{
              display   : 'flex',
              alignItems: 'center',
              gap       : 2,
              flexWrap  : 'wrap'
            }}
            >
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontStyle : 'italic',
                  fontWeight: 'bold',
                  mb        : 0
                }}
              >
                {plant.nombreCientifico}
              </Typography>
              <Chip
                label={plant.nativa
                  ? 'Nativa'
                  : 'Exótica / Introducida'}
                color={plant.nativa
                  ? 'success'
                  : 'default'}
                variant="outlined"
                size="small"
                sx={{
                  mb: 1
                }}
              />
            </Box>
            <Typography
              variant="h6"
              color="text.secondary"
              gutterBottom
            >
              {plant.nombresComunes.join(
                ', '
              )}
            </Typography>

            <Divider
              sx={{
                my: 2,
              }}
            />
            <Box
              sx={{
                borderRadius: 'var(--shape-corner-medium)',
                p           : 'var(--spacing-md)',
                bgcolor     : 'var(--surface-container-low)',
                gap         : {
                  xs: 1,
                  sm: 4,
                },
              }}
            >
              <TagSection
                title="Partes Útiles"
                tags={plant.partesUtiles}
                color="secondary"
              />
              <TagSection
                title="Esencias Florales"
                tags={plant.esenciasFlorales}
                color="primary"
              />
              <TagSection
                title="Propiedades Medicinales"
                tags={plant.propiedadesMedicinales}
                color="success"
              />
              <TagSection
                title="Correspondencias Energéticas"
                tags={plant.correspondenciasEnergeticas}
                color="success"
              />
              <TagSection
                title="Síntomas Físicos"
                tags={plant.malesFisicos}
                color="error"
              />
              <TagSection
                title="Síntomas Emocionales"
                tags={plant.malesEmocionales}
                color="error"
              />
            </Box>
            <Box
              sx={{
                display : 'flex',
                flexWrap: 'wrap',
                gap     : {
                  xs: 0,
                  sm: 2,
                },
              }}
            >
              {plant.chakrasAsociados && (
                <CustomColorTagSection
                  title="Chakras Asociados"
                  tags={plant.chakrasAsociados.map(
                    (
                      chakra
                    ) => {
                      return {
                        label   : chakra.nombre,
                        hexColor: getChakraColor(
                          chakra.color
                        ),
                        // Building the custom hover popup content here
                        tooltipContent: (
                          <Box
                            sx={{
                              p       : 0.5,
                              maxWidth: 280,
                            }}
                          >
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: 'bold',
                                mb        : 0.5,
                              }}
                            >
                              {chakra.nombreSanscrito}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                mb: 0.5,
                              }}
                            >
                              <strong>Ubicación:</strong> {chakra.ubicacion}
                            </Typography>
                            <Typography variant="body2">
                              <strong>Significado:</strong> {chakra.significado}
                            </Typography>
                          </Box>
                        ),
                      };
                    }
                  )
                  }
                />
              )}

              {plant.polaridadEnergetica && (
                <CustomColorTagSection
                  title="Polaridad Energética"
                  tags={plant.polaridadEnergetica.map(
                    (
                      polaridad
                    ) => {
                      return {
                        label   : polaridad,
                        hexColor: getPolarityColor(
                          polaridad
                        ),
                      };
                    }
                  )}
                />
              )}

              {plant.elementosAsociados && (
                <CustomColorTagSection
                  title="Elemento Asociado"
                  tags={[
                    {
                      label   : plant.elementosAsociados,
                      hexColor: getElementColor(
                        plant.elementosAsociados
                      ),
                    },
                  ]}
                />
              )}

              {plant.doshas && plant.doshas.length > 0 && (
                <CustomColorTagSection
                  title="Doshas que controla (Visión Ayurvedica)"
                  tags={plant.doshas.map(
                    (
                      dosha
                    ) => {
                      return {
                        label   : dosha,
                        hexColor: getDoshaColor(
                          dosha
                        ),
                      };
                    }
                  )}
                />
              )}
            </Box>
          </CardContent>
        </Grid>
      </Grid>

      <CardContent
        sx={{
          flexGrow: 1,
          px      : 0,
          mt      : 2,
          p       : 2,
        }}
      >
        <Grid
          container
          spacing={4}
        >
          {isStandalone && (
            <Grid
              sx={{
                xs: 12,
                md: 12,
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  display   : 'flex',
                  alignItems: 'center',
                  gap       : 1,
                }}
              >
                <InfoOutlinedIcon /> Taxonomía
              </Typography>
              <TableContainer
                component={Paper}
                elevation={8}
                variant="elevation"
              >
                <Table size="small">
                  <TableBody>
                    {Object.entries(
                      plant.taxon
                    ).map(
                      (
                        [
                          key,
                          value
                        ]
                      ) => {
                        if ( !value ) {
                          return null;
                        }

                        const displayValue = Array.isArray(
                          value
                        )
                          ? value.join(
                              ', '
                            )
                          : value;

                        return (
                          <TableRow key={key}>
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{
                                fontWeight   : 'bold',
                                textTransform: 'capitalize',
                              }}
                            >
                              {key}
                            </TableCell>
                            <TableCell align="right">{displayValue}</TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          )}

          <Grid
            sx={{
              xs: 12,
              md: 12,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight  : 'bold',
                borderBottom: '2px solid',
                borderColor : 'primary.main',
                pb          : 1,
              }}
            >
              Recetario / Preparaciones
            </Typography>

            {plant.preparaciones.map(
              (
                prep, index
              ) => {
                const panelId = `${ plant.nombreCientifico }-prep-${ prep.usoTerapeutico }-${ index }`;

                return (
                  <Accordion
                    key={panelId}
                    disableGutters
                    expanded={expanded === panelId}
                    onChange={handleAccordionChange(
                      panelId,
                      plant.nombreCientifico,
                    )}
                    elevation={0}
                    sx={{
                      '&:before': {
                        display: 'none',
                      },
                      border      : '1px solid',
                      borderColor : 'divider',
                      mb          : 1,
                      borderRadius: 1,
                      borderLeft  : `6px solid ${ getUsoColor(
                        prep.uso
                      ) }`,
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        backgroundColor: 'action.hover',
                        borderBottom   : `2px solid ${ getUsoColor(
                          prep.uso
                        ) }`,
                        borderBottomLeftRadius : 0,
                        borderBottomRightRadius: 0,
                      }}
                    >
                      <Box sx={{
                        display      : 'flex',
                        flexDirection: 'column',
                        width        : '100%'
                      }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: getUsoColor(
                              prep.uso
                            ),
                            fontWeight   : 'bold',
                            textTransform: 'uppercase',
                            mb           : 0.5,
                          }}
                        >
                          {prep.uso || 'Uso Multipropósito'}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight   : 'bold',
                            textTransform: 'capitalize',
                          }}
                        >
                          Para: {prep.usoTerapeutico}
                        </Typography>
                      </Box>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Grid
                        container
                        spacing={3}
                      >
                        <Grid
                          sx={{
                            xs: 12,
                            sm: 5,
                          }}
                        >
                          <Typography
                            variant="h6"
                            gutterBottom
                            color="primary"
                          >
                            Ingredientes
                          </Typography>
                          <List
                            dense
                            disablePadding
                          >
                            {prep.ingredientes.map(
                              (
                                ing, i
                              ) => {
                                return (
                                  <ListItem
                                    key={i}
                                    disableGutters
                                    sx={{
                                      alignItems: 'flex-start',
                                    }}
                                  >
                                    <ListItemIcon
                                      sx={{
                                        minWidth: 24,
                                        mt      : 0.5,
                                      }}
                                    >
                                      <CircleIcon
                                        sx={{
                                          fontSize: 8,
                                        }}
                                      />
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={ing.ingrediente}
                                      secondary={ing.cantidad}
                                      primaryTypographyProps={{
                                        variant   : 'body2',
                                        fontWeight: 'medium',
                                      }}
                                    />
                                  </ListItem>
                                );
                              }
                            )}
                          </List>
                        </Grid>

                        <Grid
                          sx={{
                            xs: 12,
                            sm: 7,
                          }}
                        >
                          <Typography
                            variant="h6"
                            gutterBottom
                            color="primary"
                          >
                            Preparación
                          </Typography>
                          <List disablePadding>
                            {prep.pasos.map(
                              (
                                [
                                  stepNumber,
                                  instruction
                                ], i
                              ) => {
                                return (
                                  <ListItem
                                    key={i}
                                    disableGutters
                                    alignItems="flex-start"
                                  >
                                    <Box
                                      sx={{
                                        display        : 'flex',
                                        alignItems     : 'center',
                                        justifyContent : 'center',
                                        minWidth       : 24,
                                        height         : 24,
                                        borderRadius   : '50%',
                                        backgroundColor: 'primary.main',
                                        color          : 'primary.contrastText',
                                        fontSize       : '0.875rem',
                                        fontWeight     : 'bold',
                                        mr             : 2,
                                        mt             : 0.5,
                                      }}
                                    >
                                      {stepNumber}
                                    </Box>
                                    <ListItemText primary={instruction} />
                                  </ListItem>
                                );
                              }
                            )}
                          </List>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight   : 'bold',
                              textTransform: 'capitalize',
                              mt           : 2,
                            }}
                          >
                            Forma de aplicación: {prep.formaDeAplicacion}
                          </Typography>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                );
              }
            )}
          </Grid>
        </Grid>
      </CardContent>

      {isStandalone && (
        <Button
          onClick={() => {
            return setIsEditing?.(
              (
                e
              ) => {
                return !e;
              }
            );
          }}
        >
          Editar
        </Button>
      )}
    </>
  );
}
