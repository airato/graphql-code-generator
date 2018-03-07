#!/usr/bin/env node

import * as fs from 'fs';
import { initCLI, executeWithOptions, cliError } from './cli';
import { FileOutput } from '../../graphql-codegen-compiler/dist';
import { debugLog } from '../../graphql-codegen-core/dist';

const options = initCLI(process.argv);

debugLog(`Started CLI with options: `, options);

executeWithOptions(options)
  .then((generationResult: FileOutput[]) => {
    debugLog(`Generation result contains total of ${generationResult.length} files...`);

    if (process.env.VERBOSE !== undefined) {
      console.log(`Generation result is: `, generationResult);
    }

    generationResult.forEach((result: FileOutput) => {
      fs.writeFileSync(result.filename, result.content);
      console.log(`Generated file written to ${result.filename}`);
    });
  })
  .catch(cliError);
