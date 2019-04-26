import deepMerge from 'deepmerge';

import { fetchTemplate, fetchTemplateJson } from './fetch-template';
import { IOptions } from './fetch-options';
import { IPackageJson } from './type-package-json';

const createEslintFile = async ({ ts, eslint, prettier }: IOptions): Promise<{ '.eslintrc.js'?: string }> => {
	if (ts || !eslint) {
		return {};
	}

	if (prettier) {
		return {
			'.eslintrc.js': await fetchTemplate('eslint', '.eslintrc-prettier.js'),
		};
	}

	return {
		'.eslintrc.js': await fetchTemplate('eslint', '.eslintrc.js'),
	};
};

const createEslintignoreFile = async ({ ts, eslint }: IOptions): Promise<{ '.eslintignore'?: string }> => {
	if (ts || !eslint) {
		return {};
	}

	return {
		'.eslintignore': await fetchTemplate('eslint', '.eslintignore'),
	};
};

const updatePackageJson = async ({ ts, githooks, eslint }: IOptions): Promise<{ 'package.json'?: IPackageJson }> => {
	if (ts || !eslint) {
		return {};
	}

	let packageJson = await fetchTemplateJson('eslint', 'package.json');

	if (githooks) {
		packageJson = deepMerge(packageJson, await fetchTemplateJson('eslint', 'package-githooks.json'));
	}

	return {
		'package.json': packageJson,
	};
};

export const create = async (options: IOptions) => ({
	...(await createEslintFile(options)),
	...(await createEslintignoreFile(options)),
	...(await updatePackageJson(options)),
});
