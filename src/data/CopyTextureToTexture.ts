import { Data } from "./Data";
import { ITextureOrigin, ITextureSize } from "./Texture";
import { ITextureLike } from "./TextureView";

/**
 * GPU纹理间拷贝。
 *
 * {@link GPUCommandEncoder.copyTextureToTexture}
 */
@Data.reg
export class CopyTextureToTexture extends Data
{
    /**
     * 数据类型。
     */
    readonly __type: "CopyTextureToTexture" = "CopyTextureToTexture";

    /**
     * Combined with `copySize`, defines the region of the source texture subresources.
     */
    source: ImageCopyTexture;

    /**
     * Combined with `copySize`, defines the region of the destination texture subresources.
     */
    destination: ImageCopyTexture;

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
export class ImageCopyTexture
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