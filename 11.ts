type MapArray<T extends ReadonlyArray<any>, Acc extends ReadonlyArray<any> = []> =
  T['length'] extends Acc['length'] ?
    Acc :
    MapArray<T, readonly [...Acc, SantaListProtector<T[Acc['length']]>]>;

type SantaListProtector<T> = T extends Record<string, unknown>
  ? {readonly [K in keyof T]: SantaListProtector<T[K]>}
	 : T extends Array<any>
	    ? MapArray<T>
	  : T
