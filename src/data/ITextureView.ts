import { ITexture } from "./ITexture";

/**
 * 如需扩展 ITextureLike，则需在 ITextureMap 中添加类型。
 */
export interface ITextureMap
{
    /**
     * 正常纹理。
     */
    ITexture: ITexture;
}

/**
 * 类似纹理，包含画布纹理以及正常纹理。
 * 
 * 如需扩展 ITextureLike，则需在 ITextureMap 中添加类型。
 */
export type ITextureLike = ITextureMap[keyof ITextureMap];

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