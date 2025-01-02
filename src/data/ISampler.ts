/**
 * 纹理采样器。
 */
export interface ISampler
{
    /**
     * 用于指定纹理在水平方向（即S或U坐标轴）上的寻址模式。
     * 
     * 默认 "repeat"。
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/samplerParameter#gl.texture_wrap_s
     * @see https://gpuweb.github.io/gpuweb/#dom-gpusamplerdescriptor-addressmodeu
     */
    addressModeU?: IAddressMode;

    /**
     * 用于指定纹理在垂直方向（即T或V坐标轴）上的寻址模式。
     * 
     * 默认 "repeat"。
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/samplerParameter#gl.texture_wrap_t
     * @see https://gpuweb.github.io/gpuweb/#dom-gpusamplerdescriptor-addressmodev
     */
    addressModeV?: IAddressMode;

    /**
     * 用于指定纹理在深度方向（即R或W坐标轴）上的寻址模式。用于3D纹理或者纹理数组。
     * 
     * 默认 "repeat"。
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/samplerParameter#gl.texture_wrap_r
     * @see https://gpuweb.github.io/gpuweb/#dom-gpusamplerdescriptor-addressmodew
     */
    addressModeW?: IAddressMode;

    /**
     * 指定样本足迹小于或等于一个纹素时的采样行为
     * 
     * 默认 "nearest"。
     * 
     * @see https://www.orillusion.com/zh/webgpu.html#dom-gpusamplerdescriptor-magfilter
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/samplerParameter#gl.texture_mag_filter
     */
    magFilter?: IFilterMode;

    /**
     * 指定样本足迹大于一个纹素时的采样行为。
     * 
     * 默认 "nearest"。
     * 
     * 注：WebGL中如果使用mipmap相关值时需要设置 {@link ISampler.mipmapFilter} 值。
     * 
     * @see https://www.orillusion.com/zh/webgpu.html#dom-gpusamplerdescriptor-minfilter
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/samplerParameter#gl.texture_min_filter
     */
    minFilter?: IFilterMode;

    /**
     * 指定在 mipmap 级别之间进行采样的行为。
     * 
     * 默认 "nearest"。
     * 
     * @see https://www.orillusion.com/zh/webgpu.html#dom-gpusamplerdescriptor-mipmapfilter
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/samplerParameter#gl.texture_min_filter
     */
    mipmapFilter?: IMipmapFilterMode;
}

/**
 * 纹理坐标寻址模式。
 */
export type IAddressMode = "clamp-to-edge" | "repeat" | "mirror-repeat";

/**
 * 描述采样器在采样足迹与一个纹素不完全匹配时的行为。
 */
export type IFilterMode = "nearest" | "linear";

/**
 * 描述采样器在采样足迹与mipmap层级不完全匹配时的行为。
 */
export type IMipmapFilterMode = "nearest" | "linear";
