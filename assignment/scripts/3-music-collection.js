console.log('***** Music Collection *****')

const collection = [];
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
   

addToCollection('The black parade.', 'My chemical romance', 2007);
console.log (addToCollection('Brand new eyes.', 'Paramore', 2009))
console.log(collection);
//console.log(addToCollection());
console.log (addToCollection('Fallen.', 'Evanescence', 2003))
console.log (addToCollection('Wehen we all fall asleep.', 'Billie Eilish', 2019))
console.log (addToCollection('Bon Jovi.', 'Bon-Jovi', 1984))
console.log (addToCollection('Paranoid.', 'Black sabbath', 1970))
console.table(collection);
console.log('Over all collection', collection);

function showCollection(arrayM) {
    //console.log('Array', arrayM);
    
    for (let i = 0; i < arrayM.length; i++) {
        console.log('Title of the Album: ' + arrayM[i].title + ' Artist:' + arrayM[i].artist + ' Year:' + arrayM[i].yearPublished);
        
    }
    
    return ;
    // I had a problem with this return? im not sure why it says undefined?
}
console.log(showCollection(collection));



//let artist = '';
let search = [];
function findByArtist(artist) { 
    console.table(artist);
     artist ='';
     for (let searchArtist of artist){
        
     }

}
