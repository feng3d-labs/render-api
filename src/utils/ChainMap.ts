/**
 * 链式Map。
 *
 * 多个key数组对应一个值。
 *
 * 由于键值可能是字面值也可能是对象，因此无法使用 {@link WeakMap} 来构建{@link ChainMap}，只能使用 {@link Map}。
 */
export class ChainMap<K extends Array<any>, V>
{
    /**
     * 根字典。
     */
    private _map = new Map<any, any>();
    /**
     * 键长度。
     */
    private _keyLength: number;

    /**
     * 获取键对应的值。
     *
     * @param keys 键。
     * @returns 值。
     */
    get(keys: K): V
    {
        __DEV__ && console.assert(keys.length === this._keyLength, `键长度必须为${this._keyLength}。`);

        const keysLength = keys.length;
        let map = this._map;
        let key: any;

        for (let i = 0, n = keysLength - 1; i < n; i++)
        {
            key = keys[i];
            map = map.get(key);

            if (map === undefined) return undefined;
        }

        key = keys[keysLength - 1];
        return map.get(key);
    }

    /**
     * 设置映射。
     *
     * @param keys 键。
     * @param value 值。
     * 
     * @returns 返回设置的值。
     */
    set(keys: K, value: V)
    {
        this._keyLength ??= keys.length;
        __DEV__ && console.assert(keys.length === this._keyLength, `键长度必须为${this._keyLength}。`);

        const keysLength = keys.length;
        let map = this._map;
        let key: any;

        for (let i = 0; i < keysLength - 1; i++)
        {
            key = keys[i];

            if (!map.has(key))
            {
                map.set(key, new Map());
            }

            map = map.get(key);
        }

        key = keys[keysLength - 1];
        map.set(key, value);

        return value;
    }

    /**
     * 删除映射。
     *
     * @param keys 键。
     * @returns 如果找到目标值且被删除返回 `true` ，否则返回 `false` 。
     */
    delete(keys: K): boolean
    {
        __DEV__ && console.assert(keys.length === this._keyLength, `键长度必须为${this._keyLength}。`);

        const keysLength = keys.length;
        let map = this._map;
        let key: any;

        for (let i = 0; i < keysLength - 1; i++)
        {
            key = keys[i];
            map = map.get(key);

            if (map === undefined) return false;
        }

        key = keys[keysLength - 1];
        return map.delete(key);
    }
}
