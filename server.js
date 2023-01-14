const puppeteer = require('puppeteer');
const fs = require("fs/promises");

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const {SONGS} = require('./constants');
const songs=SONGS;

const songURL = songs.map((item)=>"https://saavn.me/songs?id="+item);

let SaveSongURL= JSON.stringify(songURL);
console.log(SaveSongURL);

//*****************************//
//******Write Data to DISK******
function writeDataToDisk(fileName,dataToSave){
    fs.writeFile(fileName,dataToSave,'utf8',function (err){
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    });
};
/********************************/
writeDataToDisk("SongURL",SaveSongURL);















