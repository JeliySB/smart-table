import {sortMap} from "../lib/sort.js";

export function initSorting(elements) {
    const applySorting = (query, state, action) => {
        let field = null;
        let order = null;

        if (action && elements.includes(action)) {
            field = action.dataset.field;
            order = sortMap[action.dataset.value] || 'asc';
            action.dataset.value = order;
            elements
                .filter(el => el !== action)
                .forEach(el => {
                    el.dataset.value = 'none';
                });
        } else {
            elements.forEach(el => {
                if (el.dataset.value !== 'none') {
                    field = el.dataset.field;
                    order = el.dataset.value;
                }
            });
        }

        const sort = (field && order !== 'none') ? `${field}:${order}` : null;
        return sort ? Object.assign({}, query, { sort }) : query;
    };

    return applySorting;
}