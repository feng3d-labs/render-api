import { TypedArray } from "./TypedArray";
import { WriteBuffer } from "./WriteBuffer";

/**
 * 缓冲区
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData
 *
 * {@link GPUBufferDescriptor}
 *
 * {@link GPUBuffer}
 */
export class Buffer
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
    writeBuffers?: WriteBuffer[];
}
