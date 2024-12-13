import { IPrimitiveState } from "./IPrimitiveState";

/**
 * 渲染管线。
 */
export interface IRenderPipeline
{
    /**
     * Describes the primitive-related properties of the pipeline.
     * 
     * 图元拓扑结构。
     */
    readonly primitive?: IPrimitiveState;

    /**
     * 顶点着色器阶段描述。
     */
    readonly vertex: IVertexState;

    /**
     * 片段着色器阶段描述。
     */
    readonly fragment?: IFragmentState;

    /**
     * 描述可选的深度模板的测试、运算以及偏差。
     */
    readonly depthStencil?: IDepthStencilState;
}

/**
 * 深度模板状态。
 */
export interface IDepthStencilState
{
    // /**
    //  * 深度状态。
    //  */
    // depth?: IGLDepthState;

    // /**
    //  * 模板状态。
    //  */
    // stencil?: IGLStencilState;
}

/**
 * 顶点着色器阶段描述。
 */
export interface IVertexState
{
    /**
     * 着色器代码。
     */
    readonly code: string;
}

/**
 * 片段着色器阶段描述。
 *
 * {@link GPUFragmentState}
 */
export interface IFragmentState
{
    /**
     * 着色器代码。
     */
    readonly code: string;

    /**
     * A list of {@link GPUColorTargetState} defining the formats and behaviors of the color targets
     * this pipeline writes to.
     * 
     * 定义了该管道写入的颜色目标的格式和行为。
     * 
     * 注：WebGL中没法分别对每个颜色附件进行设置，统一使用第一项（targets[0]）设置！
     */
    readonly targets?: readonly IColorTargetState[];
}

export interface IColorTargetState
{
    /**
     * The blending behavior for this color target. If left undefined, disables blending for this
     * color target.
     * 
     * 定义如何混合到目标颜色中。
     * 
     * 默认 `undefined`，表示不进行混合。
     */
    readonly blend?: IBlendState;

    /**
     * 控制那些颜色分量是否可以被写入到颜色中。
     *
     * [red: boolean, green: boolean, blue: boolean, alpha: boolean]
     *
     * 默认 [true,true,true,true]
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/colorMask
     */
    readonly writeMask?: IWriteMask;
}

export type IWriteMask = [red: boolean, green: boolean, blue: boolean, alpha: boolean];

/**
 * 混合状态。
 * 
 * 定义如何混合到目标颜色中。
 *
 * ### WebGPU
 * 
 * @see https://gpuweb.github.io/gpuweb/#dictdef-gpublendstate
 */
export interface IBlendState
{
    /**
     * 为颜色通道定义相应渲染目标的混合行为。
     */
    readonly color?: IBlendComponent;

    /**
     * 为alpha通道定义相应渲染目标的混合行为。
     */
    readonly alpha?: IBlendComponent;
}

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
export interface IBlendComponent
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
    readonly operation?: IBlendOperation;

    /**
     * 源混合因子。
     * 
     * 默认为 "one"。
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc
     */
    readonly srcFactor?: IBlendFactor;

    /**
     * 目标混合因子。
     * 
     * 默认为 "zero"。
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc
     */
    readonly dstFactor?: IBlendFactor;
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