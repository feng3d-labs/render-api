import { BufferBinding, IBufferBindingItem } from "./BufferBinding";
import { Data } from "./Data";

/**
 * Uniform 数据
 */
@Data.reg
export class Uniforms extends Data
{
    // __type__?: "Uniforms" = "Uniforms";

    // [key: `u_${string}`]: IUniformType;
    
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
