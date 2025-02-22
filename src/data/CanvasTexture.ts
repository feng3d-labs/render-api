import { CanvasContext } from "./CanvasContext";
import { Data } from "./Data";

/**
 * 画布纹理，从画布的WebGPU上下文获取纹理
 *
 * 注：只在WebGPU上支持。
 */
export class CanvasTexture extends Data
{
    context: CanvasContext;
}
