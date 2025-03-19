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
// a_func_2()
// Called by b_func_2() in b_JS_file.js
/**************************************************************/
function a_func_2() {
  console.log('%c a_func_2(): Called by b_func_2() in b_JS_file.js',
              'color: ' + A_COL_C + '; background-color: ' + A_COL_B + ';');
}
         
/**************************************************************/
//   END OF APP
/**************************************************************/