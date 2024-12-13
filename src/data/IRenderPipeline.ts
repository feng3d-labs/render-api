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
     * 
     */
    readonly targets?: readonly IColorTargetState[];
}

export interface IColorTargetState
{
    /**
     * 混合状态。
     */
    readonly blend?: IBlendState;

    /**
     * 控制那些颜色分量是否可以被写入到帧缓冲器。
     *
     * [red: boolean, green: boolean, blue: boolean, alpha: boolean]
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/colorMask
     */
    // readonly writeMask?: IWriteMask;
}

export type IWriteMask = [red: boolean, green: boolean, blue: boolean, alpha: boolean];

/**
 * 混合状态。
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
 */
export interface IBlendComponent
{
    // /**
    //  * 混合方式，默认 FUNC_ADD，源 + 目标。
    //  *
    //  * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquation
    //  */
    // operation?: GLBlendEquation;

    // /**
    //  * 源混合因子，默认 SRC_ALPHA，将所有颜色乘以源alpha值。
    //  *
    //  * @see GLBlendFactor
    //  * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc
    //  */
    // srcFactor?: GLBlendFactor;

    // /**
    //  * 目标混合因子，默认 ONE_MINUS_SRC_ALPHA，将所有颜色乘以1减去源alpha值。
    //  *
    //  * @see GLBlendFactor
    //  * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc
    //  */
    // dstFactor?: GLBlendFactor;
}
