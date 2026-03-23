import SpecimenEditSelection from '#@/lib/components/specimenEditSelection';
import EspecimenModel from '#@/lib/models/especimenModel';
import { Suspense } from 'react';
import MasonryHolder from './MasonryHolder';
import { Loader } from '#@/lib/components/Loader/main-loader';

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

export default async function Page () {


  return (
    <MasonryHolder>
      <Suspense fallback={<Loader />}>
        <ServerSideRequestElement />
      </Suspense>
    </MasonryHolder>
  );
}
