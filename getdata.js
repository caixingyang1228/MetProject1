// Years: 1450 to 1900
// 1492 Age of Discovery
// 1517 Protestant Reformation
// 1760 the Age of Machines
// 1789 French Revolution
// 1859 《On the Origin of Species by Means of Natural Selection》

//Selected Countries:france/British/German/Italian/Dutch/Spanish


// var request = require('request');
// var fs = require('fs');

const searchUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=11&dateBegin=1095&dateEnd=1950&q=painting';
const objectBaseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

fetchMuseumData(searchUrl);
// fetchdepartData(departmentBaseURL);

let myArray = [];

function fetchMuseumData(url) {
  window
    .fetch(url)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      fetchObjects(data);
    });
}

// from the response, fetch objects
function fetchObjects(data){

  let objectIDs = data.objectIDs;
  console.log("fetching: " + objectIDs.length + " objects");
  objectIDs.forEach(function(n) {
     //console.log(objectBaseUrl + n);
    let objUrl = objectBaseUrl + n;
    window
      .fetch(objUrl)
      .then(data => data.json())
      .then(data => {
        // console.log(data);
        addObject(data);
      });
  });
}

// create your own array using just the data you need
function addObject(objectData){
    var currentID = objectData.objectID;
    var currentTitle = objectData.title;
    var currentDate = objectData.objectBeginDate;
    var currentCountry = objectData.artistNationality;
    var currenttags = objectData.tags;
    var imgUrl = objectData.primaryImage;
    var index = myArray.length;
    
    myArray[index] = {};
    myArray[index]["title"] = currentTitle;
    myArray[index]["date"] = currentDate;
    myArray[index]["country"] = currentCountry;
    myArray[index]["tags"] = currenttags;
    myArray[index]["image"] = imgUrl;
    
    console.log(myArray[index]);
    
//     var i;
    
//     for (let i = 0; i < 10; i++){
// request(myArray[i], function(error, response, body){
//     if (!error && response.statusCode == 200) {
//         fs.writeFileSync(myArray[index], body);
//     }
//     else {console.log("Request failed!")}
// });
// }
}


