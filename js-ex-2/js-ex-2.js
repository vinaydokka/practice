let loadChairs;
let loadBenches;
let loadTables;
let isloaderror = false;



function isvalidObj(stockObject) {
    let isValid = true;

    if (typeof stockObject != 'object') {
        console.log('Enter Objects only');
        isValid = false;
    }

    if (isValid && typeof stockObject.name != 'string') {
        console.log('enter name as string only');
        isValid = false;
    }

    //console.log(stockObject.price);

    if (isValid && typeof stockObject.price != 'number') {
        console.log('enter numbers only');
        isValid = false;
    }

    if (isValid && typeof stockObject.quantity != 'number') {
        console.log('enter numbers only');
        isValid = false;
    }

    return isValid;
}
//***********************Start Load function***************************/
function load(chairs, benches, tables) {


    //console.log(chairs);
    //console.log(loadChairs);

    if (!isvalidObj(chairs)) {
        console.log('please enter  object');
        isloaderror = true;
        return;
    }

    if (!isvalidObj(benches)) {
        console.log('please enter  object');
        isloaderror = true;
        return;
    }

    if (!isvalidObj(tables)) {
        console.log('please enter  object');
        isloaderror = true;
        return;
    }

    loadChairs = chairs;
    loadBenches = benches;
    loadTables = tables;

}

//***********************End Load function***************************/

//***********************Start productpurchase function *********************/
function purchased(chairs, benches, tables, discount) {
    //console.log(chairs);
    //console.log(loadTables);
    //console.log(loadBenches.Quantity);


    //**load function is not loaded autometically terminate the purchase function condition Checking*/
    if (!isloaderror) {
        //*only Number is Accepted conditions Checking */
        if (typeof discount != 'number') {
            console.log('please enter number');
            return;
        }

        if (typeof chairs != 'number') {
            console.log('please enter number');
            return;
        }

        if (typeof benches != 'number') {
            console.log('please enter number');
            return;
        }

        if (typeof tables != 'number') {
            console.log('please enter number');
            return;
        }
        //**purchase items and load items condition Checking****/
        if (chairs >= loadChairs.Quantity) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Chairs are not available');
            console.log('error message');
            console.log(`here Stock:${loadChairs.Quantity}`);
            console.log(`Required Qty:${chairs}`);
            return;

        } else {
            console.log('Chairs are available');

        }

        if (benches >= loadBenches.Quantity) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Benches are not available');
            console.log('error message');
            console.log(`here Stock:${loadBenches .Quantity}`);
            console.log(`Required Qty:${benches}`);
            return;

        } else {
            console.log('Benches are available');

        }

        if (tables >= loadTables.Quantity) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Tables are not available');
            console.log('error message');
            console.log(`here Stock:${loadTables .Quantity}`);
            console.log(`Required Qty:${Tables}`);
            return;

        } else {
            console.log('Tables are available');
        }

        if (discount > 0 && discount <= 100) {
            console.log('valid discount')
        } else {
            console.log('discount is not valid');
        }

        loadChairs.quantity = loadChairs.quantity - chairs;
        loadBenches.quantity = loadBenches.quantity - benches;
        loadTables.quantity = loadTables.quantity - tables;
        display(chairs, benches, tables, discount);
    } else {
        console.log('stock not loaded properly');

    }


}
//***********************End productpurchase function *********************/

//***********************Start Display function *********************/

function display(itemChairs, itemBenches, itemTables, discount) {

    let chairsPrice = itemChairs * loadChairs.price;
    let benchesPrice = itemBenches * loadBenches.price;
    let tablesPrice = itemTables * loadTables.price;
    let totalPrice = chairsPrice + benchesPrice + tablesPrice;
    let totalDiscount = totalPrice * discount / 100;
    ///*DIsplays the all items in display function***/
    console.log('Purchased');
    console.log('.....................');
    console.log(`Chairs:${itemChairs}`);
    console.log(`Benches:${itemBenches}`);
    console.log(`Tables:${itemTables}`);
    console.log('Remaining  items');
    console.log('.....................');
    console.log(`Available Chairs:${ loadChairs.quantity}`);
    console.log(`Available Benches:${ loadBenches.quantity}`);
    console.log(`Available Tables:${ loadTables.quantity}`)

    console.log('Total Price');
    console.log('.....................');
    console.log(`Chairs Price: ${chairsPrice}`);
    console.log(`Benches Price: ${benchesPrice}`);
    console.log(`Tables Price: ${tablesPrice}`);
    console.log(`Total Price: ${totalPrice}`);
    console.log(`Total Discount: ${totalDiscount}`);
    console.log(`Payable Amount: ${totalPrice-totalDiscount}`);
}
//***********************End Display function *********************/

//*********************Main function Start************************/
//Objects Diclaration//

function main() {
    let chairs = {
        name: 'chairs',
        price: 500,
        quantity: 150
    };

    let benches = {
        name: 'benches',
        price: 1500,
        quantity: 120
    };

    let tables = {
        name: 'tables',
        price: 100,
        quantity: 130
    };

    load(chairs, benches, tables);
}
//***********************End Main function***************************/

main();
purchased(50, 50, 50, 10);
purchased(50, 50, 50, 10);
purchased(50, 50, 50, 10);