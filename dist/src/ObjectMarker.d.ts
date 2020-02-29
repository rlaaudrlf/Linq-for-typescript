export declare const OBJ_HASH: unique symbol;
export interface IMarkedObject {
    [OBJ_HASH]: string;
}
export declare class ObjectMarker {
    static MarkObject(obj: object): IMarkedObject;
    static IsMarkedObject(obj: object): boolean;
}
