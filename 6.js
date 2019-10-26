console.log("==========================================================");
console.log("SOAL 6");
console.log("----------------------------------------------------------");

var data = [
    ['g','h','i','j'],
    ['a','c','b','e','d'],
    ['g','e','f']
]

function sortArray(arr){
    var res = [];
    while (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            var status = true;
            for (let j = 0; j < arr.length; j++) {
                if(arr[i].length > arr[j].length){
                    status = false;
                    break;
                }          
            } 
            if(status){
                res.push(arr[i].sort());
                arr.splice(i, 1);
            }    
        }
    }
    console.log(res);
    
}

sortArray(data)

console.log("==========================================================");