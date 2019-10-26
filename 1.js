console.log("==========================================================");
console.log("SOAL 1");
console.log("----------------------------------------------------------");

var dataKey = ['dumb','ways','the','best'];
var word = 'dumbways';

function check(dataKey, value){
    dataKey.forEach(e => {
        var status;
        var res = value.search(e);
        if(res != -1){
            status = true;
        } else {
            status = false;
        }
        console.log(`${e} => ${status}`);
    });
}

check(dataKey, word);
