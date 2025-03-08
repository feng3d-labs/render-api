import { Texture } from "./Texture";

/**
 * 纹理视图。
 */
export class TextureView
{
    __type__?: "TextureView" = "TextureView";

    /**
     * 标签。
     *
     * 用于调试。
     */
    readonly label?: string;

    /**
     * 产生视图的纹理。
     */
    readonly texture: ITextureLike;

    /**
     * mipmap级别。
     *
     * 默认为 0。
     */
    readonly baseMipLevel?: number = 0;

    /**
     * 3d纹理的深度索引、纹理数组中的层次、立方体纹理的面索引。
     *
     * 默认为 0。
     */
    readonly baseArrayLayer?: number = 0;
}

/**
 * 类似纹理，包含画布纹理以及正常纹理。
 *
 * 如需扩展 ITextureLike，则需在 ITextureMap 中添加类型。
 */
export type ITextureLike = ITextureLikeMap[keyof ITextureLikeMap];

/**
 * 如需扩展 ITextureLike，则需在 ITextureMap 中添加类型。
 */
export interface ITextureLikeMap
{
    /**
     * 正常纹理。
     */
    Texture: Texture;
}