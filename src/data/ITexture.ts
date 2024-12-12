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
 * 纹理资源。
 */
export type ITextureSource = ITextureSourceMap[keyof ITextureSourceMap];

export interface ITextureSourceMap
{
    ITextureImageSource: ITextureImageSource;
    ITextureDataSource: ITextureDataSource;
}

/**
 * 纹理的图片资源。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texSubImage2D
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texSubImage3D
 * 
 * 注：不再支持参数 `border`
 * 
 * ### WebGPU
 * 
 * @see GPUQueue.copyExternalImageToTexture
 */
export interface ITextureImageSource
{
    /**
     * 数据类型。
     */
    readonly __type?: "TextureImageSource";

    /**
     * 图片资源。
     */
    image: TexImageSource;

    /**
     * 读取图片上的像素坐标。
     */
    imageOrigin?: IImageOrigin;

    /**
     * 写入纹理的mipmap层级索引。
     */
    mipLevel?: number;

    /**
     * Defines the origin of the copy - the minimum corner of the texture sub-region to copy to/from.
     * Together with `copySize`, defines the full copy sub-region.
     * 
     * 写入纹理的位置。
     */
    textureOrigin?: ITextureOrigin;

    /**
     * Extents of the content to write from `source` to `destination`.
     * 
     * 写入尺寸。
     */
    size?: ITextureSize

    /**
     * 是否Y轴翻转图片。
     * 
     * 注：WebGL（先翻转，再拷贝）与WebGPU（先拷贝，再翻转）处理方式不一样。此次已WebGL为准。当拷贝全图时，效果一致。
     */
    flipY?: boolean;

    /**
     * 是否需要预乘透明度。
     */
    premultipliedAlpha?: boolean;
}

/**
 * 纹理的数据资源。
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texSubImage2D
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texSubImage3D
 * 
 * ### WebGPU
 * 
 * @see GPUQueue.writeTexture
 */
export interface ITextureDataSource
{
    /**
     * 数据类型。
     */
    readonly __type: "TextureDataSource";

    /**
     * 纹理数据。
     */
    data: ArrayBufferView;

    /**
     * Layout of the content in `data`.
     *
     * 纹理数据布局。
     */
    dataLayout?: ITextureDataLayout,

    /**
     * 读取数据图片上的像素坐标。
     */
    dataImageOrigin?: IDataImageOrigin;

    /**
     * 写入mipmap级别。
     *
     * 默认为 0。
     */
    mipLevel?: number,

    /**
     * Defines the origin of the copy - the minimum corner of the texture sub-region to copy to/from.
     * Together with `copySize`, defines the full copy sub-region.
     * 
     * 写入纹理的位置。
     */
    textureOrigin?: ITextureOrigin;

    /**
     * Extents of the content to write from `source` to `destination`.
     * 
     * 写入尺寸。
     */
    size?: ITextureSize
}

/**
 * 纹理数据布局。
 */
export interface ITextureDataLayout
{
    /**
     * 默认为 0。字节偏移，一般用于跳过文件头部非纹理数据部分。
     * 
     * 注：WebGL1不支持。
     */
    offset?: number;

    /**
     * 图片宽度。
     * 
     * 默认值为 ITextureDataSource.size[0] 。
     */
    width?: number;

    /**
     * 单张图片高度。只在纹理为2d纹理数组或者3d纹理时生效。
     * 
     * 默认值为 ITextureDataSource.size[1] 。
     */
    height?: number;
}

/**
 * 图片中的坐标。
 */
export type IImageOrigin = readonly [x: number, y: number];

/**
 * 数据图片中的坐标。depthOrArrayLayers 表示数据中包含有多张图片中的第几张，只在纹理为2d纹理数组或者3d纹理时生效。
 */
export type IDataImageOrigin = readonly [x: number, y: number, depthOrArrayLayers?: number];

/**
 * 图片尺寸
 */
export type IImageSize = readonly [width: number, height: number];

/**
 * 纹理尺寸，包含纹理的宽度、高度以及深度或者层数。
 *
 * depthOrArrayLayers: 当纹理为3d纹理时表示深度，2d纹理数组时表示数组索引，cube纹理时表示6个面的索引。
 */
export type ITextureSize = readonly [width: number, height: number, depthOrArrayLayers?: number];

/**
 * 纹理内的坐标位置。
 */
export type ITextureOrigin = readonly [x: number, y: number, depthOrArrayLayers?: number];

/**
 * 纹理规格维度。
 */
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