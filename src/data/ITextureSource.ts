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
export type ITextureSource = ITextureImageSource | ITextureBufferSource;

/**
 * 纹理的图片资源。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texSubImage2D
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texSubImage3D
 * 
 * ### WebGPU
 * 
 * @see GPUQueue.copyExternalImageToTexture
 */
export interface ITextureImageSource
{

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
export interface ITextureBufferSource
{

}