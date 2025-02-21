/**
 * 为颜色或alpha通道定义相应渲染目标的混合行为。
 *
 * ### WebGL
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquation
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc
 *
 * ### WebGPU
 *
 * @see https://gpuweb.github.io/gpuweb/#dictdef-gpucolortargetstate
 */
export class BlendComponent
{
    /**
     * 混合方式。
     *
     * 默认为 "add"。
     *
     * 当 `operation` 值为 "min" 或 "max" 时， `srcFactor` 与 `dstFactor` 将会被引擎自动使用 "one"。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquation
     */
    readonly operation?: IBlendOperation = "add";

    /**
     * 源混合因子。
     *
     * 默认为 "one"。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc
     */
    readonly srcFactor?: IBlendFactor = "one";

    /**
     * 目标混合因子。
     *
     * 默认为 "zero"。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc
     */
    readonly dstFactor?: IBlendFactor = "zero";
}

export type IBlendOperation = "add" | "subtract" | "reverse-subtract" | "min" | "max";

/**
 * @see https://gpuweb.github.io/gpuweb/#enumdef-gpublendfactor
 */
export type IBlendFactor = IBlendFactorMap[keyof IBlendFactorMap];

export interface IBlendFactorMap
{
    "zero": "zero";
    "one": "one";
    "src": "src";
    "one-minus-src": "one-minus-src";
    "src-alpha": "src-alpha";
    "one-minus-src-alpha": "one-minus-src-alpha";
    "dst": "dst";
    "one-minus-dst": "one-minus-dst";
    "dst-alpha": "dst-alpha";
    "one-minus-dst-alpha": "one-minus-dst-alpha";
    "src-alpha-saturated": "src-alpha-saturated";
    "constant": "constant";
    "one-minus-constant": "one-minus-constant";
}
