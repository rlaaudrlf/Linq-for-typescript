export declare class LinkList<T> {
    root: LinkNode<T> | undefined;
    end: LinkNode<T> | undefined;
    length: number;
    Add(value: T): void;
    Where(predicate: (value: T) => boolean): LinkNode<T> | undefined;
    Find(value: T): LinkNode<T> | undefined;
    Finds(value: T): LinkNode<T>[] | undefined;
    GetEnd(): LinkNode<T> | undefined;
    Delete(value: T): LinkNode<T> | undefined;
    [Symbol.iterator]: () => {
        value: undefined;
        done: boolean;
        next?: undefined;
    } | {
        next: () => {
            value: LinkNode<T> | undefined;
            done: boolean;
        };
        value?: undefined;
        done?: undefined;
    };
}
export declare class LinkNode<T> {
    value: T;
    next: LinkNode<T> | undefined;
    pre: LinkNode<T> | undefined;
    constructor(value: T);
    Add(value: T): void;
    Find(value: T): LinkNode<T> | undefined;
    Where(predicate: (value: T) => boolean): LinkNode<T> | undefined;
}
