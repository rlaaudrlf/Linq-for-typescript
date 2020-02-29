import {GUID} from "./GUID";

export const OBJ_HASH:unique symbol = Symbol("objHash");

export interface IMarkedObject {
	[OBJ_HASH]:string;
}

export class ObjectMarker {
    static MarkObject (obj: object): IMarkedObject {
	    const markedObj = obj as IMarkedObject;

	  if (markedObj[OBJ_HASH] == undefined) {
	    markedObj[OBJ_HASH] = new GUID().toString();
	  }

	  return markedObj;
    }

    static IsMarkedObject (obj: object): boolean {
	    const markedObj = obj as IMarkedObject;

	    return markedObj[OBJ_HASH] != undefined;
    }
}
