/**
 * 画布上下文
 */
export interface CanvasContext 
{
    /**
     * 画布。
     * 
     * 可能是画布的编号，也可能是画布元素或者离屏画布。
     */
    readonly canvasId: string | HTMLCanvasElement | OffscreenCanvas;
}
