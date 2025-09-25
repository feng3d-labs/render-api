import { TypedArray } from '../types/TypedArray';
import { WriteBuffer } from './WriteBuffer';

/**
 * 缓冲区
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData
 *
 * {@link GPUBufferDescriptor}
 *
 * {@link GPUBuffer}
 */
export interface Buffer
{
    /**
     * 标签。
     *
     * 用于调试。
     *
     * 注：初始化GPUBuffer后将无法修改。
     */
    readonly label?: string;

    /**
     * 缓冲区尺寸，单位为字节。
     *
     * 尺寸必须为4的倍数。
     *
     * 注：初始化GPUBuffer后将无法修改。
     */
    readonly size: number;

    /**
     * 缓冲区数据。
     *
     * 注：初始化GPUBuffer后将无法直接修改数据，只能通过 {@link writeBuffers} 修改。
     */
    readonly data?: TypedArray;

    /**
     * 写缓冲区。
     *
     * {@link GPUQueue.writeBuffer}
     */
    readonly writeBuffers?: WriteBuffer[];
}
