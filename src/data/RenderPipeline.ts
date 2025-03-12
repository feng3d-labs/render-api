import { DepthStencilState } from "./DepthStencilState";
import { FragmentState } from "./FragmentState";
import { VertexState } from "./VertexState";

/**
 * 渲染管线。
 * 
 * 对应WebGPU的Pipeline。
 */
export interface RenderPipeline
{
    __type__?: "RenderPipeline";

    /**
     * 标签。
     *
     * 用于调试。
     */
    readonly label?: string;

    /**
     * 顶点着色器阶段描述。
     */
    vertex: VertexState;

    /**
     * 片段着色器阶段描述。
     */
    fragment?: FragmentState;

    /**
     * 深度模板阶段描述。
     */
    readonly depthStencil?: DepthStencilState;

    _version?: number;
}
