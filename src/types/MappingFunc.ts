export type MappingFunc<T extends unknown> = (
  value: T,
  index: number,
  arr: T[]
) => React.ReactNode;