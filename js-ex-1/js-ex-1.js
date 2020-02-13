let loadChairs;
let loadBenches;
let loadTables;
isloaderror = false;
//*********************productload function Start************************/
function productLoad(chair, bench, table) {
    loadChairs = chair;
    loadBenches = bench;
    loadTables = table;
    isloaderror = true;
    if (isNaN(loadChairs)) {
        console.log('error to load');
        return;
    }
    if (isNaN(loadBenches)) {
        console.log('error to load');
        return;
    }
    if (isNaN(loadTables)) {
        console.log('error to load');
        return;
    }
}
//***********************End productload function***************************/

//***********************Start productpurchase function *********************/

function productpurchase(chair, bench, table) {

    Totalproductload = loadChairs + loadBenches + loadTables;
    Totalproductpurchase = chair + bench + table;
    //console.log(Totalproductload);
    //console.log(Totalproductpurchase);
    if (isloaderror) {

        if (isNaN(chair)) {
            console.log('error to purchase');
            return;
        }
        if (isNaN(bench)) {
            console.log('error to purchase');
            return;
        }
        if (isNaN(table)) {
            console.log('error to purchase');
            return;
        }

        if (chair >= loadChairs) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Chairs are not available');
            console.log('error message');
            console.log(`here Stock:${loadChairs}`);
            console.log(`Required Qty:${chair}`);
            return;
        } else {
            console.log('Chairs are available');
            console.log(`here Stock:${loadChairs}`);
            console.log(`Required Qty:${chair}`);
            console.log('');
        }

        if (bench >= loadBenches) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Benches are not available');
            console.log('error message');
            console.log(`here Stock:${loadBenches}`);
            console.log(`Required Qty:${bench}`);
            return;
        } else {
            console.log('Benches are available');
            console.log(`here Stock:${loadBenches}`);
            console.log(`Required Qty:${bench}`);
            console.log('');
        }
        if (table >= loadTables) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Tables  are not available');
            console.log('error message');
            console.log(`here Stock:${loadTables}`);
            console.log(`Required Qty:${table}`);
            return;
        } else {
            console.log('Tables are available');
            console.log(`here Stock:${loadTables}`);
            console.log(`Required Qty:${table}`);
            console.log('');

        }
    } else {
        console.log('stock is not loaded');
    }
    display(chair, bench, table);

}
//***********************Start Display  function *********************/
function display(itemChairs, itemBenches, itemTables) {
    let totalChairs = loadChairs - itemChairs;
    let totalBenches = loadBenches - itemBenches;
    let totalTables = loadTables - itemTables;

    console.log('purchased');
    console.log('.....................');
    console.log(`Chairs:${itemChairs}`);
    console.log(`Benches:${itemBenches}`);
    console.log(`Tables:${itemTables}`);
    console.log(`Total Purchased Count is: ${itemChairs + itemBenches +itemTables}`);
    console.log('.....................');
    console.log('Remaining');
    console.log(`Available Chairs:${totalChairs}`);
    console.log(`Available Benches :${totalBenches}`);
    console.log(`Available Tables:${totalTables}`);
    console.log(`Total Remaining Count is: ${totalChairs + totalBenches + totalTables}`);
    console.log(' ....................');

}

//*********************End productpurchase function*************************/
//*********************Start Display  function*****************************/
productLoad(50, 150, 120);
productpurchase(40, 30, 40);