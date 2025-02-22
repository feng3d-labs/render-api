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

        console.assert(cls !== Data as any || !!__type__, `直接使用 Data.getInstance 时，必须定义属性 __type__ ！`);

        if (__type__)
        {
            cls = Data.classMap.get(__type__);
            console.assert(!!cls, `类型 ${__type__} 未定义，请使用 @Data.reg 进行注册！`);
        }

        instance = new cls();

        this['assign'](instance, source);

        Data.cache.set(source, instance);

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
        console.assert(!!__type__, `类型 ${cls.name} 属性 __type__ 未定义。`);
        //
        Data.classMap.set(__type__, cls);
    }

    static getCls(__type__: string)
    {
        return Data.classMap.get(__type__);
    }

    static assign(target: any, source: any)
    {
        Object.keys(source).forEach((key) =>
        {
            setValue(target, source, key);
        });

        function setValue(target: any, source: any, key: string)
        {
            const value = source[key];

            // 基本类型
            if (!value || typeof value !== 'object' || Array.isArray(value))
            {
                target[key] = value;
                return;
            }

            // 处理数据类型
            if (value['__type__'])
            {
                target[key] = Data.getInstance(value);
                return;
            }

            // // 处理数组
            // if (Array.isArray(value))
            // {
            //     target[key] = [];
            //     target[key].length = value.length;
            //     value.forEach((_item, i) =>
            //     {
            //         setValue(target[key], value, i as any);
            //     });
            //     return;
            // }

            // 处理对象
            const oldValue = target[key];
            if (oldValue?.constructor?.getInstance)
            {
                target[key] = oldValue.constructor.getInstance(value);
                return;
            }

            // 默认处理
            target[key] = value;
        }
    }

    protected static cache = new Map();
    protected static classMap = new Map();
}
