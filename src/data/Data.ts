/**
 * 数据基类。
 */
export class Data
{
    static getInstance<T>(this: new () => T, source: T): T
    {
        if (!source) return undefined;
        if (source instanceof this) return source;

        let instance = Data.cache.get(source);
        if (instance) return instance;

        if (source instanceof this) return source;
        let cls = this;

        const __type__ = source['__type__'];

        if (__type__)
        {
            cls = Data.classMap.get(__type__);
            console.assert(!!cls, `类型 ${__type__} 未定义，请使用 @Data.reg 进行注册！`);
        }

        instance = new cls();
        Object.assign(instance, source);

        return instance;
    }

    /**
     * 
     * @param cls 
     */
    static reg(cls: new () => any)
    {
        console.assert(cls['getInstance'] === Data.getInstance, `对象 ${cls} 需要继承 ${Data}`);
        //
        const __type__ = new cls().__type__;
        console.assert(!!__type__, `类型 ${cls} 属性 __type__ 未定义。`);
        //
        Data.classMap.set(__type__, cls);
    }

    static getCls(__type__: string)
    {
        return Data.classMap.get(__type__);
    }

    protected static cache = new Map();
    protected static classMap = new Map();
}
