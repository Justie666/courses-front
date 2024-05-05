module.exports = {
	extends: ['next/core-web-vitals'],
	plugins: ['simple-import-sort', 'unused-imports'],
	rules: {
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'unused-imports/no-unused-imports': 'error',
		// 'unused-imports/no-unused-vars': 'error',
		'no-shadow': 'warn'
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest'
	}
}
