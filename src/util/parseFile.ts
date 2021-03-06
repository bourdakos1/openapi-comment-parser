import fs from 'fs';
import path from 'path';

import jsYaml from 'js-yaml';

import commentsToOpenApi from './commentsToOpenApi';
import { OpenApiObject } from '../exported';

function parseFile(file: string): OpenApiObject[] {
	const fileContent = fs.readFileSync(file, { encoding: 'utf8' });
	const ext = path.extname(file);

	if (ext === '.yaml' || ext === '.yml') {
		return [jsYaml.safeLoad(fileContent)];
	} else {
		// (ext === '.js' || ext === '.ts');
		return commentsToOpenApi(fileContent);
	}
}

export default parseFile;
