import {IMarkedObject, OBJ_HASH, ObjectMarker} from "./ObjectMarker";


export class Dictionary<
  TType extends number | object | string,
  TValue extends any
> {
  private keys: TType[] = [];

  [propName:string]:any;

  [index:number]:any;


  private values: TValue[] = [];

  Add (key: TType, value: TValue): void {
      if (key == null || key == undefined) {
          return;
      }

      let strKey: string;

      if (typeof key == "object") {
          const obj = ObjectMarker.MarkObject(key as object);

          strKey = obj[OBJ_HASH];
      } else {
          strKey = key.toString();
      }

      this[strKey] = value;
      this.keys.push(key);
      this.values.push(value);
  }

  private getKeyStr (key: TType): string {
      if (typeof key == "object") {
          if (ObjectMarker.IsMarkedObject(key as object)) {
              return (key as IMarkedObject)[OBJ_HASH];
          }

		 	const obj = ObjectMarker.MarkObject(key as object);

          return obj[OBJ_HASH];
      }

      return key.toString();
  }

  Get (key: TType): TValue {
      const strKey = this.getKeyStr(key);

      return this[strKey];
  }

  Remove (key: TType): void {
      if (key == null || key == undefined) {
          return;
      }

      const strKey = this.getKeyStr(key);

      if (this[strKey] == undefined) {
          return;
      }

      delete this[strKey];

      const index = this.keys.indexOf(key, 0);

      if (index >= 0 && index < this.keys.length) {
          this.keys.splice(index, 1);
          this.values.splice(index, 1);
      }
  }

  Keys (): TType[] {
      return this.keys.slice();
  }

  Values (): TValue[] {
      return this.values.slice();
  }

  ContainsKey (key: TType): boolean {
      const strKey = this.getKeyStr(key);

      return this[strKey] != undefined;
  }

  ToList () {
      const result = [];

      for (let index = 0; index < this.keys.length; index++) {
          const key = this.keys[index];
          const value = this.values[index];
          const keyValuePair = new KeyValuePair<TType, TValue>(key, value);

          result.push(keyValuePair);
      }

      return result;
  }

  [Symbol.iterator]=() => {
      let index = 0;

      const next = () => {
          if (index >= this.keys.length) {
              return {
                  done: true
              };
          }
          const key = this.keys[index++];


          return {
              value: new KeyValuePair(key, this.Get(key)),
              done: false
          };
      };


      return {next};
  }
}

export class KeyValuePair<TType, TValue> {
  key: TType;

  value: TValue;

  constructor (key:TType, value:TValue) {
	  this.key = key;
	  this.value = value;
  }
}
