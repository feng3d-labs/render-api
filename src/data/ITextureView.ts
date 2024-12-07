import { ITextureLike } from "./ITexture";

/**
 * 纹理视图。
 */
export interface ITextureView
{
    /**
     * 产生视图的纹理。
     */
    readonly texture: ITextureLike;

    /**
     * mipmap级别。
     *
     * 默认为 0。
    */
    readonly baseMipLevel?: number;

    /**
     * 纹理数组中的层次。
     *
     * 默认为 0。
     */
    readonly baseArrayLayer?: number;
}