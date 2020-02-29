class Stack<T> {
  valueList:T[] = [];

  Push (value: T) {
      this.valueList.push(value);
  }

  Pop (): T|undefined {
      return this.valueList.pop();
  }
}

export default Stack;
