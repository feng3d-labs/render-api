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
     * 缓冲区尺寸。
     * 
     * 如果没有设置，引擎将设置为 data 的字节长度。
     */
    readonly size: number;

    /**
     * 缓冲区数据。
     */
    data?: TypedArray;

    /**
     * 写缓冲区。
     */
    writeBuffers?: IWriteBuffer[];
}

export interface IWriteBuffer
{
    bufferOffset?: number;

    /**
     * 写入缓冲区数据。
     */
    data: ArrayBufferLike | TypedArray;

    /**
     * 数据偏移。
     * 
     * 默认为 0 。
     * 
     * 当写入的数据类型为 {@link ArrayBufferLike} 时单位为字节，当数据类型为 {@link TypedArray} 时单位为元素。
     */
    dataOffset?: number;

    /**
     * 写入数据尺寸。
     */
    size?: number;
}
