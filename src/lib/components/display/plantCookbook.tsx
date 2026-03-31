'use client';

import {
  Box,
  CardContent,
  Typography,
  Chip,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  EspecimenType,
  ChakraType,
  ElementosType,
} from '#@/lib/types/especimenTypes';
import { Dispatch, SetStateAction } from 'react';
import { useAccordionScroll } from '#@/app/context/AcordionScrollContext';

interface PlantCookbookProps {
  plant: EspecimenType;
  setIsEditing?: Dispatch<SetStateAction<boolean>>;
}

// --- Color Mappings ---

const getChakraColor = (colorDescription: ChakraType['color']): string => {
  switch (colorDescription) {
    case 'Rojo':
      return '#e53935'; // Red

    case 'Naranja':
      return '#fb8c00'; // Orange

    case 'Amarillo':
      return '#fdd835'; // Yellow

    case 'Verde o rosa':
      return '#43a047'; // Green

    case 'Azul claro':
      return '#03a9f4'; // Light Blue

    case 'Índigo':
      return '#3949ab'; // Indigo

    case 'Blanco o violeta':
      return '#8e24aa'; // Violet
    default:
      return '#9e9e9e';
  }
};

const getPolarityColor = (polarity: 'Masculine' | 'Feminine'): string => {
  return polarity === 'Masculine' ? '#1976d2' : '#d81b60'; // Strong Blue vs Deep Pink
};

const getElementColor = (element: ElementosType): string => {
  switch (element) {
    case 'Metal':
      return '#9e9e9e'; // Grey/Silver

    case 'Madera':
      return '#4caf50'; // Green

    case 'Fuego':
      return '#f44336'; // Red

    case 'Tierra':
      return '#8d6e63'; // Brown

    case 'Aire':
      return '#00bcd4'; // Cyan

    case 'Agua':
      return '#1e88e5'; // Blue
    default:
      return '#9e9e9e';
  }
};

// --- Components ---

const TagSection = ({
  title,
  tags,
  color,
}: {
  title: string;
  tags: string[];
  color:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
}) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
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
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        {tags.map((tag, index) => {
          return (
            <Chip
              key={index}
              label={tag}
              size="small"
              color={color}
              variant="outlined"
            />
          );
        })}
      </Box>
    </Box>
  );
};

const CustomColorTagSection = ({
  title,
  tags,
}: {
  title: string;
  tags: { label: string; hexColor: string }[];
}) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
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
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        {tags.map((tag, index) => {
          return (
            <Chip
              key={index}
              label={tag.label}
              size="small"
              variant="outlined"
              sx={{
                borderColor: tag.hexColor,
                color: tag.hexColor,
                backgroundColor: `${tag.hexColor}1A`, // 10% opacity
                fontWeight: 500,
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default function PlantCookbook({
  plant,
  setIsEditing,
}: PlantCookbookProps) {
  const { expanded, handleAccordionChange } = useAccordionScroll();

  return (
    <>
      <Grid
        container
        spacing={2}
      >
        <Grid
          sx={{
            xs: 12,
            md: 7,
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: {
                xs: 0,
                md: 2,
              },
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontStyle: 'italic',
                fontWeight: 'bold',
              }}
            >
              {plant.nombreCientifico}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              gutterBottom
            >
              {plant.nombresComunes.join(', ')}
            </Typography>

            <Divider
              sx={{
                my: 2,
              }}
            />

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
              title="Males Físicos"
              tags={plant.malesFisicos}
              color="error"
            />
            <TagSection
              title="Males Emocionales"
              tags={plant.malesEmocionales}
              color="error"
            />

            {plant.chakrasAsociados && (
              <CustomColorTagSection
                title="Chakras Asociados"
                tags={plant.chakrasAsociados.map((chakra) => {
                  return {
                    label: chakra.nombre,
                    hexColor: getChakraColor(chakra.color),
                  };
                })}
              />
            )}

            {plant.polaridadEnergetica && (
              <CustomColorTagSection
                title="Polaridad Energética"
                tags={plant.polaridadEnergetica.map((polaridad) => {
                  return {
                    label: polaridad,
                    hexColor: getPolarityColor(polaridad),
                  };
                })}
              />
            )}

            {plant.elementosAsociados && (
              <CustomColorTagSection
                title="Elemento Asociado"
                tags={[
                  {
                    label: plant.elementosAsociados,
                    hexColor: getElementColor(plant.elementosAsociados),
                  },
                ]}
              />
            )}
          </CardContent>
        </Grid>
      </Grid>

      <CardContent
        sx={{
          flexGrow: 1,
          px: 0,
          mt: 2,
          p: 2,
        }}
      >
        <Grid
          container
          spacing={4}
        >
          <Grid
            sx={{
              xs: 12,
              md: 4,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
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
                  {Object.entries(plant.taxon).map(([key, value]) => {
                    if (!value) {
                      return null;
                    }

                    const displayValue = Array.isArray(value)
                      ? value.join(', ')
                      : value;

                    return (
                      <TableRow key={key}>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                          }}
                        >
                          {key}
                        </TableCell>
                        <TableCell align="right">{displayValue}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid
            sx={{
              xs: 12,
              md: 8,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                borderBottom: '2px solid',
                borderColor: 'primary.main',
                pb: 1,
              }}
            >
              Recetario / Preparaciones
            </Typography>

            {plant.preparaciones.map((prep, index) => {
              const panelId = `${plant.nombreCientifico}-prep-${prep.usoTerapeutico}-${index}`;

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
                    border: '1px solid',
                    borderColor: 'divider',
                    mb: 1,
                    borderRadius: 1,
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      backgroundColor: 'action.hover',
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                      }}
                    >
                      Para: {prep.usoTerapeutico}
                    </Typography>
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
                          {prep.ingredientes.map((ing, i) => {
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
                                    mt: 0.5,
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
                                    variant: 'body2',
                                    fontWeight: 'medium',
                                  }}
                                />
                              </ListItem>
                            );
                          })}
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
                          {prep.pasos.map(([stepNumber, instruction], i) => {
                            return (
                              <ListItem
                                key={i}
                                disableGutters
                                alignItems="flex-start"
                              >
                                <Box
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: 24,
                                    height: 24,
                                    borderRadius: '50%',
                                    backgroundColor: 'primary.main',
                                    color: 'primary.contrastText',
                                    fontSize: '0.875rem',
                                    fontWeight: 'bold',
                                    mr: 2,
                                    mt: 0.5,
                                  }}
                                >
                                  {stepNumber}
                                </Box>
                                <ListItemText primary={instruction} />
                              </ListItem>
                            );
                          })}
                        </List>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                            mt: 2,
                          }}
                        >
                          Forma de aplicación: {prep.formaDeAplicacion}
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
        </Grid>
      </CardContent>

      <Button
        onClick={() => {
          return setIsEditing?.((e) => {
            return !e;
          });
        }}
      >
        Editar
      </Button>
    </>
  );
}
