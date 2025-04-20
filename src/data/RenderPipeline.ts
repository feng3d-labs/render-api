import { DepthStencilState } from "./DepthStencilState";
import { FragmentState } from "./FragmentState";
import { PrimitiveState } from "./PrimitiveState";
import { VertexState } from "./VertexState";

/**
 * 渲染管线。
 * 
 * 对应WebGPU的Pipeline。
 */
export interface RenderPipeline
{
    /**
     * 标签。
     *
     * 用于调试。
     */
    readonly label?: string;

    /**
     * 顶点着色器阶段描述。
     */
    readonly vertex: VertexState;

    /**
     * 片段着色器阶段描述。
     */
    readonly fragment?: FragmentState;

    /**
     * Describes the primitive-related properties of the pipeline.
     *
     * 图元拓扑结构。
     */
    readonly primitive?: PrimitiveState;

    /**
     * 深度模板阶段描述。
     */
    readonly depthStencil?: DepthStencilState;

    _version?: number;
}
