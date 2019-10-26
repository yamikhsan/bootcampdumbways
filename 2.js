console.log("==========================================================");
console.log("SOAL 2");
console.log("----------------------------------------------------------");

var changes = [50000, 20000, 10000, 5000];

function countChange(cost, money){
    var change = money - cost;
    if(cost > 200000){
        change += cost * 0.1;
    }
    myChange(change);
}

function myChange(change){
    var money = change;
    changes.forEach( e => {
        if(e <= money){
            var rem = money % e; 
            var res = (money - rem) / e;
            console.log(`${res} x ${e}`)
            money = rem;
        }
    });

    if( money > 0){
        console.log(`${money} Disumbangkan karena tidak ada pecahan dibawah 5000`);
    }
}

countChange(220000, 250000);

