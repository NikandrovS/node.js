var translator = {
    lang: 'ru-en',
    select: function () {
        var read = require('read');
        // Выбираем язык для перевода
        read({ prompt : 'Выберете язык с которого хотите перевести:' + '\n' + 'ru или en?' }, function (err, question) {
            switch(question) {
                case 'ru':
                    this.lang = 'ru-en';
                    console.log('Переводим с Русского');
                    break;
                case 'en':
                    this.lang = 'en-ru';
                    console.log('Переводим с Английского');
                    break;
            }

            // Ввод текста
            read({ prompt : 'Введите слово для перевода' }, function (err, word) {

                // this.enterText(); почему функция не вызывается?

                const request = require('request');
                let url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181007T123348Z.ee4b9cd9288d0de8.da96129be20be453151bd8eab4c9cf98aaed877e&lang=';
                request((url + this.lang + '&text=' + word), (err, response, body) => {
                    if(!err && response.statusCode === 200) {
                        console.log(body);
                    } else {
                        console.log(err);
                    }
                });
            });
        });


    },
    enterText: function() {
        console.log('Check');
    },

};

translator.select();