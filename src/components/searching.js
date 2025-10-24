import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const rules = {
        searchMultipleFields: (value, fields, exact) => {
            return (row) => {
                if (!value) return true;
                return fields.some(f => String(row[f]).toLowerCase().includes(value.toLowerCase()));
            };
        }
    }

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        const value = state[searchField] || '';
        return data.filter(rules.searchMultipleFields(value, ['date', 'customer', 'seller'], false));
    }
}