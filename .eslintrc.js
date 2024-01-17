module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        },
        {
            "files": [
                "client/**/*.js",  // Specify files or patterns for the 'client' directory
                "client/**/*.jsx",  // Specify files or patterns for the 'client' directory
            ],
            "env": {
                "node": false,  // Disable Node.js environment for client files
                "browser": true,  // Enable browser environment for client files
            },
            "parserOptions": {
                "ecmaVersion": "latest",  // Adjust ECMAScript version as needed
                "sourceType": "module"
            },
            "plugins": [
                "react"
            ],
            "rules": {
                "react/prop-types": "off",
                "react/react-in-jsx-scope": "off"
            }
        },
        {
            "files": [
                "server/**/*.js",  // Specify files or patterns for the 'server' directory
            ],
            "env": {
                "node": true,  // Enable Node.js environment for server files
                "browser": false,  // Disable browser environment for server files
            },
            "parserOptions": {
                "ecmaVersion": "2021",  // Adjust ECMAScript version as needed
                "sourceType": "module"
            },
            "rules": {
                // Add server-specific rules here
            }
        }

    ]

}
