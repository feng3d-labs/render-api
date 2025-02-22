import { Buffer } from "./Buffer";
import { Data } from "./Data";

/**
 * GPU缓冲区之间拷贝。
 *
 * {@link WebGL2RenderingContextBase.copyBufferSubData}
 * {@link GPUCommandEncoder.copyBufferToBuffer}
 */
@Data.reg
export class CopyBufferToBuffer extends Data
{
    /**
     * 数据类型。
     */
    readonly __type__: "CopyBufferToBuffer" = "CopyBufferToBuffer";

    /**
     * 源缓冲区。
     */
    source: Buffer;

    /**
     * 默认为0。
     */
    sourceOffset?: number = 0;

    /**
     * 目标缓冲区。
     */
    destination: Buffer;

    /**
     * 默认为0。
     */
    destinationOffset?: number = 0;

    /**
     * 默认为源缓冲区尺寸。
     */
    size?: number;
}
