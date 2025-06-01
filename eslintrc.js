module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
		extraFileExtensions: ['.html'],
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:@angular-eslint/recommended', // Reglas recomendadas para Angular
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'linebreak-style': ['error', 'unix'],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'interface',
				format: ['PascalCase'],
			},
		],
		'@typescript-eslint/explicit-function-return-type': 'warn',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'error',
		'@angular-eslint/directive-selector': [
			'error',
			{ type: 'attribute', prefix: 'app', style: 'camelCase' },
		],
		'@angular-eslint/component-selector': [
			'error',
			{ type: 'element', prefix: 'app', style: 'kebab-case' },
		],
	},
}