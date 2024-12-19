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
}
