/**
 * @see GPUCanvasContext
 * @see HTMLCanvasElement.getContext
 * @see GPUCanvasContext.configure
 */
export interface CanvasContext 
{
    __type__?: "CanvasContext";

    /**
     * 画布id
     */
    readonly canvasId: string;

    /**
     * 画布配置。默认有引擎自动设置。
     */
    // configuration?: IGPUCanvasConfiguration;
}
