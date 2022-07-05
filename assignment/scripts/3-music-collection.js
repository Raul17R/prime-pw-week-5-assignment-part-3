console.log('***** Music Collection *****')

let collection = [];
let records = {
    name: "Brand new Eyes",
    artist: "Paramore",
    yearPublished: 2009,
}
//console.log('This is my collection of Records:', collection);
function addToCollection(title,artist,yearPublished) {
    //console.log('Add title of the record',title, 'Add Artist',artist,'Add Year',yearPublished);
    const newrecord={title:title, artist:artist, yearPublished:yearPublished,};
    collection.push(newrecord);
    
    return newrecord;

    }
   

addToCollection('The black parade', 'My chemical romance', 2007);
console.log (addToCollection('Brand new eyes', 'Paramore', 2009))
console.log(collection);
//console.log(addToCollection());
console.log (addToCollection('Fallen', 'Evanescence', 2003))
console.log (addToCollection('Wehen we all fall asleep', 'Billie Eilish', 2019))
console.log (addToCollection('Bon Jovi', 'Bon-Jovi', 1984))
console.log (addToCollection('Paranoid', 'Black sabbath', 1970))
//console.table(collection);
console.log('Over all collection', collection);

function showCollection(arrayM) {
    
    for (let i = 0; i < arrayM.length; i++) {
        let album = arrayM[i];
        album.title;
        //if (arrayM[i]) {
            //console.log(arrayM[i].title + ', ' + arrayM[i].artist + ', ' + arrayM[i].yearPublished + '');
        //}
        console.log(album.title);
        
    }
}
console.log(showCollection(collection));
