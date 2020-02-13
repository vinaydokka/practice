let stockLoadChairs;
let stockLoadTables;


function load(itemChairs, itemTables) {

    /*  console.log(load);
     console.log(itemChairs);
     console.log(itemTables); */
    //console.log(typeof(itemChairs));

    //***checking  start first condition  type object or not****/// 
    if (typeof itemChairs == 'object') {
        true;

    } else {
        console.log('enter Objects only');
        return;
    }
    if (typeof itemTables == 'object') {
        true;

    } else {
        console.log('enter Objects only');
        return;
    }
    //***checking  start first condition  type object or not****///

    //********* Start Checking condition of object properties****///
    stockLoadChairs = itemChairs;
    stockLoadTables = itemTables;

    let length = itemChairs.length;
    for (let i = 0; i < length; i++) {
        stockLoadChairs = itemChairs[i];
        console.log(stockLoadChairs);
        console.log(stockLoadChairs.price);
    }
    let line = itemTables.length;
    for (let j = 0; j < line; j++) {
        stockLoadTables = itemTables[j];
        console.log(stockLoadTables);
        console.log(stockLoadTables.price);
    }
    console.log(stockLoadChairs.quentity);

    //********* End Checking condition of object properties****///

}

function purchase(stockChairs, stockTables) {
    /*     console.log(purchase);
        console.log(stockChairs);
        console.log(stockTables); */
    //***checking  start first condition is type object or not****///        
    if (typeof stockChairs == 'object') {
        true;

    } else {
        console.log('enter Objects only');
        return;
    }
    if (typeof stockTables == 'object') {
        true;

    } else {
        console.log('enter Objects only');
        return;
    }
    //***checking End condition of object or not****///


    //***checking Start condition of object properties****///

    //******Start Stock Chairs properties conditions Checking******//
    if (typeof stockChairs.price == 'number') {
        true;

    } else {
        console.log('enter numbers only');
        return;
    }

    if (typeof stockChairs.quentity == 'number') {
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
    if (typeof stockChairs.price == 'number') {
        true;

    } else {
        console.log('enter numbers only');
        return;
    }

    if (typeof stockChairs.quentity == 'number') {
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
    //*****End StockTables properties conditions Checking***//
    //***checking Start condition of object properties****///

    // console.log(stockLoadTables.price);

    /// 
    console.log(`${stockLoadChairs.quentity-stockChairs.quentity}`)
}



function init() {
    let chairsobj = {
        price: 100,
        quentity: 50,
        color: 'red',
    };
    let tablesobj = {
        price: 100,
        quentity: 50,
        color: 'white',
    };
    purchase(chairsobj, tablesobj);
}

function main() {
    let chairs = [];
    let tables = [];
    chairs.push({ price: 100, quentity: 50, color: 'red', });
    tables.push({ price: 100, quentity: 50, color: 'white', });
    /*  console.log(chairs);
     console.log(tables); */
    load(chairs, tables);
}
main();
init();