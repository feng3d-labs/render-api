import { TypedArray } from "./TypedArray";

/**
 * Uniform 类型
 */
export type IUniformType = IUniformTypeMap[keyof IUniformTypeMap];

/**
 * Uniform 数据
 */
export interface IUniforms
{
    [key: string]: IUniformType;
}

export interface IUniformTypeMap
{
    /**
     * 缓冲区绑定。
     */
    IBufferBinding: IBufferBinding;
}

/**
 * 缓冲区绑定。
 *
 * WebGL 统一块(Uniform Block) 数据
 * WebGPU 缓冲区绑定（GPUBufferBinding）
 *
 * @see GPUBufferBinding
 */
export interface IBufferBinding
{
    [name: string]: IBufferBindingItem;

    /**
     * 如果未设置引擎将自动生成。
    */
    readonly bufferView?: TypedArray;
}

export type IUniformDataItem = number | number[] | number[][] | TypedArray | TypedArray[]
    | { toArray(): number[] | Float32Array }
    | { toArray(): number[] | Float32Array }[]
    ;
export type IBufferBindingItem = IUniformDataItem | { [key: string]: IBufferBindingItem };