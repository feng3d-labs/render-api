import { Buffer } from './Buffer';

/**
 * GPU缓冲区之间拷贝。
 *
 * {@link WebGL2RenderingContextBase.copyBufferSubData}
 * {@link GPUCommandEncoder.copyBufferToBuffer}
 */
export interface CopyBufferToBuffer
{
    /**
     * 数据类型。
     */
    readonly __type__: 'CopyBufferToBuffer';

    /**
     * 源缓冲区。
     */
    source: Buffer;

    /**
     * 默认为0。
     */
    sourceOffset?: number;

    /**
     * 目标缓冲区。
     */
    destination: Buffer;

    /**
     * 默认为0。
     */
    destinationOffset?: number;

    /**
     * 默认为源缓冲区尺寸。
     */
    size?: number;
}
