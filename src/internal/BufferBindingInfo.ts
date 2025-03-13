/**
 * 缓冲区绑定信息。
 */
export interface BufferBindingInfo
{
    size: number;
    items: {
        paths: string[];
        offset: number;
        size: number;
        Cls: Float32ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Int16ArrayConstructor;
    }[]
}
