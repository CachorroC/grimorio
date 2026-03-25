'use client';
import SpecimenEditSelection from '#@/lib/components/specimenEditSelection';
import MasonryHolder from './MasonryHolder';
import { useEspecimen } from '../context/EspecimenContext';
import { InputSearchBar } from '#@/lib/components/InputSearchBar';

/*
async function ServerSideRequestElement () {
  const plants = await EspecimenModel.getPlantasMedicinales();

  return plants.map(
    (
      plant
    ) => {
      return (
        <SpecimenEditSelection plantData={ plant } key={ plant.nombreCientifico } />
      );
    }
  );
}
 */
export default function Page () {
  const {
    state
  } = useEspecimen();

  return (
    <MasonryHolder>
      <InputSearchBar />
      {/* <ServerSideRequestElement /> */ }
      { state.filteredData.map(
        (
          especimen
        ) => {
          return (
            <SpecimenEditSelection plantData={ especimen } key={ especimen.nombreCientifico }/>
          );
        }
      )}
    </MasonryHolder>
  );
}
