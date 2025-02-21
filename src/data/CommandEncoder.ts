import { CopyBufferToBuffer } from "./CopyBufferToBuffer";
import { CopyTextureToTexture } from "./CopyTextureToTexture";
import { RenderPass } from "./RenderPass";

/**
 * 命令编码器。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/GPUCommandEncoder
 */
export class CommandEncoder
{
    /**
     * 通道编码器列表。
     *
     * 包括计算通道编码器、渲染通道编码器 以及 GPU中缓存与纹理之间拷贝。
     */
    passEncoders: IPassEncoder[] = [];
}

/**
 * 通道编码器。
 *
 * 如需扩展 IPassEncoder ，请在 IPassEncoderMap 中进行添加。
 */
export type IPassEncoder = IPassEncoderMap[keyof IPassEncoderMap];

/**
 * 如需扩展 IPassEncoder ，请在 IPassEncoderMap 中进行添加。
 */
export interface IPassEncoderMap
{
    /**
     * 渲染通道。
     */
    IRenderPass: RenderPass;

    /**
     * 纹理之间拷贝。
     */
    ICopyTextureToTexture: CopyTextureToTexture;

    ICopyBufferToBuffer: CopyBufferToBuffer;
}

