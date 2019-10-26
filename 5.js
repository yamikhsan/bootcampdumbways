console.log("==========================================================");
console.log("SOAL 5");
console.log("----------------------------------------------------------");

function serialNumber(){
    var res = "";
    var chart = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var leng = 19;
    for ( var i = 1; i <= leng; i++ ) {
        if(i % 5 == 0){
            res +="-";
        } else {
            res += chart.charAt(Math.floor(Math.random() * chart.length));
        }
    }
    return res;
}

function generate(parm){
    for(var i=0; i<parm; i++){
        console.log(serialNumber());
    }
}

generate(3)