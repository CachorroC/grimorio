export default async function Page( {
  params,
}: {
  params: Promise<{ especimen: string }>;
} ) {
  const {
    numero, idProceso 
  } = await params;

  if ( idProceso === 'idProceso' ) {
    return notFound();
  }

  const carpetaNumero = Number( numero );

  const carpeta = await getCarpetabyNumero( carpetaNumero );

  return (
    <>
      <Suspense fallback={<ModalLoader />}>
        <div
          className={styles.segmentRow}
          style={{
            gridColumn: 'span 4',
          }}
        >
          <NombreComponent
            nombre={carpeta.nombre}
            carpetaNumero={carpeta.numero}
          />
          {carpeta.juzgado
            ? (
                <JuzgadoComponent juzgado={carpeta.juzgado} />
              )
            : (
                <JuzgadoErrorComponent />
              )}
          <CopyButton
            horizontal={true}
            copyTxt={carpeta.demanda.radicado ?? 'sin radicado'}
            name={'radicado'}
          />
          <CopyButton
            horizontal={true}
            copyTxt={carpeta.llaveProceso}
            name={'expediente'}
          />
        </div>

        <Suspense
          fallback={
            <>
              <ActuacionLoadingComponent />
              <ActuacionLoadingComponent />
              <ActuacionLoadingComponent />
              <ActuacionLoadingComponent />
              <ActuacionLoadingComponent />
              <ActuacionLoadingComponent />
            </>
          }
        >
          <ActuacionesListModalget idProceso={idProceso} />
        </Suspense>
      </Suspense>
    </>
  );
}
