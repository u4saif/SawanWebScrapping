const puppeteer = require("puppeteer");
const fs = require("fs/promises");
const express = require("express");
// const app = express();

// app.get("/songs",(req,res)=>{

//     res.sendFile('index.html', { root: __dirname });
// });
// app.listen(5000,()=>{
//     console.log("app listining at 5000");
// });
const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const { SONGS, SONGS_URL } = require("./constants");
const songs = SONGS;

const songURL = songs.map((item) => "https://saavn.me/songs?id=" + item);

let SaveSongURL = JSON.stringify(songURL);
// console.log(SaveSongURL);

//*****************************//
//******Write Data to DISK******
function writeDataToDisk(fileName, dataToSave) {
  fs.writeFile(fileName, dataToSave, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
  });
}
/*******************************************/
//writeDataToDisk("SongURL",SaveSongURL);
//***************get Data for Each song****//

// var result = [];
// async function openPages() {
//   for (url of SONGS_URL) {
//     await openNewPage(url);
//     console.log("done ", url);
//   }
//   console.log(result);
//   let data=JSON.stringify(result);
//   writeDataToDisk("SongFinalUrl",data);
// }

//********Custom function **********************

// async function openNewPage(url) {
//   var browser = await puppeteer.launch({ headless: false });
//   let page = await browser.newPage();
//   await page.goto(url);
//   await delay(10000);
//   const Songdata = await page.evaluate(() => {
//     return {
//       url: JSON.parse(
//         document.querySelectorAll("pre")[0].innerHTML
//       ).data[0].downloadUrl.pop().link,
//       id: JSON.parse(document.querySelectorAll("pre")[0].innerHTML).data[0].id,
//       name: JSON.parse(document.querySelectorAll("pre")[0].innerHTML).data[0]
//         .name,
//     };
//   });
//   result.push(Songdata);
//   browser.close();
//   await delay(2000);
// }
const fileName=[
  {
      "id": "40522c17292568ad1dddbd1474d9a777_320.m4a",
      "name": "Dil Kya Kare (From &amp;quot;Dil Kya Kare&amp;quot;)"
  },
  {
      "id": "76047b38b7f9a970a4df10eb581fd289_320.m4a",
      "name": "Jitni Dafa"
  },
  {
      "id": "2368d5494245647b39953ea1850e0b12_320.m4a",
      "name": "Swag Mera Desi"
  },
  {
      "id": "f7504934b93d1e4eeb7b7088821bf303_320.m4a",
      "name": "Sunn Le Zara"
  },
  {
      "id": "d661fb66b891654fe73e3ca231e58ebd_320.m4a",
      "name": "Mera Intkam Dekhegi Feat. Anand Raj Anand"
  },
  {
      "id": "a5bf59099a04ed7c10681a1aabfa5ea2_320.m4a",
      "name": "Lahore"
  },
  {
      "id": "81b8571b57196e18ddeb70c829c16c8d_320.m4a",
      "name": "Kabhi Aayine Pe Likha Tujhe"
  },
  {
      "id": "35d9ba7b6dda355f9e1420e884647acf_320.m4a",
      "name": "Wakhra Swag"
  },
  {
      "id": "2f4d371246f8de0edd0da13f701144df_320.m4a",
      "name": "Ishare Tere"
  },
  {
      "id": "51c8a9497dbaa053502624085a7e1d4b_320.m4a",
      "name": "Backbone"
  },
  {
      "id": "63d1b1353c2018da2db81da8b54d7fb2_320.m4a",
      "name": "All Black"
  },
  {
      "id": "12880c54200607ae79be60ce6876af0b_320.m4a",
      "name": "Naah"
  },
  {
      "id": "03e431af7eb7458f299a87ee1d5bf8c8_320.m4a",
      "name": "Jaguar"
  },
  {
      "id": "5c1b38a71ad3d8e929f6a2888c99a4db_320.m4a",
      "name": "Rap God"
  },
  {
      "id": "6df74bfaa48f1e2f60b8b5cddbf09e35_320.m4a",
      "name": "Teri Meri"
  },
  {
      "id": "dfe2b5ebb438defdf5c0860cc9054b63_320.m4a",
      "name": "Nikle Currant"
  },
  {
      "id": "98a13be3a4fcf18757f5dbe76a59e845_320.m4a",
      "name": "Sawan Aaya Hai"
  },
  {
      "id": "414dd7443dc32677964b64e5f37670f9_320.m4a",
      "name": "Ae Dil Hai Mushkil Title Track (From &amp;quot;Ae Dil Hai Mushkil&amp;quot;)"
  },
  {
      "id": "015b3a3dbd1764eff0e77427182eb87b_320.m4a",
      "name": "Dhadak Title Track"
  },
  {
      "id": "bb5526e4f8e855838fd3f03b4b4f62f1_320.m4a",
      "name": "Brotherhood (feat. Singga)"
  },
  {
      "id": "5cec99e4c41fe8988b7741c706ac4b2c_320.m4a",
      "name": "Snapchat Story"
  },
  {
      "id": "0b0b41c3585fb565b06078d6e2b89406_320.m4a",
      "name": "Kya Baat Ay"
  },
  {
      "id": "b47d3b54db6cff3e162ffa60e66a4736_320.m4a",
      "name": "Trending Nakhra"
  },
  {
      "id": "6561cb7b3de7205320b3e7f8d752bfd0_320.m4a",
      "name": "Bamb"
  },
  {
      "id": "8e7fc9cfe7dd16cdcbc0bbfdb4bdf121_320.m4a",
      "name": "Pasand Jatt Di"
  },
  {
      "id": "08c7203ad3d795bac65733b52361b458_320.m4a",
      "name": "Tera Ghata"
  },
  {
      "id": "adf730b897b34254279b92dc2ee59d89_320.m4a",
      "name": "Bapu Zimidar"
  },
  {
      "id": "8afd648319ceee2c36f75f2c407c5b4b_320.m4a",
      "name": "Dil Mein Ho Tum"
  },
  {
      "id": "c5848bffe844945d3fad784959a7d8c9_320.m4a",
      "name": "Tokyo Drift (Fast &amp;amp; Furious) (From &amp;quot;The Fast And The Furious: Tokyo Drift&amp;quot; Soundtrack)"
  },
  {
      "id": "accfa72e4369eead980c13d064bee9ff_320.m4a",
      "name": "Sun Meri Shehzadi"
  },
  {
      "id": "1feec2b62321a4cbb9b5a29e179768b9_320.m4a",
      "name": "Pehli Pehli Baar Mohabbat Ki Hai"
  },
  {
      "id": "753997391c2c8dfd2b593881b95f4d54_320.m4a",
      "name": "Tum Dil Ki Dhadkan Mein"
  },
  {
      "id": "e5ec72fde6980ef6fc434aae3c02fe3d_320.m4a",
      "name": "Mera Dil Bhi Kitna Pagal Hai"
  },
  {
      "id": "daffdcaf3989c4711b23fc1845c47950_320.m4a",
      "name": "Preet Yeh Kaisi"
  },
  {
      "id": "35094a6760a51cd2648ffb84322cc01e_320.m4a",
      "name": "Chehra Kya Dekhte Ho"
  },
  {
      "id": "2b3b2bde1e421088758c6c13a34ef52a_320.m4a",
      "name": "Dil Hai Ki Manta Nahin"
  },
  {
      "id": "08118e4f8828498425a795df254bb26e_320.m4a",
      "name": "Tu Milta Hai Mujhe"
  },
  {
      "id": "0eff53af7468a36686e1aa7add341c47_320.m4a",
      "name": "Soch Liya (From &amp;quot;Radhe Shyam&amp;quot;)"
  },
  {
      "id": "822d024ef34145bf58a8d856b03813d9_320.m4a",
      "name": "Dil Mein Chhupa Loonga"
  },
  {
      "id": "748f18156d8fe155f17797f0b08368bc_320.m4a",
      "name": "Pyaar Maanga Hai"
  },
  {
      "id": "f4a24c82940c724b0e511abb0bd85afb_320.m4a",
      "name": "Shikwa Nahin Kisi Se"
  },
  {
      "id": "d4999c6b5ab94f9c47d7f7bf9a8a6775_320.m4a",
      "name": "Main Jis Din Bhulaa Du"
  },
  {
      "id": "cc61c7bc57003476cc1248f3b3caa714_320.m4a",
      "name": "Tu Meri Zindagi-Adayein (From &amp;quot;T-Series Mixtape Rewind Season 3&amp;quot;)"
  },
  {
      "id": "ec74c6c51b647cf641bbebe49d3c8655_320.m4a",
      "name": "Filhaal2 Mohabbat"
  },
  {
      "id": "a0b269a5137b22c1c405b8482766d6e8_320.m4a",
      "name": "Pyaar Karte Ho Na"
  },
  {
      "id": "57c5400e920d5e949c36ec69042d8733_320.m4a",
      "name": "Baarish Ban Jaana"
  },
  {
      "id": "1a2c2365617dd1b07d844a67b6527897_320.m4a",
      "name": "Suna Hai"
  },
  {
      "id": "7600a1ec2220612c3d90744bb14e1c0c_320.m4a",
      "name": "Bepanah Ishq"
  },
  {
      "id": "ed9436ff383eba7d06d44e4a89c398c4_320.m4a",
      "name": "Dil Galti Kar Baitha Hai (Feat. Mouni Roy)"
  },
  {
      "id": "d0f901a1c52e78153f705c1f9b380e70_320.m4a",
      "name": "Jannat Ve"
  },
  {
      "id": "b8dc43f37ccb208fc668b00999fd9ede_320.m4a",
      "name": "Pyaar Ho Jayega"
  },
  {
      "id": "fe3b224cc524ee9eac85a82d1a39321a_320.m4a",
      "name": "Chura Liya"
  },
  {
      "id": "a0e0fc7ed3dc5a24428c10123fb601ee_320.m4a",
      "name": "Bachpan Ka Pyaar"
  },
  {
      "id": "f45d8625ec1fa245ef52341d02e2864a_320.m4a",
      "name": "Aise Na Chhoro"
  },
  {
      "id": "35726d4394604604e961bf5b846870d0_320.m4a",
      "name": "Raataan Lambiyan"
  },
  {
      "id": "0d717dec264c9d1aa00969dbfde268f6_320.m4a",
      "name": "Saawariya"
  },
  {
      "id": "283d9abbdded31f3aa7b813c852cb036_320.m4a",
      "name": "Tera Naam"
  },
  {
      "id": "82b4ccbafd030c2723412ab2938dbe4a_320.m4a",
      "name": "Ishq Mein"
  },
  {
      "id": "502a1a5f6e806532a2c66aa1d9707e93_320.m4a",
      "name": "Rim Jhim"
  },
  {
      "id": "3e208054c391fdcaa30d8da0a683524e_320.m4a",
      "name": "Jeena Bhool Jaunga"
  },
  {
      "id": "9f3e81c0418af0e5a1db7001f6f2305c_320.m4a",
      "name": "Dhokha"
  },
  {
      "id": "b274a96623aded2e6f6cf47581893a30_320.m4a",
      "name": "Lut Gaye (Feat. Emraan Hashmi)"
  },
  {
      "id": "943d9cecfb9ae4c1267ed7ac553e0422_320.m4a",
      "name": "Thoda Thoda Pyaar"
  },
  {
      "id": "5337e7821027f13cc981d7cf4e04b2a1_320.m4a",
      "name": "Tu Zaroori"
  }
];
//****Rename the File name in the Disk****/

for( let name of fileName){
  console.log(name.name);
  fs.rename(`${name.id}`, `${name.name}.m4a`, function(err) {
      if ( err ) console.log('ERROR: ' + err);
    });
}

