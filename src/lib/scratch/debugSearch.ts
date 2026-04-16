import { resolveSearchTerms, malesFisicosGrupos } from '../json/mappings';

console.log(
  'Terms for "inflamacion":'
);
const terms = resolveSearchTerms(
  'inflamacion', malesFisicosGrupos
);
console.log(
  terms
);

console.log(
  '\nDoes any group name contain "inflama"?'
);

for ( const groupName of Object.keys(
  malesFisicosGrupos
) ) {
  if ( groupName.toLowerCase().includes(
    'inflama'
  ) ) {
    console.log(
      'Match:', groupName
    );
  }
}
