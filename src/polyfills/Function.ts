export { };
// 扩展Function接口用于添加自定义方法
declare global
{
    interface Function
    {
        /**
         * 注册对象初始化函数
         * @template T 构造函数类型
         * @param initFunc 初始化函数，接收实例对象并返回清理函数
         */
        _reg<T>(this: new (...args: any) => T, initFunc: (obj: T) => (() => void)): void

        /**
         * 初始化对象时调用注册的初始化函数
         * @template T 实例类型
         * @param obj 要初始化的对象实例
         * @returns 初始化后的对象
         */
        _init<T>(this: new (...args: any) => T, obj: T & {}): T;

        /**
         * 执行对象关联的清理函数
         * @template T 实例类型
         * @param obj 要清理的对象实例
         * @returns 清理后的对象
         */
        _del<T>(this: new (...args: any) => T, obj: T & {}): T;

        /** @internal 存储初始化函数的集合 */
        __initFuncs: ((obj: any) => (() => void))[];
        /** @internal 维护对象与清理函数的映射关系 */
        __map: Map<any, (() => void)[]>;
    }

    interface Object
    {
        /**
         * 执行对象清理操作，触发构造函数级的清理逻辑
         * @returns 清理后的对象实例
         */
        _del(): this;
    }
}

/**
 * 实现_reg方法：
 * 1. 初始化__initFuncs数组
 * 2. 将初始化函数添加到数组
 * 3. 对现有所有已初始化对象应用新添加的初始化函数
 */
Function.prototype._reg = function (initFunc: (obj: any) => (() => void))
{
    if (typeof this !== 'function' || this === Object as any) throw new Error("只能用于不是Object的构造函数！");
    this.__initFuncs || (this.__initFuncs = []);
    this.__initFuncs.push(initFunc);
    this.__map?.forEach((delFuncs, key) =>
    {
        delFuncs.push(initFunc(key));
    });
};

/**
 * 实现_init方法：
 * 1. 防止直接使用Object._init
 * 2. 初始化映射表__map
 * 3. 为对象执行所有注册的初始化函数
 * 4. 存储生成的清理函数
 */
Function.prototype._init = function (obj: any)
{
    if (typeof this !== 'function' || this === Object as any) throw new Error("只能用于不是Object的构造函数！");
    this.__map || (this.__map = new Map());
    if (this.__map.has(obj)) return;
    this.__initFuncs || (this.__initFuncs = []);
    const delFuncs = this.__initFuncs.map((func) => func(obj));
    this.__map.set(obj, delFuncs);
    // 为实例添加_del方法
    obj._del = () => this._del(obj);
    return obj;
}

/**
 * 实现_del方法：
 * 1. 检查对象是否存在清理函数
 * 2. 依次执行所有关联的清理函数
 * 3. 清理完成后移除映射关系
 */
Function.prototype._del = function (obj: any)
{
    if (!this.__map || !this.__map.has(obj)) return;
    const delFuncs = this.__map.get(obj);
    delFuncs!.forEach((func) => func());
    this.__map.delete(obj);
    delete obj._del;
    return obj;
}
