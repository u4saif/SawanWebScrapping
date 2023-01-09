const puppeteer = require("puppeteer");
const fs = require("fs/promises");

async function start() {
  const browser = await puppeteer.launch({headless:false});

  const page = await browser.newPage();

  await page.goto("https://learnwebcode.github.io/practice-requests/");
  //await page.goto("https://www.jiosaavn.com/my-music/songs");

  setTimeout( async()=>{
      await page.screenshot({path:"sample.png",fullPage:true});
      await browser.close();
  },5000);

  // const name=["saif ", "shaik", "sultana"];
  // await fs.writeFile("textFile.txt",name.join("\r\n"));

    // const commenter = await page.evaluate(() => {
    //   return Array.from(document.querySelectorAll(".info strong")).map( x => x.innerText
    //   );
    // });

    // await page.click("#clickme");
    // const clickData= await page.$eval("#data", el=> el.textContent);
    // console.log(clickData);

    // await page.type("#ourfield","blue");
    // await Promise.all([page.click("#ourform button"), page.waitForNavigation()]);
    // const info = await page.$eval("#message",el => el.textContent);
    // console.log("--",info);

    // const photo = await page.$$eval("img",(img)=>{
    //     return img.map(x=> x.src);
    // })

    // for( const image of photo){
    //     const saveImg = await page.goto(image);
    //     await fs.writeFile(image.split("/").pop(), await saveImg.buffer());
    // }
    
    //await browser.close();
}
start();
