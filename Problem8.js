var securityQuestions = [
    {
        question: "What was your first pet’s name?",
        expectedAnswer: "FlufferNutter"
    },
    {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
    },
    {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
    }
   ]
   function chksecurityQuestions(securityQuestions,ques,ans) {
        for(var i = 0 ; i < securityQuestions.length ; i++){
            if(securityQuestions[i].question === ques){
                if(securityQuestions[i].expectedAnswer === ans){
                    return true;
                }else{
                    return false;
                }
            }
        }
        return false;
   }
   //Test case1:
   var ques = "What was your first pet’s name?";
   var ans  =  "FlufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // true
   //Test case2:
   var ques = "What was your first pet’s name?";
   var ans  =  "DufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // flase