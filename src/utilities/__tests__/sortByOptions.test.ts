import { sortByOptions } from "../sortByOptions";

describe('----- findArray -----', () => {
    test('it defaults to the default sort', () => {
        const list = [5, 1, 2, 3];
        const sorted = list.sort(sortByOptions['default']);
        expect(sorted).toEqual([1, 2, 3, 5]);
    });
    test('it can sort by level', () => {
        const list = [{level: 2}, {level: 1}, {level: 3}];
        const sorted = list.sort(sortByOptions['levelAsc']);
        expect(sorted).toEqual([{level: 1}, {level: 2}, {level: 3}]);
    });
})
