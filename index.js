var legacy = require('legacy');

// I would expect to see the string 'A legacy global variable' written to
// the console after executing this statement, since it was "exported"
// in package.json.
console.log('The value of legacyGlobal is: ' + window.legacyGlobal);

// So technically, the export worked, since we can access it through our local
// "legacy" variable here. However, I am expecting it to also be automatically
// set on the global scope, as I have done manually below. This would allow
// other legacy code to continue to work if it expects/needs the exported
// value to remain in the global scope.

window.legacyGlobal = legacy;
console.log('The value of legacyGlobal is: ' + window.legacyGlobal);
