import SpecimenEditSelection from '#@/lib/components/specimenEditSelection';
import EspecimenModel from '#@/lib/models/especimenModel';
import { notFound } from 'next/navigation';

export default async function Page(
  {
    params,
  }: {
    params: Promise<{
      nombreCientifico: string;
    }>;
  }
) {
  const resolvedParams = await params;
  console.log(
    resolvedParams.nombreCientifico
  );


  // Decode the URL parameter to convert %20 back into normal spaces
  const decodedNombreCientifico = decodeURIComponent(
    resolvedParams.nombreCientifico,
  );
  console.log(
    decodedNombreCientifico 
  );

  const plant = await EspecimenModel.getPlantaMedicinalByNombreCientifico(
    {
      nombreCientifico: decodedNombreCientifico,
    }
  );

  if (
    plant.success === false
    || plant.data === null
    || plant.data === undefined
  ) {
    return notFound();
  }

  return (
    <SpecimenEditSelection
      plantData={plant.data}
      isStandalone={true}
    />
  );
}
