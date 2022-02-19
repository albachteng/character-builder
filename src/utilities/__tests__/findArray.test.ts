import { findArray } from "../findArray";

describe('----- findArray -----', () => {
    test('it returns the nested data at the specified key', () => {
        const data = {
            find: {
                this: ['you found me!']
            }
        };
        const arr = findArray(data, ['find', 'this']);
        expect(arr).toEqual(data.find.this);
    });
    test('it returns the data object itself if the key is not found', () => {
        const data = {};
        const arr = findArray(data, ['cannot', 'find', 'this']);
        expect(arr).toEqual(data);
    })
})