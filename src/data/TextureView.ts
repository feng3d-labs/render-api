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
     *
     * 注：修改后将重新创建视图。
     */
    readonly label?: string;

    /**
     * 产生视图的纹理。
     *
     * 注：修改后将重新创建视图。
     */
    readonly texture: TextureLike;

    /**
     * mipmap级别。
     *
     * 默认为 0。
     *
     * 注：修改后将重新创建视图。
     */
    readonly baseMipLevel?: number;

    /**
     * 3d纹理的深度索引、纹理数组中的层次、立方体纹理的面索引。
     *
     * 默认为 0。
     *
     * 注：修改后将重新创建视图。
     */
    readonly baseArrayLayer?: number;

    /**
     * 数组层数。
     *
     * 默认为 1。
     *
     * 被用作颜色附件时，必须为 1。而其他情况默认为 undefined（使用所有剩余层）。
     *
     * 注：修改后将重新创建视图。
     */
    readonly arrayLayerCount?: number;

    /**
     * 是否被用作颜色附件。
     *
     * 注：由 WebGPU 渲染通道颜色附件自动设置。
     */
    readonly isUsedAsColorAttachment?: boolean;
}
