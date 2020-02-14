let stockLoadChairs;
let stockLoadTables;
let iserrorissue = false;

function load(itemChairs, itemTables) {
    /*   console.log(load);
      console.log(itemChairs);
      console.log(itemTables); */
    //console.log(typeof(itemChairs));
    //console.log(typeof(itemTables));
    if (typeof itemChairs != 'object') {
        console.log('enter Objects only');
        iserrorissue = true;
        return;
    }
    if (typeof itemTables != 'object') {
        console.log('enter Objects only');
        iserrorissue = true;
        return;
    }



    let length = itemChairs.length;
    for (let i = 0; i < length; i++) {
        stockLoadChairs = itemChairs[i];
    }
    let lengthOne = itemTables.length;
    for (let j = 0; j < lengthOne; j++) {
        stockLoadTables = itemTables[j];
    }

}


function purchase(stockChairs, stockTables) {
    /*     console.log(purchase);
        console.log(stockChairs);
        console.log(stockTables); */
    //***checking  start first condition is type object or not****///  

    if (!iserrorissue) {
        if (typeof stockChairs == 'object') {

        } else {
            console.log('enter Objects only');
            return;
        }
        if (typeof stockTables == 'object') {

        } else {
            console.log('enter Objects only');
            return;
        }
        //***checking End condition of object or not****///


        //***checking Start condition of object properties****///

        //******Start Stock Chairs properties conditions Checking******//
        if (typeof stockChairs.price == 'number') {

        } else {
            console.log('enter numbers only');
            return;
        }

        if (typeof stockChairs.quantity == 'number') {
            true;

        } else {
            console.log('enter numbers only');
            return;
        }
        if (typeof stockChairs.color == 'string') {
            true;
        } else {
            console.log('enter name as string only');
            return;
        }
        //*****End StockChairs properties conditions Checking******//

        //*****Start StockTables properties conditions Checking***//
        if (typeof stockTables.price == 'number') {
            true;

        } else {
            console.log('enter numbers only');
            return;
        }

        if (typeof stockTables.quantity == 'number') {
            true;

        } else {
            console.log('enter numbers only');
            return;
        }
        if (typeof stockTables.color == 'string') {
            true;
        } else {
            console.log('enter name as string only');
            return;
        }
        //*****End StockTables properties conditions Checking***//
        //***checking Start condition of object properties****///

        // console.log(stockLoadTables.price);


        if (stockChairs.quantity > stockLoadChairs.quantity) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Chairs are not available');
        } else {
            console.log('Chairs are available');
        }

        if (stockTables.quantity > stockLoadTables.quantity) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Tables are not available');
        } else {
            console.log('Tables are available');
        }
        stockLoadChairs.quantity = stockLoadChairs.quantity - stockChairs.quantity;
        stockLoadTables.quantity = stockLoadTables.quantity - stockTables.quantity;

        display(stockChairs, stockTables)
    } else {
        console.log('enter load stock properly');

    }
}

function display(chairsone, tablesone) {
    let chairsPrice = chairsone.quantity * stockLoadChairs.price;
    let tablesPrice = tablesone.quantity * stockLoadTables.price;
    let totalPrice = chairsPrice + tablesPrice;
    console.log('purchased');
    console.log('.....................');
    console.log(`Chairs:${chairsone.quantity}`);
    console.log(`Benches:${tablesone.quantity}`);

    console.log('Remaining');
    console.log('.....................');
    console.log(`Available Chairs:${stockLoadChairs.quantity}`);
    console.log(`Available Benches :${  stockLoadTables.quantity }`);

    console.log('Total Price');
    console.log('.....................');
    console.log(`Chairs Price: ${chairsPrice}`);
    console.log(`Tables Price: ${tablesPrice}`);
    console.log(`Total Price: ${totalPrice}`);



}



function init() {
    let chairsobj = {
        price: 100,
        quantity: 50,
        color: 'red',
    };
    let tablesobj = {
        price: 100,
        quantity: 50,
        color: 'white',
    };
    purchase(chairsobj, tablesobj);
    /*     purchase(chairsobj, tablesobj); */

}

function main() {
    let chairs = [];
    let tables = [];
    chairs.push({ price: 500, quentity: 150, color: 'red', });
    tables.push({ price: 100, quentity: 150, color: 'white', });
    /*  console.log(chairs);
     console.log(tables); */
    load(chairs, tables);
}

main();
init();