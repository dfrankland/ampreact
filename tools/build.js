import run from './run';
import clean from './clean';
import copy from './copy';
import bundle from './bundle';

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
async function build() {
  await run(clean);
  await run(copy);
  await run(bundle);
}

export default build;
