const prompt = require('prompt-sync')(); 
const fs = require('fs') ;

let lst = [] ; 

function additem() {
    let item = prompt('Enter item to add: ');
    let price = parseFloat(prompt('Enter price : '));
    lst.push({ item , price });
    console.log (`${item} added!`)
}
    
function remove(){
    let item = prompt('Enter item to remove: ');
    lst = lst.filter(lst => lst.item !== item);
    console.log (`${item} removed!`)

}

function display() {
    console.log('Grocery List:' , lst);
}

function Total() {
    let total = lst.reduce((acc, item) => acc + item.price , 0 );
    console.log (` total : ${total}`) 
}

function save(){
    const data = JSON.stringify(lst, null );
    fs.writeFileSync('grocery.json' , data )
    console.log('saved!')

}

function load() {
    try {
       if (fs.existsSync('grocery.json')) { const data = fs.readFileSync('grocery.json', 'utf8');
        console.log('loaded!') }
        else  {
            console.log('Not found'); } }
    catch (err) {
        console.error('error reading/writing to the file;',err);
    }
}

function main () {
    load() ;
    while (true) {
        console.log('\n1-Add\n2-Remove\n3-Display\n4-Total\n5-Save') ; 
        let option =parseInt(prompt('Choose option ')) ;
        if (option === 1) 
            additem();
        else if (option === 2) 
            remove();
        else if (option === 3) 
            display();
        else if (option === 4) 
            Total();
        else if (option === 5) 
            save();
    }
}
main (); 