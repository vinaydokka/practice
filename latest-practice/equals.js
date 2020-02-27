/* function test_Equal(num) {
    if (num == 15) {
        return "Equal";
    }
    return "Not equal";
}
console.log(test_Equal('15'));
console.log(test_Equal(15));
console.log(test_Equal(25)); */

//with comaprission type
/* 
function test_Strict(num) {
    if (num === 15) {
        return "Equal";
    }
    return "Not equal";
}
console.log(test_Strict(15));
console.log(test_Strict('15'));
console.log(test_Strict(25)); */

function test_GreaterOrEqual(num) {
    if (num >= 50) return "50 or Over";

    if (num >= 20) return "20 or Over";

    return "Less than 20";
}
console.log(test_GreaterOrEqual(70));
console.log(test_GreaterOrEqual(10));
console.log(test_GreaterOrEqual(45));