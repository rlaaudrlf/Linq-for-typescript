export class LinkList<T> {
  root: LinkNode<T> | undefined;

  end: LinkNode<T> | undefined;

  length=0

  Add (value: T) {
      if (this.end) {
          this.end.Add(value);
      } else {
          this.root = new LinkNode(value);
          this.end = this.root;
      }

      this.length++;
  }

  Where (predicate: (value: T) => boolean): LinkNode<T> | undefined {
      if (!this.root) {
          return undefined;
      }

      return this.root.Where(predicate);
  }

  Find (value: T): LinkNode<T> | undefined {
      if (!this.root) {
          return undefined;
      }

      return this.root.Find(value);
  }

  Finds (value: T) {
      const result: LinkNode<T>[] = [];

      let current: LinkNode<T>|undefined = this.root;

      while (current) {
          const finded = current.Find(value);

          if (!finded) {
              return result;
          }

          result.push(finded);
          current = finded.next;
      }
  }

  GetEnd (): LinkNode<T>|undefined {
      return this.end;
  }

  Delete (value: T):LinkNode<T>|undefined {
      if (!this.root) {
          return undefined;
      }
      const finded = this.Find(value);

      if (finded === this.root) {
          this.root = finded.next;
      } else {
          let next = finded?.pre?.next;

          next = finded?.next;
      }
  }

  [Symbol.iterator]=() => {
      if (!this.root) {
          return {
              value: undefined,
              done: true
          };
      }

      const temp:LinkNode<T> |undefined = new LinkNode(this.root.value);

      temp.next = this.root;

      let current :LinkNode<T> |undefined = temp;
      const next = () => {
          current = current?.next;

          return {
              value: current,
              done: current == undefined
          };
      };


      return {next};
  }
    // deletes (value: T) {}
}

export class LinkNode<T> {
  value: T;

  next: LinkNode<T> | undefined;

  pre: LinkNode<T> | undefined;

  constructor (value: T) {
      this.value = value;
  }

  Add (value: T) {
      const node = new LinkNode<T>(value);

      node.pre = this;
      this.next = node;
  }

  Find (value: T): LinkNode<T>|undefined {
      let current: LinkNode<T>|undefined = this;

      while (current) {
          if (current.value === value) {
              return current;
          }

          current = current.next;
      }

      return current;
  }

  Where (predicate: (value: T) => boolean): LinkNode<T>|undefined {
      let current: LinkNode<T>|undefined = this;

      while (current) {
          if (predicate(current.value)) {
              return current;
          }

          current = current.next;
      }

      return current;
  }
}

