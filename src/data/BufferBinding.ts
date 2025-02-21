import { TypedArray } from "./TypedArray";

/**
 * 缓冲区绑定。
 *
 * WebGL 统一块(Uniform Block) 数据
 * WebGPU 缓冲区绑定（GPUBufferBinding）
 *
 * @see GPUBufferBinding
 */
export class BufferBinding
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
