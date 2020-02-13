let loadChairs;
let loadBenches;
let loadTables;

function main() {
    let chairs = {
        name: 'chair',
        price: 100,
        Quantity: 20
    }
    let benches = {
        name: 'chair',
        price: 100,
        Quantity: 20
    }

    let tables = {
        name: 'chair',
        price: 100,
        Quantity: 20
    }
    load(chairs, benches, tables);

}

function load(chairs, benches, tables) {
    loadChairs = chairs;
    loadBenches = benches;
    loadTables = tables;
    //console.log(chairs);
    //console.log(loadChairs);
    if (typeof chairs != 'object') {
        console.log('chairs is not a object');
        console.log('please enter  object');
        return;
    }
    if (typeof benches != 'object') {
        console.log('benches is not a object');
        console.log('please enter  object');
        return;
    }
    if (typeof tables != 'object') {
        console.log('tables is not a object');
        console.log('please enter  object');
        return;
    }

}

function purchased(chairs, benches, tables, discount) {
    //console.log(chairs);
    //console.log(loadTables);
    //console.log(loadBenches.Quantity);
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
        console.log('discount is not valid')
    }

    display(chairs, benches, tables, discount);
}

function display(itemChairs, itemBenches, itemTables, discount) {
    let RemainChairs = loadChairs.Quantity - itemChairs;
    let RemainBenches = loadBenches.Quantity - itemBenches;
    let RemainTables = loadTables.Quantity - itemTables;

    let chairsPrice = itemChairs * loadChairs.price;
    let benchesPrice = itemBenches * loadBenches.price;
    let tablesPrice = itemTables * loadTables.price;
    let totalPrice = chairsPrice + benchesPrice + tablesPrice;
    let totalDiscount = totalPrice * discount / 100;

    console.log('Purchased');
    console.log('.....................');
    console.log(`Chairs:${itemChairs}`);
    console.log(`Benches:${itemBenches}`);
    console.log(`Tables:${itemTables}`);
    console.log('Remaining  items');
    console.log('.....................');
    console.log(`Available Chairs:${RemainChairs}`);
    console.log(`Available Benches:${RemainBenches}`);
    console.log(`Available Tables:${RemainTables}`);

    console.log('Total Price');
    console.log('.....................');
    console.log(`Chairs Price: ${chairsPrice}`);
    console.log(`Benches Price: ${benchesPrice}`);
    console.log(`Tables Price: ${tablesPrice}`);
    console.log(`Total Price: ${totalPrice}`);
    console.log(`Total Discount: ${totalDiscount}`);
    console.log(`Payable Amount: ${totalPrice-totalDiscount}`);
}
main();
purchased(10, 10, 10, 10);