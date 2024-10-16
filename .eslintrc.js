module.exports = {
    parser: "@babel/eslint-parser",
    extends: ["airbnb", "airbnb/hooks", "prettier", "prettier/react"],
    globals: {
        page: true,
        REACT_APP_ENV: true,
    },
    parserOptions: {
        sourceType: "module",
        allowImportExportEverywhere: false,
        ecmaFeatures: {
            globalReturn: false,
        },
    },
    settings: {
        "import/resolver": {
            node: {
                moduleDirectory: ["node_modules", "src/"],
            },
        },
    },
    rules: {
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/no-danger": 0,
        "no-restricted-syntax": 0,
        "class-methods-use-this": 0,
        "no-prototype-builtins": 0,
        "no-restricted-globals": 0,
        "no-case-declarations": 0,
        "react/jsx-props-no-spreading": 0,
        "prefer-promise-reject-errors": 0,
        "no-plusplus": 0,
        "react/forbid-prop-types": 0,
        "react/no-array-index-key": 0,
        "react-hooks/exhaustive-deps": 0,
        "import/no-named-as-default": 0,
        "no-bitwise": 0,
        "no-template-curly-in-string": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "import/prefer-default-export": 0,
        "no-continue": 0,
        "no-fallthrough": 0,
        "react/prefer-stateless-function": 0,
        "react/destructuring-assignment": 0,
    },
};
