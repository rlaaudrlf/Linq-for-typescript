export declare class Dictionary<TType extends number | object | string, TValue extends any> {
    private keys;
    [propName: string]: any;
    [index: number]: any;
    private values;
    Add(key: TType, value: TValue): void;
    private getKeyStr;
    Get(key: TType): TValue;
    Remove(key: TType): void;
    Keys(): TType[];
    Values(): TValue[];
    ContainsKey(key: TType): boolean;
    ToList(): KeyValuePair<TType, TValue>[];
    [Symbol.iterator]: () => {
        next: () => {
            done: boolean;
            value?: undefined;
        } | {
            value: KeyValuePair<TType, TValue>;
            done: boolean;
        };
    };
}
export declare class KeyValuePair<TType, TValue> {
    key: TType;
    value: TValue;
    constructor(key: TType, value: TValue);
}
