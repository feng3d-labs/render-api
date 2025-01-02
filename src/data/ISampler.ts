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
     * 默认 "REPEAT"。
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/samplerParameter#gl.texture_wrap_t
     * @see https://gpuweb.github.io/gpuweb/#dom-gpusamplerdescriptor-addressmodev
     */
    addressModeV?: IAddressMode;

    /**
     * 用于指定纹理在深度方向（即R或W坐标轴）上的寻址模式。用于3D纹理或者纹理数组。
     * 
     * 默认 "REPEAT"。
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/samplerParameter#gl.texture_wrap_r
     * @see https://gpuweb.github.io/gpuweb/#dom-gpusamplerdescriptor-addressmodew
     */
    addressModeW?: IAddressMode;
}

/**
 * 纹理坐标寻址模式。
 */
export type IAddressMode = "clamp-to-edge" | "repeat" | "mirror-repeat";
