/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// d_JS_module.mjs
/**************************************************************/
const D_COL_C = 'white';
const D_COL_B = '#636363';
console.log('%c d_JS_module.mjs \n--------------------', 
            'color: blue; background-color: white;');

/**************************************************************/
// d_func_1()
// Called by c_func_1() in c_JS_module.mjs
/**************************************************************/
function d_func_1() {
console.log('%c d_func_1(): Called by c_func_1() in c_JS_module.mjs',
            'color: ' + D_COL_C + '; background-color: ' + D_COL_B + ';');
}

/**************************************************************/
// d_func_2()
// Called by body onload event in index.html
/**************************************************************/
function d_func_2() {
console.log('%c d_func_2(): Called by body onload event in index.html',
            'color: ' + D_COL_C + '; background-color: ' + D_COL_B + ';');
c_func_2();
}
 
/**************************************************************/
//   END OF APP
/**************************************************************/