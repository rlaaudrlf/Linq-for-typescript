declare class Stack<T> {
    valueList: T[];
    Push(value: T): void;
    Pop(): T | undefined;
}
export default Stack;
