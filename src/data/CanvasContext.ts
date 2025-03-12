/**
 * 画布上下文
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
