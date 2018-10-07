const request = require('request');
const cheerio = require('cheerio');

const url = 'https://news.yandex.ru/computers.html';

request(url, (err, response, body) => {
    let todayCategories = [];
    let todayTitle = [];
    let todayText = [];
    if(!err && response.statusCode === 200) {
        const $ = cheerio.load(body);
        const newsList = $('.story_view_normal');
        const categoryList = newsList.children('.rubric-label');
        const titleList = newsList.children('.story__title');
        const textList = newsList.children('.story__text');

        categoryList.each((idx, item) => {
            todayCategories.push($(item).text())
        });
        titleList.each((idx, item) => {
            todayTitle.push($(item).text())
        });
        textList.each((idx, item) => {
            todayText.push($(item).text())
        });
    }
    console.log('За сегодня у нас ' + todayTitle.length + ' Новостей!' + '\n');
    for( let i = 0 ; i < todayTitle.length ; i++ ){
        console.log((i + 1) + '. ' + 'Категория: ' + todayCategories[i] + '\n' + 'Заголовок: ' + todayTitle[i] + '\n' + todayText[i] + '\n');
    }
    console.log(todayTitle.length);
});
