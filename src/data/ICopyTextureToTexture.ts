import { ITextureOrigin, ITextureSize } from "./ITexture";
import { ITextureLike } from "./ITextureView";

/**
 * GPU纹理间拷贝。
 *
 * {@link GPUCommandEncoder.copyTextureToTexture}
 */
export interface ICopyTextureToTexture
{
    /**
     * 数据类型。
     */
    readonly __type: "CopyTextureToTexture";

    /**
     * Combined with `copySize`, defines the region of the source texture subresources.
     */
    source: IImageCopyTexture,

    /**
     * Combined with `copySize`, defines the region of the destination texture subresources.
     */
    destination: IImageCopyTexture,

    /**
     * 拷贝的尺寸。
     */
    copySize: ITextureSize;
}

/**
 * 被操作的纹理相关信息。
 *
 * {@link GPUCommandEncoder.copyTextureToTexture}
 * {@link GPUImageCopyTexture}
 */
export interface IImageCopyTexture
{
    /**
     * Texture to copy to/from.
     */
    texture: ITextureLike;

    /**
     * Mip-map level of the {@link GPUImageCopyTexture#texture} to copy to/from.
     */
    mipLevel?: number;

    /**
     * Defines the origin of the copy - the minimum corner of the texture sub-region to copy to/from.
     * Together with `copySize`, defines the full copy sub-region.
     */
    origin?: ITextureOrigin;

    /**
     * Defines which aspects of the {@link GPUImageCopyTexture#texture} to copy to/from.
     */
    aspect?: ITextureAspect;
}

export type ITextureAspect = "all" | "stencil-only" | "depth-only";