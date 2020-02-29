import Quene from "./Quene";

export class Tree<T> {
    root:TreeNode<T>

    constructor (value:T) {
        this.root = new TreeNode<T>(value);
    }

    Remove (predicate:(value:T)=>boolean) {
        let current:TreeNode<T>|undefined = this.root;
        const quene = new Quene<TreeNode<T>>();

        while (current) {
            if (predicate(current.value)) {
                current.parent?.Remove(current.value);
                current = quene.DeQuene();
                continue;
            }
            for (const node of current.children) {
                quene.EnQuene(node);
            }

            current = quene.DeQuene();
        }
    }

    Find (predicate:(value:T)=>boolean) {
        let current:TreeNode<T>|undefined = this.root;
        const result:TreeNode<T>[] = [];
        const quene = new Quene<TreeNode<T>>();

        while (current) {
            for (const node of current.children) {
                quene.EnQuene(node);
            }

            if (predicate(current.value)) {
                result.push(current);
            }

            current = quene.DeQuene();
        }

        return result;
    }

    ToList () {
        let current:TreeNode<T>|undefined = this.root;
        const result:TreeNode<T>[] = [];
        const quene = new Quene<TreeNode<T>>();

        while (current) {
            for (const node of current.children) {
                quene.EnQuene(node);
            }

            result.push(current);
            current = quene.DeQuene();
        }

        return result;
    }
}


export class TreeNode<T> {
    children:TreeNode<T>[]=[]

    value:T

    parent:TreeNode<T>|undefined

    Remove (value:T) {
        this.children = this.children.filter((node) => node.value === value);
    }

    Add (value:T) {
        this.children.push(new TreeNode(value, this));
    }

    constructor (value:T, parent?:TreeNode<T>) {
        this.value = value;
        this.parent = parent;
    }
}
