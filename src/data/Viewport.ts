import { Data } from "./Data";

/**
 * 视窗。
 *
 * 包含以下限制。
 * * x ≥ 0
 * * y ≥ 0
 * * width ≥ 0
 * * height ≥ 0
 * * x + width ≤ this.[[attachment_size]].width
 * * y + height ≤ this.[[attachment_size]].height
 * * 0.0 ≤ minDepth ≤ 1.0
 * * 0.0 ≤ maxDepth ≤ 1.0
 * * minDepth ≤ maxDepth
 *
 * {@link WebGLRenderingContextBase.viewport}
 *
 * @see https://gpuweb.github.io/gpuweb/#dom-gpurenderpassencoder-setviewport
 *
 */
export class Viewport extends Data
{
    /**
     * 是否为Y轴朝上。
     *
     * WebGL中Y轴朝上，WebGPU中Y轴朝下。
     *
     * 默认为 ture。
     */
    isYup?: boolean = true;

    /**
     * 视窗水平坐标（像素）。
     *
     * x ≥ 0
     *
     * 默认为 0 。
     */
    x?: number = 0;

    /**
     * 视窗垂直坐标（像素）。
     *
     * y ≥ 0
     *
     * 默认为 0 。
     */
    y?: number = 0;

    /**
     * 视窗宽度（像素）。
     *
     * width ≥ 0
     *
     * 默认为画布宽度或者渲染通道的附件宽度。
     */
    width: number;

    /**
     * 视窗高度（像素）。
     *
     * height ≥ 0
     *
     * 默认为画布高度或者渲染通道的附件高度。
     */
    height: number;
}
