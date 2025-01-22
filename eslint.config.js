import js from "@eslint/js";

export default [
	js.config.recommended,

	{
		rules: {
			"no-ununused-vars": "warn",
			"no-undef": "warn"
		}
	}
];
