import { Loader } from '#@/lib/components/Loader/loader';
import { Suspense } from 'react';
import { HierbasContent } from './HierbasContent';

export default function Page() {
  return (
    <Suspense
      fallback={
        <div>
          Cargando plantas...
          <Loader />
        </div>
      }
    >
      <HierbasContent />
    </Suspense>
  );
}
