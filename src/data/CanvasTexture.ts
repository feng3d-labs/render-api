import { CanvasContext } from "./CanvasContext";

/**
 * 画布纹理，从画布的上下文获取纹理
 */
export interface CanvasTexture
{
    __type__?: "CanvasTexture";

    /**
     * 画布上下文。
     */
    context: CanvasContext;
}
