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
     */
    // readonly targets?: readonly IGPUColorTargetState[];
}
