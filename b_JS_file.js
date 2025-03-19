/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// b_JS_file.js
/**************************************************************/
const B_COL_C = 'white';
const B_COL_B = '#306844';
console.log('%c b_JS_file.js \n--------------------', 
            'color: blue; background-color: white;');

/**************************************************************/
// b_func_1()
// Called by a_func_1() in a_JS_file.js
/**************************************************************/
function b_func_1() {
console.log('%c b_func_1(): Called by a_func_1() in a_JS_file.js',
            'color: ' + B_COL_C + '; background-color: ' + B_COL_B + ';');
}

/**************************************************************/
// b_func_2()
// Called by body onload event in index.html
/**************************************************************/
function b_func_2() {
console.log('%c b_func_2(): Called by body onload event in index.html',
            'color: ' + B_COL_C + '; background-color: ' + B_COL_B + ';');
a_func_2();
}
 
/**************************************************************/
//   END OF APP
/**************************************************************/