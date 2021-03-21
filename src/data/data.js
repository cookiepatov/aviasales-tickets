const transferSortValues = [
    {
        name: 'transfer-all',
        caption: 'Все',
        value: '-1',
        checked: true,
    },
    {
        name: 'transfer-no-transfers',
        caption: 'Без пересадок',
        value: '0',
        checked: false,
    },
    {
        name: 'transfer-1',
        caption: '1 пересадка',
        value: '1',
        checked: false,
    },
    {
        name: 'transfer-2',
        caption: '2 пересадки',
        value: '2',
        checked: false,
    },
    {
        name: 'transfer-3',
        caption: '3 пересадки',
        value: '3',
        checked: false,
    },

]


const ticketsSortValues = [
    {
        name: 'cheapest',
        caption: 'Самый дешевый',
        checked: true,
    },
    {
        name: 'fastest',
        caption: 'Самый быстрый',
        checked: false,
    },
    {
        name: 'optimal',
        caption: 'Оптимальный',
        checked: false,
    }
]

export {transferSortValues, ticketsSortValues};