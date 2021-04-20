# Тестовое задание "Менеджер авиабилетов"

### [перейти](https://cookiepatov.github.io/aviasales-tickets/)

## Описание

Сайт представляет собой страницу с отображением случайно сгенерированных авиабилетов, полученных с тестового сервера Aviasales. Первоначально загружается 5 билетов, но при нажатии на кнопку можно добавлять ещё по 5. Есть возможность пересортировки по цене, времени полёта или по оптимальному сочетанию этих параметров. Так же реализована фильтрация по количеству пересадок.


## Используемые технологии и методологии

Сайт реализован на React, используется классовый подход. Стилизация выполнена с применением методологии БЭМ, загрузка данных происходит по REST Api, через последовательные GET запросы. В случае ошибки, при запросе, выводится лоадер и происходит повторная попытка загрузить данные. 