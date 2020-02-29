declare type Predicate<T> = (value: T) => boolean;
declare type groupKey = string | number | undefined;
export declare type groupItem<T> = {
    key: string;
    value: List<T>;
};
export declare class List<T> {
    private array;
    constructor(array?: T[] | undefined);
    get(index: number): T;
    Add(value: T): T;
    AddRange(value: T[]): void;
    ToList(): T[];
    Change<TType>(changer: (value: T) => TType): List<TType>;
    Foreach(on: (value: T, index: number) => void): this;
    Where(predicate: Predicate<T>, log?: boolean): this;
    Sum(func: (value: T) => number): number;
    Avg(func: (value: T) => number): number;
    Take(count: number): List<T>;
    Count<TResult>(to: (value: TResult, count: number) => void, target: (value: T) => number): List<TResult>;
    Sort(sort: (left: T, right: T) => number): this;
    Length(): number;
    GroupBy(getKeys: () => string[], getKey: (value: T) => groupKey): List<groupItem<T>>;
    ToArray(): T[];
}
export {};
