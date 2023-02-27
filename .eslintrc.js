module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:testing-library/react"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "testing-library"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "testing-library/await-async-query": "error",
		"testing-library/no-await-sync-query": "error",
		"testing-library/no-debugging-utils": "warn",
		"testing-library/no-dom-import": "off"
    }
};
