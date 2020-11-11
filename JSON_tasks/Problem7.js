
  var expected = {foo: 5, bar: 6};
  var actual = {bar: 6,foo: 5 }
  
  function checkObject(obj){
      if(obj != null && typeof obj === "object") {
          return true;
      }else {
          return false;
      }
  }
  
  function checkEqual(actual, expected){
    if(actual === expected){
      return true; 
    } 
    else if(checkObject(actual) && checkObject(expected)){
      if(Object.keys(actual).length === Object.keys(expected).length){
          for(var key in actual){
            if(!checkEqual(actual[key],expected[key])){
              return false;
            }
          }
      }
      else
      {
          return false;
      }
      return true;
  }
  }
  function assertObjectsEqual(actual, expected, testName){
      if(checkEqual(actual,expected)){
        console.log("PASSED");
        return;
      }
      else{
        console.log("FAILED [" + testName +"] Expected "+ JSON.stringify(actual) + ",but got " + JSON.stringify(expected));
        return;
      }
  }
  
  assertObjectsEqual(actual, expected, 'detects that two objects are equal');
  
  