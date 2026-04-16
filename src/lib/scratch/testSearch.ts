import { resolveSearchTerms, malesFisicosGrupos } from '../json/mappings';

function test() {
  console.log('--- Selective Broadening Test ---');

  // 1. Exact match variation (Asma) -> Should broaden to show Bronquitis
  const asmaTerms = resolveSearchTerms('Asma', malesFisicosGrupos);
  console.log('Query: "Asma" -> Terms found:', asmaTerms.length);
  if (asmaTerms.includes('Bronquitis')) {
    console.log('✅ Success: "Asma" broadened to include the whole respiratory category.');
  } else {
    console.log('❌ Failure: "Asma" did not broaden.');
  }

  // 2. Partial match variation (inflamacion) -> Should NOT broaden to show Asma
  const inflamTerm = resolveSearchTerms('inflamacion', malesFisicosGrupos);
  console.log('\nQuery: "inflamacion" -> Terms found (broadened):', inflamTerm.length);
  const containsAsma = inflamTerm.includes('Asma');
  const containsInflamacionVar = inflamTerm.includes('Inflamación'); // This is a variation now
  
  if (containsAsma) {
    console.log('❌ Failure: "inflamacion" incorrectly broadened to include "Asma".');
  } else if (inflamTerm.includes('Inflamación')) {
    console.log('✅ Success: "inflamacion" broadened to "Procesos Inflamatorios" (exact match to new variation).');
  } else {
    console.log('✅ Success: "inflamacion" did not broaden to Respiratory.');
  }

  // 3. Multi-group broadener (Dolor) -> Should include Cefalea AND Articular
  const dolorTerms = resolveSearchTerms('Dolor', malesFisicosGrupos);
  const foundCefalea = dolorTerms.includes('Cefáleas');
  const foundArticular = dolorTerms.includes('Artritis');
  const foundDigestive = dolorTerms.includes('Cólicos estomacales');
  
  console.log('\nQuery: "Dolor" -> Terms found:', dolorTerms.length);
  if (foundCefalea && foundArticular && foundDigestive) {
    console.log('✅ Success: "Dolor" broadened to multiple relevant pain categories.');
  } else {
    console.log('❌ Failure: "Dolor" missed some categories.', { foundCefalea, foundArticular, foundDigestive });
  }

  // 4. Substring of group name (Respiratorias) -> Should broaden
  const respTerms = resolveSearchTerms('Respiratorias', malesFisicosGrupos);
  if (respTerms.includes('Asma')) {
    console.log('\n✅ Success: "Respiratorias" broadened because it is part of the category name.');
  } else {
    console.log('\n❌ Failure: "Respiratorias" did not broaden.');
  }
}

test();
