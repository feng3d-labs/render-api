import { CopyBufferToBuffer } from "./CopyBufferToBuffer";
import { CopyTextureToTexture } from "./CopyTextureToTexture";
import { Data } from "./Data";
import { RenderPass } from "./RenderPass";

/**
 * 命令编码器。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/GPUCommandEncoder
 */
@Data.reg
export class CommandEncoder extends Data
{
    __type__?: "CommandEncoder" = "CommandEncoder";

    /**
     * 通道编码器列表。
     *
     * 包括计算通道编码器、渲染通道编码器 以及 GPU中缓存与纹理之间拷贝。
     */
    get passEncoders(): IPassEncoder[]
    {
        return this._passEncoders;
    }
    set passEncoders(value: IPassEncoder[])
    {
        if (!value) this._passEncoders = [];
        this._passEncoders = value.map((v) =>
        {
            if (v.__type__ === "RenderPass")
            {
                return RenderPass.getInstance(v);
            }
            if (v.__type__ === "CopyTextureToTexture")
            {
                return CopyTextureToTexture.getInstance(v);
            }
            if (v.__type__ === "CopyBufferToBuffer")
            {
                return CopyBufferToBuffer.getInstance(v);
            }
            return v;
        });
    }
    protected _passEncoders?: IPassEncoder[] = [];
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

