console.log("==========================================================");
console.log("SOAL 3");
console.log("----------------------------------------------------------");

function printImage(parm){
    if(parm % 2 == 1){
        console.log("--- panjang ---");
        var star = " * ";
        var equal = " * "
        for (let i = 0; i < parm-1; i++) {
            star += " * ";
            if(i == parm-2){
                equal += " * ";
            } else {
                equal += " = ";
            }
        }

        for (let j = 0; j < parm; j++) {
            if(j % 2 == 0){
                console.log(star);
            } else {
                console.log(equal);
            }           
        }
        
    } 
}

printImage(5);