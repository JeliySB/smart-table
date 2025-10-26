export function initSorting(elements) {
    const applySorting = (query, state, action) => {
        let sortBy = state.sortBy;
        let sortOrder = state.sortOrder;

        if (action && elements.includes(action)) {
            const actionSortBy = action.dataset.sort;
            sortBy = actionSortBy;
            sortOrder = action.dataset.order === 'asc' ? 'desc' : 'asc';
            action.dataset.order = sortOrder;
            elements
                .filter(el => el !== action)
                .forEach(el => {
                    el.dataset.order = '';
                });
        }

        return sortBy && sortOrder ? Object.assign({}, query, { sortBy, sortOrder }) : query; //
    };

    return applySorting;
}