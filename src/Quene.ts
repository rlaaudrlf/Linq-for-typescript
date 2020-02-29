class Quene<T> {
  valueList: T[] = [];

  EnQuene (value: T) {
      this.valueList.unshift(value);
  }

  DeQuene (): T|undefined {
      return this.valueList.shift();
  }
}

export default Quene;
