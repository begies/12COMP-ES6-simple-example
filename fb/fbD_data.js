/**************************************************************/
// fbD_data.js
// Written by mr Bob, Term 4 2022
// DataBase & Session Storage variables for game
//
// All variables & function begin with fbD_  all const with FBD_
// Diagnostic code lines have a comment appended to them //DIAG
//
// v01 initial code
// v02 Convert to modular API
/**************************************************************/
const FBD_COL_C = 'white';
const FBD_COL_B = '#CD7F32';
console.log('%c fbD_data.js \n--------------------', 
            'color: blue; background-color: white;');

/*dbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdb*/
// database variables

// Firebase paths
const DETAILS           = 'userDetails';
const ADMIN             = 'admin';
const BB                = 'scores/bbScore';
const CA                = 'scores/caScore';
const DB                = 'scores/dbScore';
const SI                = 'scores/siScore';
const GTN               = 'scores/gtnScore';
const TG                = 'scores/tgScore';

// Firebase I/O results
var fbD_loginStatus     = 'n/a';
var fbD_readRecStatus   = 'n/a';
var fbD_readAllStatus   = 'n/a';
var fbD_writeRecStatus  = 'n/a';
var fbD_readOnStatus    = 'n/a';
var fbD_updateRecStatus = 'n/a';
var fbD_deleteRecStatus = 'n/a';

// User Details
var fbD_userDetails = {
  uid:              'n/a',
  email:            'n/a',
  name:             'n/a',
  photoURL:         'n/a',

  gameName:         'n/a',
  gender:           'n/a',
  age:              'n/a',
  phone:            'n/a',
  country:          'n/a',
  addrNum:          'n/a',
  addrSt:           'n/a',
  addrSuburb:       'n/a',
  addrCity:         'n/a',
  addrPostCode:     'n/a'
};

/*dbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdbdb*/

/**************************************************************/
// Exporting variables & constants
/**************************************************************/
export {
  DETAILS, ADMIN, BB, CA, DB, SI, GTN, TG,
  fbD_loginStatus,  fbD_readRecStatus,   fbD_readAllStatus,   fbD_writeRecStatus,
  fbD_readOnStatus, fbD_updateRecStatus, fbD_deleteRecStatus, fbD_userDetails
};

/**************************************************************/
// END OF CODE
/**************************************************************/