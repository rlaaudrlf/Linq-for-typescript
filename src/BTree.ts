import Quene from "./Quene";

export class BTree<T> {
    root:BTreeNode<T>

    constructor (value:T) {
        this.root = new BTreeNode<T>(value);
    }

    Remove (predicate:(value:T)=>boolean) {
        let current:BTreeNode<T>|undefined = this.root;
        const quene = new Quene<BTreeNode<T>>();

        while (current) {
            if (predicate(current.value)) {
                current.parent?.Remove(current.value);
                current = quene.DeQuene();
                continue;
            }
            if (current.left) {
                quene.EnQuene(current.left);
            }
            if (current.right) {
                quene.EnQuene(current.right);
            }

            current = quene.DeQuene();
        }
    }

    FInd (predicate:(value:T)=>boolean) {
        let current:BTreeNode<T>|undefined = this.root;
        const result:BTreeNode<T>[] = [];
        const quene = new Quene<BTreeNode<T>>();

        while (current) {
            if (current.left) {
                quene.EnQuene(current.left);
            }
            if (current.right) {
                quene.EnQuene(current.right);
            }

            if (predicate(current.value)) {
                result.push(current);
            }

            current = quene.DeQuene();
        }

        return result;
    }

    ToList () {
        let current:BTreeNode<T>|undefined = this.root;
        const result:BTreeNode<T>[] = [];
        const quene = new Quene<BTreeNode<T>>();

        while (current) {
            if (current.left) {
                quene.EnQuene(current.left);
            }
            if (current.right) {
                quene.EnQuene(current.right);
            }

            result.push(current);
            current = quene.DeQuene();
        }

        return result;
    }
}

export class BTreeNode<T> {
    left:BTreeNode<T>|undefined

    right:BTreeNode<T>|undefined

    value:T

    parent:BTreeNode<T>|undefined

    AddLeft (value:T) {
        this.left = new BTreeNode<T>(value, this);
    }

    AddRight (value:T) {
        this.right = new BTreeNode<T>(value, this);
    }

    Remove (value:T) {
        if (this.left?.value === value) {
            this.left = undefined;
        }

        if (this.right?.value === value) {
            this.right = undefined;
        }
    }

    constructor (value:T, parent?:BTreeNode<T>, left?:BTreeNode<T>, right?:BTreeNode<T>) {
        this.left = left;
        this.right = right;
        this.value = value;
        this.parent = parent;
    }
}
