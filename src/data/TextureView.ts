import { TextureLike } from './Texture';

/**
 * 纹理视图。
 */
export interface TextureView
{
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
