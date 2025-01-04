import { TypedArray } from "./TypedArray";

/**
 * 缓冲区
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData
 * 
 * {@link GPUBufferDescriptor}
 * 
 * {@link GPUBuffer}
 */
export interface IBuffer
{
    /**
     * 标签。
     * 
     * 用于调试。
     */
    readonly label?: string;

    /**
     * 缓冲区尺寸，单位为字节。
     * 
     * 尺寸必须为4的倍数。
     */
    readonly size: number;

    /**
     * 缓冲区数据。
     */
    data?: TypedArray;

    /**
     * 写缓冲区。
     * 
     * {@link GPUQueue.writeBuffer}
     */
    writeBuffers?: IWriteBuffer[];
}

export interface IWriteBuffer
{
    /**
     * GPU缓冲区写入起始位置。
     */
    bufferOffset?: number;

    /**
     * 写入缓冲区数据。
     */
    data: ArrayBufferLike | TypedArray;

    /**
     * 读取数据的起始位置。
     * 
     * 默认为 0 。
     * 
     * 当写入的数据类型为 {@link ArrayBufferLike} 时单位为字节，当数据类型为 {@link TypedArray} 时单位为元素。
     */
    dataOffset?: number;

    /**
     * 写入数据尺寸。
     * 
     * 当写入的数据类型为 {@link ArrayBufferLike} 时单位为字节，当数据类型为 {@link TypedArray} 时单位为元素。
     */
    size?: number;
}
