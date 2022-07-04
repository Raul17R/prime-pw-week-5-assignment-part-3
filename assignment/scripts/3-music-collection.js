console.log('***** Music Collection *****')

let collection = [];
let records = {
    name: "Brand new Eyes",
    artist: "Paramore",
    yearPublished: 2009,
}
//console.log('This is my collection of Records:', collection);
function addToCollection(title,artist,yearPublished) {
    //records === collection;
    console.log('Add title of the record',title, 'Add Artist',artist,'Add Year',yearPublished);

    return title + artist + yearPublished;

    }
   

//addToCollection('The black parade', 'My chemical romance', 2007);
//console.table (addToCollection('The black parade', 'My chemical romance', 2007))
console.log(addToCollection('Raul','Roldan',1995));
//console.log(collection);
//addToCollection('Raul', 'Roldan', 2009);
//console.log(addToCollection());

