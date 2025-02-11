import { IImageSize } from "../data/ITexture";

/**
 * 获取纹理的图片资源尺寸。
 *
 * @param texImageSource 纹理的图片资源。
 * @returns
 */
export function getTexImageSourceSize(texImageSource: TexImageSource): IImageSize
{
    let width: number;
    let height: number;
    if (texImageSource instanceof VideoFrame)
    {
        width = texImageSource.codedWidth;
        height = texImageSource.codedHeight;
    }
    else if (texImageSource instanceof HTMLVideoElement)
    {
        width = texImageSource.videoWidth;
        height = texImageSource.videoHeight;
    }
    else
    {
        width = texImageSource.width;
        height = texImageSource.height;
    }

    return [width, height];
}