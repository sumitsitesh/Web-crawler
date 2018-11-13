const request = require('request');
const cheerio = require('cheerio');

request('https://wiprodigital.com/',(err,response,html)=>{

if(!err && response.statusCode==200){
    const $ = cheerio.load(html);
    const siteHeading = $('.wdhome-hdr-cntr');

    //to print Html 
    console.log(siteHeading.html());
    //Tp print plain text
    console.log(siteHeading.text());

    const output = siteHeading.find('img');
    console.log(output);
}
})