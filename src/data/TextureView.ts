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
     * **WebGPU 与 WebGL 的差异：**
     * - **WebGPU**：当纹理视图用作渲染通道的颜色附件时，`arrayLayerCount` 必须为 1。
     *   如果未指定，默认值为 1，以确保每个颜色附件只绑定一个纹理层。
     * - **WebGL**：WebGL 不支持纹理数组作为渲染目标，此属性在 WebGL 中无效。
     *
     * 注：修改后将重新创建视图。
     */
    readonly arrayLayerCount?: number;
}
