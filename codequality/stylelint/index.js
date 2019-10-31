module.exports = {
	plugins: ['@namics/stylelint-bem'],
	rules: {
		'plugin/stylelint-bem-namics': true,
		'at-rule-no-vendor-prefix': true,
		'block-closing-brace-space-before': ['always-single-line', { severity: 'warning' }],
		'block-opening-brace-space-after': ['always-single-line', { severity: 'warning' }],
		'block-opening-brace-space-before': ['always', { severity: 'warning' }],
		'color-hex-case': ['lower', { severity: 'warning' }],
		'color-named': 'never',
		'color-no-invalid-hex': [true, { severity: 'warning' }],
		'comment-word-blacklist': ['todo', { severity: 'warning' }],
		'declaration-block-no-duplicate-properties': [true, { severity: 'warning' }],
		'declaration-block-no-shorthand-property-overrides': [true, { severity: 'warning' }],
		'declaration-block-semicolon-newline-after': ['always', { severity: 'warning' }],
		'declaration-block-trailing-semicolon': ['always', { severity: 'warning' }],
		'declaration-colon-space-after': ['always-single-line', { severity: 'warning' }],
		'declaration-no-important': true,
		'function-linear-gradient-no-nonstandard-direction': [true, { severity: 'warning' }],
		indentation: ['tab', { severity: 'warning' }],
		'length-zero-no-unit': true,
		'max-empty-lines': [1, { severity: 'warning' }],
		'max-nesting-depth': [2, { severity: 'warning' }],
		'no-missing-end-of-source-newline': [true, { severity: 'warning' }],
		'no-unknown-animations': [true, { severity: 'warning' }],
		'number-leading-zero': 'always',
		'property-no-vendor-prefix': [true, { severity: 'warning' }],
		'selector-max-id': 0,
		'string-quotes': 'single',
		'value-no-vendor-prefix': [true, { severity: 'warning' }],
	},
};
