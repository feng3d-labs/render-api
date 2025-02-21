import { DepthStencilState } from "./DepthStencilState";
import { FragmentState } from "./FragmentState";
import { VertexState } from "./VertexState";

/**
 * 渲染管线。
 */
export class RenderPipeline
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
     * 深度模板阶段描述。
     */
    readonly depthStencil?: DepthStencilState;

    _version?: number;
}
