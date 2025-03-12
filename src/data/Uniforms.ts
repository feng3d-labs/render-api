import { BufferBinding, BufferBindingItem } from "./BufferBinding";

/**
 * Uniform 数据
 */
export interface Uniforms
{
    __type__?: any;

    [key: string]: IUniformType;
}

/**
 * Uniform 类型
 */
export type IUniformType = UniformTypeMap[keyof UniformTypeMap];

export interface UniformTypeMap
{
    /**
     * 缓冲区绑定。
     */
    IBufferBinding: BufferBinding;
    IBufferBindingItem: BufferBindingItem;
}
