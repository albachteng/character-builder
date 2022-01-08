interface WithKey {
    [key: string]: any
    [key: number]: any
}

type SortFunction = <T>(a: T, b: T) => 0 | 1 | -1

const ascending: SortFunction = (a, b) => a > b ? 1 : -1;

const descending: SortFunction = (a, b) => a > b ? -1 : 1;

export const sortByOptions: {[k: string]: any} = {
    // this option assumes the property name will behave when passed to sort...
    // ascending: <T extends WithKey>(propertyName: string) => (a: T , b: T) => ascending<T>(a[propertyName], b[propertyName]),
    // descending: <T extends WithKey>(propertyName: string) => (a: T, b: T) => descending<T>(a[propertyName], b[propertyName]),
    randomize: <T>(a: T, b: T) => Math.random() > .5 ? 1 : -1,
    levelAsc: (a: WithKey, b: WithKey) => ascending(a.level, b.level),
    levelDesc: (a: WithKey, b: WithKey) => descending(a.level, b.level),
    default: (a: any, b: any) => 0, // the default sort method, in most browsers transforms the values to strings and then sorts them
}