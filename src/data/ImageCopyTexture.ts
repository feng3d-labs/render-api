import { ITextureOrigin, Texture } from "./Texture";
import { ITextureLike } from "./TextureView";

/**
 * 被操作的纹理相关信息。
 *
 * {@link GPUCommandEncoder.copyTextureToTexture}
 * {@link GPUImageCopyTexture}
 */
export interface ImageCopyTexture
{
    __type__?: "ImageCopyTexture";

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