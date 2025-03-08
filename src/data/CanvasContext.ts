/**
 * @see GPUCanvasContext
 * @see HTMLCanvasElement.getContext
 * @see GPUCanvasContext.configure
 */
export class CanvasContext 
{
    __type__?: "CanvasContext" = "CanvasContext";

    /**
     * 画布id
     */
    readonly canvasId: string;

    /**
     * 画布配置。默认有引擎自动设置。
     */
    // configuration?: IGPUCanvasConfiguration;
}
