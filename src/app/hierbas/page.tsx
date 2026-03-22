import SpecimenEditSelection from '#@/lib/components/specimenEditSelection';
import EspecimenModel from '#@/lib/models/especimenModel';
import MasonryHolder from './MasonryHolder';

export default async function Page () {
  const plants = await EspecimenModel.getPlantasMedicinales();

  return (
    <MasonryHolder>
      {plants.map(
        (
          plant
        ) => {
          return (
            <SpecimenEditSelection plantData={ plant } key={ plant.nombreCientifico } />
          );
        }
      )}
    </MasonryHolder>
  );
}
