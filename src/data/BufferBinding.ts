import { TypedArray } from "../types/TypedArray";

/**
 * 缓冲区绑定。
 *
 * WebGL 统一块(Uniform Block) 数据
 * WebGPU 缓冲区绑定（GPUBufferBinding）
 *
 * @see GPUBufferBinding
 */
export interface BufferBinding
{
    [name: string]: BufferBindingItem;

    /**
     * 如果未设置引擎将自动生成。
     */
    readonly bufferView?: TypedArray;
}

export type UniformDataItem = number | number[] | number[][] | TypedArray | TypedArray[]
    | { toArray(): number[] | Float32Array }
    | { toArray(): number[] | Float32Array }[]
    ;
export type BufferBindingItem = UniformDataItem | { [key: string]: BufferBindingItem };
