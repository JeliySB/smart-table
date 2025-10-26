export function initSearching(searchField) { // result заменили на query
    const applySearching = (query, state) => { // проверяем, что в поле поиска было что-то введено
        const value = state[searchField] // устанавливаем в query параметр
        return value ? Object.assign({}, query, { search: value }) : query
    };

    return applySearching;
}