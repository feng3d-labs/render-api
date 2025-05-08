import { CanvasContext } from "./CanvasContext";

/**
 * 画布纹理，从画布的上下文获取纹理
 */
export interface CanvasTexture
{
    /**
     * 画布上下文。
     */
    context: CanvasContext;

    /**
     * 画布尺寸发生变化后引擎自动递增。
     *
     * 引擎内部监听这个值，在画布尺寸发生变化后重新获取纹理。
     *
     * @private
     */
    _canvasSizeVersion?: number;
}
