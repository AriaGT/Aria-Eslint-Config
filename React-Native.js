/*
  DEPENDENCIES:
  - eslint-plugin-react@7.33.2
  - @typescript-eslint/parser@^6.0.0
  - @typescript-eslint/eslint-plugin@6.7.3
  You can try more modern versions of the dependencies, these worked for me
*/

/* .eslintrc.js */

module.exports = {
  root: true,
	extends: ['plugin:react/jsx-runtime'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
  overrides: [
    {
			files: ['*.ts', '*.tsx'],
      rules: {
        'key-spacing': ['error', {beforeColon: false, afterColon: true}],
				'react/jsx-curly-spacing': ['error', { when: 'always' }],
				'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
				'@typescript-eslint/no-unused-vars': 'warn',
				'jsx-quotes': ['error', 'prefer-single'],
      },
    },
  ],
};
