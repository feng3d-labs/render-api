import { TextureView } from './TextureView';

/**
 * 读取渲染缓冲区或者纹理视图中的像素值。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/readPixels
 */
export interface ReadPixels
{
    /**
     * 读取的纹理视图。
     */
    textureView: TextureView;

    /**
     * 读取位置。
     */
    origin: [x: number, y: number],

    /**
     * 读取尺寸
     */
    copySize: [width: number, height: number]

    /**
     * 用于保存最后结果。
     */
    result?: ArrayBufferView;
}