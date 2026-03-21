// scripts/enforce-strict-css.js
const fs = require( 'fs' );
const path = require( 'path' );

// Target the Next.js global type declarations
const typesPath = path.join(
  process.cwd(),
  'node_modules',
  'next',
  'types',
  'global.d.ts',
);

if ( fs.existsSync( typesPath ) ) {
  const content = fs.readFileSync(
    typesPath, 'utf8' 
  );

  // Regex to match ONLY the CSS/SASS wildcards, regardless of what surrounds them
  const cssModulesRegex
    = /declare module '\*\.module\.(css|sass|scss)'\s*{[\s\S]*?}/g;
  const cssSideEffectsRegex = /declare module '\*\.(css|sass|scss)'\s*{}/g;

  // Strip the wildcards from the file content
  const newContent = content
    .replace(
      cssModulesRegex, '' 
    )
    .replace(
      cssSideEffectsRegex, '' 
    );

  // Only write to the file if changes were actually made
  if ( content !== newContent ) {
    fs.writeFileSync(
      typesPath, newContent, 'utf8' 
    );
    console.log( '✅ Next.js CSS wildcards removed. Strict TCM typing enforced.', );
  }
} else {
  console.warn( '⚠️ Could not find Next.js global.d.ts to enforce strict CSS.' );
}
