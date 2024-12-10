import { ICanvasTexture } from "./ICanvasTexture";
import { ITextureSource } from "./ITextureSource";

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
     * The width, height, and depth or layer count of the texture.
     *
     * 由于通过初始化时写入的资源自动计算尺寸处理所有情况难度很大且容易出错，该属性在初始化时必须设置。
     * 
     * 修改尺寸将会引发纹理销毁，使用时重新创建新纹理。
     */
    size: ITextureSize;

    /**
     * 纹理资源。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texSubImage2D
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texSubImage3D
     * 
     * ### WebGPU
     * 
     * @see GPUQueue.copyExternalImageToTexture
     * @see GPUQueue.writeTexture
     */
    sources?: readonly ITextureSource[];

    /**
     * 纹理维度，默认为 "2d" 。
     * 
     * WebGL中不支持 "1d" "cube-array"。
     */
    readonly dimension?: ITextureDimension;

    /**
     * 纹理格式。 默认为 "rgba8unorm"，
     */
    readonly format?: ITextureFormat;

    /**
     * The number of mip levels the texture will contain.
     */
    readonly mipLevelCount?: number;

    /**
     * 是否生成mipmap
     */
    readonly generateMipmap?: boolean;
}

/**
 * 图片尺寸
 */
export type IImageSize = readonly [width: number, height: number];

/**
 * 纹理尺寸，包含纹理的宽度、高度以及深度或者层数。
 */
export type ITextureSize = readonly [width: number, height: number, depthOrArrayLayers?: number];

/**
 * 纹理内的坐标位置。
 */
export type ITextureOrigin = readonly [x: number, y: number, depthOrArrayLayers?: number];

export type ITextureDimension = "1d" | "2d" | "2d-array" | "cube" | "cube-array" | "3d";

/**
 * 参考 GPUTextureFormat
 */
export type ITextureFormat =

    | "r8unorm"
    | "r8snorm"
    | "r8uint"
    | "r8sint"
    | "r16uint"
    | "r16sint"
    | "r16float"
    | "rg8unorm"
    | "rg8snorm"
    | "rg8uint"
    | "rg8sint"
    | "r32uint"
    | "r32sint"
    | "r32float"
    | "rg16uint"
    | "rg16sint"
    | "rg16float"
    | "rgba8unorm"
    | "rgba8unorm-srgb"
    | "rgba8snorm"
    | "rgba8uint"
    | "rgba8sint"
    | "bgra8unorm"
    | "bgra8unorm-srgb"
    | "rgb9e5ufloat"
    | "rgb10a2uint"
    | "rgb10a2unorm"
    | "rg11b10ufloat"
    | "rg32uint"
    | "rg32sint"
    | "rg32float"
    | "rgba16uint"
    | "rgba16sint"
    | "rgba16float"
    | "rgba32uint"
    | "rgba32sint"
    | "rgba32float"
    | "stencil8"
    | "depth16unorm"
    | "depth24plus"
    | "depth24plus-stencil8"
    | "depth32float"
    | "depth32float-stencil8"
    | "bc1-rgba-unorm"
    | "bc1-rgba-unorm-srgb"
    | "bc2-rgba-unorm"
    | "bc2-rgba-unorm-srgb"
    | "bc3-rgba-unorm"
    | "bc3-rgba-unorm-srgb"
    | "bc4-r-unorm"
    | "bc4-r-snorm"
    | "bc5-rg-unorm"
    | "bc5-rg-snorm"
    | "bc6h-rgb-ufloat"
    | "bc6h-rgb-float"
    | "bc7-rgba-unorm"
    | "bc7-rgba-unorm-srgb"
    | "etc2-rgb8unorm"
    | "etc2-rgb8unorm-srgb"
    | "etc2-rgb8a1unorm"
    | "etc2-rgb8a1unorm-srgb"
    | "etc2-rgba8unorm"
    | "etc2-rgba8unorm-srgb"
    | "eac-r11unorm"
    | "eac-r11snorm"
    | "eac-rg11unorm"
    | "eac-rg11snorm"
    | "astc-4x4-unorm"
    | "astc-4x4-unorm-srgb"
    | "astc-5x4-unorm"
    | "astc-5x4-unorm-srgb"
    | "astc-5x5-unorm"
    | "astc-5x5-unorm-srgb"
    | "astc-6x5-unorm"
    | "astc-6x5-unorm-srgb"
    | "astc-6x6-unorm"
    | "astc-6x6-unorm-srgb"
    | "astc-8x5-unorm"
    | "astc-8x5-unorm-srgb"
    | "astc-8x6-unorm"
    | "astc-8x6-unorm-srgb"
    | "astc-8x8-unorm"
    | "astc-8x8-unorm-srgb"
    | "astc-10x5-unorm"
    | "astc-10x5-unorm-srgb"
    | "astc-10x6-unorm"
    | "astc-10x6-unorm-srgb"
    | "astc-10x8-unorm"
    | "astc-10x8-unorm-srgb"
    | "astc-10x10-unorm"
    | "astc-10x10-unorm-srgb"
    | "astc-12x10-unorm"
    | "astc-12x10-unorm-srgb"
    | "astc-12x12-unorm"
    | "astc-12x12-unorm-srgb";