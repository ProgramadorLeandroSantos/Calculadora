var math;
var response;

function getButtonValue(number){
    math = document.getElementById('display').value += number;
};

function clearData(){
    document.getElementById('display').value ='';
    math = undefined;                                                                             
};

function result(){
   if(math != undefined){
        try {
            response = eval(math);
            document.getElementById('display').value ='';
            document.getElementById('display').value += response;
        } catch (error) {
            document.getElementById('display').value = '';
        };
   };
};