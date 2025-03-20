/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// c_JS_module.mjs
/**************************************************************/
const C_COL_C = 'red';
const C_COL_B = '#636363';
console.log('%c c_JS_module.mjs \n--------------------', 
            'color: blue; background-color: white;');

/**************************************************************/
// c_func_1()
// Called by body onload event in index.html
/**************************************************************/
function c_func_1() {
console.log('%c c_func_1(): Called by body onload event in index.html',
            'color: ' + C_COL_C + '; background-color: ' + C_COL_B + ';');
d_func_1();
}

/**************************************************************/
// c_func_2()
// Called by ??????
/**************************************************************/
function c_func_2() {
console.log('%c c_func_2(): Called by d_func_2() in d_JS_module.mjs',
            'color: ' + C_COL_C + '; background-color: ' + C_COL_B + ';');
}

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module  
/**************************************************************/

/**************************************************************/
//   END OF APP
/**************************************************************/