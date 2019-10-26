console.log("==========================================================");
console.log("SOAL 4");
console.log("----------------------------------------------------------");

var DumbWaysAsik = [0.5, 20000, 20000];
var DumbWaysMantap = [0.2, 50000, 40000];

function countVoucher(voucher, totCost){
    var disVoucher = voucher[0];
    var minCost = voucher[1];
    var maxDiscount = voucher[2];

    if(totCost >= minCost){
        var discount = totCost * disVoucher;
        if(discount > maxDiscount){
            discount = maxDiscount;
        }
        var cost = totCost - discount;
        
        console.log(`Uang yang harus dibayar : ${cost}`);
        console.log(`Diskon : ${discount}`);
        console.log(`Kembalian  : ${discount}`);
    }
}

countVoucher(DumbWaysAsik, 30000);