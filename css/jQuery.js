$(document).ready( () => {
    var errorCounter = [];
    $('button').on('click', () => {
        var name = $('#name').val();
        var age = $('#age').val();
        var nickname = $('#nickname').val();
        
        //name cannot empty 
        var isName = name != "";
       if(isName){
         borderGreen('name');
         errorCounter[0] = 0;
       }else{
        borderRed('name');
        errorCounter[0] = 1;
       }
       //parseInt is for convert 
       //Age must be number and integer
       var isAgeValue = age > 0 && !isNaN(age) && age == parseInt(age);
      if(isAgeValue){
        borderGreen('age');
        errorCounter[1] = 0; 
      }else{
        borderRed ('age');
        errorCounter[1] = 2;
      }
      //Nickname must aleat 1 upper case and 9 characters 

      var atLeast9Chars = nickname.length >= 9;
      for(let i = 0; i < nickname.length; i++){
        var chars = nickname.charAt(i);
        var atLeast1Uppercase = false;
        var isUppercase = chars.toUpperCase() == chars;
        if(isNaN(chars)){
            var isUppercase = chars.toUpperCase() == chars;
            atLeast1Uppercase = atLeast1Uppercase || isUppercase;
        }
      }
      var isNickname = atLeast1Uppercase && atLeast9Chars && nickname != "";
      if(isNickname){
          borderGreen('nickname');
          errorCounter[2] = 0;
      }else{
          borderRed('nickname');
          errorCounter[2] = 3;
      }
      //all information correct 
      var isAll = isName && isAgeValue && isNickname;
      if(isAll){
          showSuccess(errorCounter);
      }else{
          showError(errorCounter);
      }
    });
});
  // condition 
var borderGreen = (elementId) => {
    $('#' + elementId).addClass('border-success').removeClass('border-danger');
}
var borderRed = (elementId) => {
    $('#' + elementId).addClass('border-danger').removeClass('border-success');
}

var showSuccess = () => {
    var success = "";
    success += `
        <div class= "alert alert-success">
           <strong> Success </strong>
    `;
    $('#message').html(success);
}
  //Message when error
  var errorMessage = ["Name is empty!!! ",
                     " Age is incorrect!!! ",
                     " Nickname at least 1 uppercase and 9 chars!!!"];

var showError = (errors) => {
    // var error = "";
    // error += `
    // <div class= "alert alert-danger">
    //    <strong> Error </strong>
    //  `;
    var errorSMS = "";
    if(errors[0] == 1){
        errorSMS += errorMessage[0] + "<br>";
       
    }else{
        errorSMS += "";
    }

    if(errors[1] == 2){
        errorSMS += errorMessage[1] + "</br>";
       
    }else{
        errorSMS += "";
    }

    if(errors[2] == 3){
        errorSMS += errorMessage[2] + "</br>";
     
    }else{
        errorSMS += "";
    }
    $('#message').html(
        `
        <div class="alert alert-danger">
            <strong> ${errorSMS}</strong>
        </div>
        `
    );
}