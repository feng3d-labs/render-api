import { CanvasContext } from "./CanvasContext";

/**
 * 画布纹理，从画布的WebGPU上下文获取纹理
 *
 * 注：只在WebGPU上支持。
 */
export interface CanvasTexture
{
    __type__?: "CanvasTexture";

    context: CanvasContext;
}
