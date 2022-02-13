import { JSONValue } from '../types';

type SortFunction = <T extends JSONValue>(a: T, b: T) => 0 | 1 | -1;

const ascending: SortFunction = (a, b) => (a > b ? 1 : -1);
const descending: SortFunction = (a, b) => (a > b ? -1 : 1);

export const sortByOptions = {
  randomize: <T extends JSONValue>(a: T, b: T) =>
    Math.random() > 0.5 ? 1 : -1,
  levelAsc: <T extends JSONValue & { level: number }>(a: T, b: T) =>
    ascending(a.level, b.level),
  levelDesc: <T extends JSONValue & { level: number }>(a: T, b: T) =>
    descending(a.level, b.level),
  default: <T extends JSONValue>(a: T, b: T) => 0 
};
