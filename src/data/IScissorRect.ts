/**
 * 剪刀盒。
 * 
 * 设置了一个剪刀盒，它将绘图限制为一个指定的矩形。
 * 
 * Sets the scissor rectangle used during the rasterization stage. After transformation into viewport coordinates any fragments which fall outside the scissor rectangle will be discarded.
 *
 * 光栅化阶段中使用的剪刀矩形。
 *
 * 需要满足以下条件。
 * * x+width ≤ this.[[attachment_size]].width.
 * * y+height ≤ this.[[attachment_size]].height.
 * 
 * {@link GPURenderPassEncoder.setScissorRect}
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/scissor
 * @see https://www.orillusion.com/zh/webgpu.html#dom-gpurenderpassencoder-setscissorrect
 * 
 */
export interface IScissorRect
{
    /**
     * 数据是否来着WebGL。
     *
     * WebGL以左下角为起始点，WebGPU以左上角为起点。
     */
    readonly fromWebGL?: boolean;

    /**
     * 剪刀盒X轴最小值（像素）。
     */
    readonly x: number,

    /**
     * 剪刀盒Y轴最小值（像素）。
     */
    readonly y: number,

    /**
     * 剪刀盒宽度（像素）。
     */
    readonly width: number,

    /**
     * 剪刀盒高度（像素）。
     */
    readonly height: number,
}
