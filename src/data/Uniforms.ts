import { BufferBinding, IBufferBindingItem } from "./BufferBinding";

/**
 * Uniform 数据
 */
export class Uniforms
{
    [key: string]: IUniformType;
}

/**
 * Uniform 类型
 */
export type IUniformType = IUniformTypeMap[keyof IUniformTypeMap];

export interface IUniformTypeMap
{
    /**
     * 缓冲区绑定。
     */
    IBufferBinding: BufferBinding;
    IBufferBindingItem: IBufferBindingItem;
}
