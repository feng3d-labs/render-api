export class DataProxy
{
    static addInitFunc(func: (obj: any) => ((obj: any) => void))
    {
        this._initFuncs || (this._initFuncs = []);
        this._initFuncs.push(func);
        if (this._map)
        {
            this._map.forEach((delFuncs, key) =>
            {
                delFuncs.push(func(key));
            });
        }
    }

    static init(obj: any)
    {
        this._map || (this._map = new Map());
        if (this._map.has(obj)) return;
        this._initFuncs || (this._initFuncs = []);
        const delFuncs = this._initFuncs.map((func) => func(obj));
        this._map.set(obj, delFuncs);
        return obj;
    }

    static del(obj: any)
    {
        if (!this._map.has(obj)) return;
        const delFuncs = this._map.get(obj);
        delFuncs!.forEach((func) => func(obj));
        return obj;
    }
    private static _initFuncs: ((obj: any) => ((obj: any) => void))[];
    protected static _map: Map<any, ((macro: any) => void)[]>;
}
