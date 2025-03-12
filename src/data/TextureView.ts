import { Texture } from "./Texture";

/**
 * 纹理视图。
 */
export interface TextureView
{
    __type__?: "TextureView";

    /**
     * 标签。
     *
     * 用于调试。
     */
    readonly label?: string;

    /**
     * 产生视图的纹理。
     */
    readonly texture: TextureLike;

    /**
     * mipmap级别。
     *
     * 默认为 0。
     */
    readonly baseMipLevel?: number;

    /**
     * 3d纹理的深度索引、纹理数组中的层次、立方体纹理的面索引。
     *
     * 默认为 0。
     */
    readonly baseArrayLayer?: number;
}

/**
 * 类似纹理，包含画布纹理以及正常纹理。
 *
 * 如需扩展 ITextureLike，则需在 ITextureMap 中添加类型。
 */
export type TextureLike = TextureLikeMap[keyof TextureLikeMap];

/**
 * 如需扩展 ITextureLike，则需在 ITextureMap 中添加类型。
 */
export interface TextureLikeMap
{
    /**
     * 正常纹理。
     */
    Texture: Texture;
}