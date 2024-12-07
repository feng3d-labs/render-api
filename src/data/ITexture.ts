import { ICanvasTexture } from "./ICanvasTexture";

/**
 * 类似纹理，包含画布纹理以及正常纹理。
 */
export type ITextureLike = ICanvasTexture | ITexture;

/**
 * 纹理
 */
export interface ITexture
{
    /**
     * 纹理维度，默认为 "2d" 。
     * 
     * WebGL中不支持 "1d" "cube-array"。
     */
    readonly dimension?: ITextureDimension;
}

export type ITextureDimension = "1d" | "2d" | "2d-array" | "cube" | "cube-array" | "3d";