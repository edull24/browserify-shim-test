require('legacy');

// I would expect to see the string 'A legacy global variable' written to
// the console after executing this statement, since it was "exported"
// in package.json.
console.log('The value of legacyGlobal is: ' + window.legacyGlobal);
