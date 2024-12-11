import { ITextureFormat } from "../data/ITexture";

/**
 * 获取纹理每个像素占用的字节数量。
 * 
 * @param format 
 */
export function getTextureBytesPerPixel(format: ITextureFormat = "rgba8unorm")
{
    const bytesPerPixel = formatMap[format]?.bytesPerPixel;

    console.assert(!!bytesPerPixel, `未处理格式 ${format} ，无法查询到该格式中每个像素占用的字节数量！`);

    return bytesPerPixel;
}

const formatMap: {
    [key: string]: {
        /**
         * 每个像素占用的字节数量
         */
        bytesPerPixel: number
    }
} = {
    "r8unorm": { bytesPerPixel: 1 },
    "r8snorm": { bytesPerPixel: 1 },
    "r8uint": { bytesPerPixel: 1 },
    "r8sint": { bytesPerPixel: 1 },
    "r16uint": { bytesPerPixel: 2 },
    "r16sint": { bytesPerPixel: 2 },
    "r16float": { bytesPerPixel: 2 },
    "rg8unorm": { bytesPerPixel: 2 },
    "rg8snorm": { bytesPerPixel: 2 },
    "rg8uint": { bytesPerPixel: 2 },
    "rg8sint": { bytesPerPixel: 2 },
    "r32uint": { bytesPerPixel: 4 },
    "r32sint": { bytesPerPixel: 4 },
    "r32float": { bytesPerPixel: 4 },
    "rg16uint": { bytesPerPixel: 4 },
    "rg16sint": { bytesPerPixel: 4 },
    "rg16float": { bytesPerPixel: 4 },
    "rgba8unorm": { bytesPerPixel: 4 },
    "rgba8unorm-srgb": { bytesPerPixel: 4 },
    "rgba8snorm": { bytesPerPixel: 4 },
    "rgba8uint": { bytesPerPixel: 4 },
    "rgba8sint": { bytesPerPixel: 4 },
    "bgra8unorm": { bytesPerPixel: 4 },
    "bgra8unorm-srgb": { bytesPerPixel: 4 },
    "rgb9e5ufloat": { bytesPerPixel: 4 },
    "rgb10a2uint": { bytesPerPixel: 4 },
    "rgb10a2unorm": { bytesPerPixel: 4 },
    "rg11b10ufloat": { bytesPerPixel: 4 },
    "rg32uint": { bytesPerPixel: 8 },
    "rg32sint": { bytesPerPixel: 8 },
    "rg32float": { bytesPerPixel: 8 },
    "rgba16uint": { bytesPerPixel: 8 },
    "rgba16sint": { bytesPerPixel: 8 },
    "rgba16float": { bytesPerPixel: 8 },
    "rgba32uint": { bytesPerPixel: 16 },
    "rgba32sint": { bytesPerPixel: 16 },
    "rgba32float": { bytesPerPixel: 16 },
    "stencil8": { bytesPerPixel: 1 },
    "depth16unorm": { bytesPerPixel: 2 },
    "depth24plus": { bytesPerPixel: 3 },
    "depth24plus-stencil8": { bytesPerPixel: 4 },
    "depth32float": { bytesPerPixel: 4 },
    "depth32float-stencil8": { bytesPerPixel: 5 },
    "bc1-rgba-unorm": undefined,
    "bc1-rgba-unorm-srgb": undefined,
    "bc2-rgba-unorm": undefined,
    "bc2-rgba-unorm-srgb": undefined,
    "bc3-rgba-unorm": undefined,
    "bc3-rgba-unorm-srgb": undefined,
    "bc4-r-unorm": undefined,
    "bc4-r-snorm": undefined,
    "bc5-rg-unorm": undefined,
    "bc5-rg-snorm": undefined,
    "bc6h-rgb-ufloat": undefined,
    "bc6h-rgb-float": undefined,
    "bc7-rgba-unorm": undefined,
    "bc7-rgba-unorm-srgb": undefined,
    "etc2-rgb8unorm": undefined,
    "etc2-rgb8unorm-srgb": undefined,
    "etc2-rgb8a1unorm": undefined,
    "etc2-rgb8a1unorm-srgb": undefined,
    "etc2-rgba8unorm": undefined,
    "etc2-rgba8unorm-srgb": undefined,
    "eac-r11unorm": undefined,
    "eac-r11snorm": undefined,
    "eac-rg11unorm": undefined,
    "eac-rg11snorm": undefined,
    "astc-4x4-unorm": undefined,
    "astc-4x4-unorm-srgb": undefined,
    "astc-5x4-unorm": undefined,
    "astc-5x4-unorm-srgb": undefined,
    "astc-5x5-unorm": undefined,
    "astc-5x5-unorm-srgb": undefined,
    "astc-6x5-unorm": undefined,
    "astc-6x5-unorm-srgb": undefined,
    "astc-6x6-unorm": undefined,
    "astc-6x6-unorm-srgb": undefined,
    "astc-8x5-unorm": undefined,
    "astc-8x5-unorm-srgb": undefined,
    "astc-8x6-unorm": undefined,
    "astc-8x6-unorm-srgb": undefined,
    "astc-8x8-unorm": undefined,
    "astc-8x8-unorm-srgb": undefined,
    "astc-10x5-unorm": undefined,
    "astc-10x5-unorm-srgb": undefined,
    "astc-10x6-unorm": undefined,
    "astc-10x6-unorm-srgb": undefined,
    "astc-10x8-unorm": undefined,
    "astc-10x8-unorm-srgb": undefined,
    "astc-10x10-unorm": undefined,
    "astc-10x10-unorm-srgb": undefined,
    "astc-12x10-unorm": undefined,
    "astc-12x10-unorm-srgb": undefined,
    "astc-12x12-unorm": undefined,
    "astc-12x12-unorm-srgb": undefined,
};