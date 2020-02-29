type Predicate<T> = (value: T) => boolean;
type groupKey = string | number | undefined;
type tableKey = string | number;
export type groupItem<T> = { key: string; value: List<T> };
export class List<T> {
	private array: Array<T> = [];

	constructor (array: T[] | undefined = undefined) {
	  if (array) {
	    this.array = [...array];
	  }
	}

	get (index: number): T {
	  return this.array[index];
	}

	Add (value: T) {
	  this.array.push(value);

	  return value;
	}

	AddRange (value: T[]) {
	  this.array.push(...value);
	}

	ToList () {
	  return [...this.array];
	}

	Change<TType> (changer: (value: T) => TType) {
	  const result: List<TType> = new List<TType>();

	  for (const value of this.array) {
	    const data = changer(value);

	    if (data == undefined || data == null) {
	      continue;
	    }
	    result.Add(data);
	  }

	  return result;
	}

	Foreach (on: (value: T, index: number) => void) {
	  let index = 0;

	  for (const value of this.array) {
	    on(value, index);
	    index++;
	  }

	  return this;
	}

	Where (predicate: Predicate<T>, log = false) {
	  const array = [];

	  for (const value of this.array) {
	    if (predicate(value)) {
	      array.push(value);
	    }
	  }

	  this.array = array;

	  if (log) {
	  }

	  return this;
	}

	Sum (func: (value: T) => number) {
	  let value = 0;

	  for (const item of this.array) {
	    value += func(item);
	  }

	  return value;
	}

	Avg (func: (value: T) => number) {
	  const value = this.Sum(func);

	  return value / this.array.length;
	}

	Take (count: number) {
	  if (!count) {
	    return this;
	  }

	  const length = Math.min(count, this.array.length);
	  const result: List<T> = new List<T>(this.array.slice(0, length));

	  return result;
	}

	Count<TResult> (
	  to: (value: TResult, count: number) => void,
	  target: (value: T) => number
	) {
	  for (const value of this.array) {
	    const count = target(value);

	    to(value as any as TResult, count);
	  }

	  return this as any as List<TResult>;
	}

	Sort (sort: (left: T, right: T) => number) {
	  this.array.sort(sort);

	  return this;
	}

	Length () {
	  return this.array.length;
	}

	GroupBy (getKeys: () => string[], getKey: (value: T) => groupKey) {
	  const group: { [key: string]: List<T> } = {};
	  const keys = getKeys();

	  for (const key of keys) {
	    group[key] = new List<T>();
	  }

	  for (const value of this.array) {
	    const key = getKey(value);

	    if (key) {
	      const list = group[key];

	      if (list) {
	        list.Add(value);
	        group[key] = list;
	      }
	    }
	  }

	  const result: List<groupItem<T>> = new List<groupItem<T>>();

	  for (const key in group) {
	    result.Add({key,
	      value: group[key]});
	  }

	  return result;
	}

	ToArray () {
	  return [...this.array];
	}
}
