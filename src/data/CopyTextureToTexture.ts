import { Data } from "./Data";
import { ImageCopyTexture } from "./ImageCopyTexture";
import { ITextureSize } from "./Texture";

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
    readonly __type__: "CopyTextureToTexture" = "CopyTextureToTexture";

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
