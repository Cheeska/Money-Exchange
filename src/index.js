// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    var pocket = new Array();
    var pennie = 1;
    var nickels = 5;
    var dimes = 10;
    var quarters = 25;
    var halfDoll = 50;

    if (currency <= 0) {
        return {};
    }
    if(currency > 10000) {
        return  {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    return pocket;


}
