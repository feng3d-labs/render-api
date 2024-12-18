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
 * @see https://gpuweb.github.io/gpuweb/#dom-gpurenderpassencoder-setviewport
 */
export interface IViewport
{
    /**
     * 视窗X轴最小值（像素）。
     * 
     * x ≥ 0
     */
    x: number,

    /**
     * 视窗Y轴最小值（像素）。
     * 
     * y ≥ 0
     */
    y: number,

    /**
     * 视窗宽度（像素）。
     * 
     * width ≥ 0
     */
    width: number,

    /**
     * 视窗高度（像素）。
     * 
     * height ≥ 0
     */
    height: number,
}
