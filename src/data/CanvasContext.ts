import { Data } from "./Data";

/**
 * @see GPUCanvasContext
 * @see HTMLCanvasElement.getContext
 * @see GPUCanvasContext.configure
 */
@Data.reg
export class CanvasContext extends Data
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
