// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    var pocket = new Array();
    var pennie = 1;
    var nickels = 5;
    var dimes = 10;
    var quarters = 25;
    var halfDoll = 50;

    var ost = 0;

    if (currency <= 0) {
        return {};
    }
    if(currency > 10000) {
        return  {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    if(currency > halfDoll){
        ost = Math.floor(currency / halfDoll);
        pocket.H = ost;
        currency = currency - (ost*halfDoll);
}
    if (currency > quarters) {
        ost = Math.floor(currency / quarters);
        pocket.Q = ost;
        currency = currency - (ost*quarters);

    }
    if (currency > dimes) {
        ost = Math.floor(currency / dimes);
        pocket.D = ost;
        currency = currency - (ost*dimes);
    }
    if (currency > nickels) {
        ost = Math.floor(currency / nickels);
        pocket.N = ost;
        currency = currency - (ost*nickels);
    }
    if (currency > pennie) {
        ost = Math.floor(currency / pennie);
        pocket.P = ost;
        currency = currency - (ost*pennie);
    }
    return pocket;
}
