/**
 * 数据基类。
 */
export class Data
{
    static getInstance<T>(this: new () => T, source: T): T
    {
        if (!source) return undefined;
        if (source instanceof this) return source;

        let instance = this["cache"].get(source);

        if (!instance)
        {
            instance = new this();
            Object.assign(instance, source);
        }

        return instance;
    }
    protected static cache = new Map();
}