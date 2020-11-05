var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 
 for(var i = 0 ; i < arr.length ; i++){
    var obj = {};
    for(var j = 0 ; j < arr[i].length ; j++){
    obj[arr[i][j][0]] = arr[i][j][1];
    }
    tranformEmployeeList.push(obj);
 }
 
 return tranformEmployeeList;
}

console.log(transformEmployeeData(arr));