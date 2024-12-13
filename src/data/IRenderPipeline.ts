import { IDepthStencilState } from "./IDepthStencilState";
import { IFragmentState } from "./IFragmentState";
import { IPrimitiveState } from "./IPrimitiveState";
import { IVertexState } from "./IVertexState";

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
     * 深度模板阶段描述。
     */
    readonly depthStencil?: IDepthStencilState;
}
