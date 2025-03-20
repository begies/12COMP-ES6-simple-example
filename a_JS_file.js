/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// a_JS_file.js
/**************************************************************/
const A_COL_C = 'red';
const A_COL_B = '#306844';
console.log('%c a_JS_file.js \n--------------------', 
            'color: blue; background-color: white;');

/**************************************************************/
// a_func_1()
// Called by body onload event in index.html
/**************************************************************/
function a_func_1() {
  console.log('%c a_func_1(): Called by body onload event in index.html',
        'color: ' + A_COL_C + '; background-color: ' + A_COL_B + ';');
  b_func_1();
}
         
/**************************************************************/
//   END OF APP
/**************************************************************/