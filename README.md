This repo is in response to a [StackOverflow question](https://stackoverflow.com/questions/29680352/browserify-shim-not-exporting-implicit-globals-when-they-are-var-scoped/29682153#29682153) about browserify and browserify-shim.

The file legacy.js represents legacy code that was written without the use of closures. The variable defined in legacy.js would be "global" to the legacy application.

This file is attempted to be shimmed in package.json by declaring an export value. However, the variable is not exported and is not available in the global scope.
