import { DataProxy } from "../DataProxy";
import { DepthStencilState } from "./DepthStencilState";
import { FragmentState } from "./FragmentState";
import { VertexState } from "./VertexState";

/**
 * 材质。
 * 
 * 对应WebGPU的Pipeline。
 */
export interface RenderPipeline
{
    __type__?: "Material";

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

export class RenderPipeline
{
    static addInitFunc: (func: (material: RenderPipeline) => ((material: RenderPipeline) => void)) => void = DataProxy.addInitFunc;
    static init: (material: Partial<RenderPipeline>) => RenderPipeline = DataProxy.init;
    static del: (material: RenderPipeline) => RenderPipeline = DataProxy.del;
}

RenderPipeline.addInitFunc((material) =>
{
    // Object.defineProperty(material, 'vertex', {

    // });
    //
    material.__type__ = "Material";
    material.vertex = new VertexState();
    material.fragment = new FragmentState();
    return (material) =>
    {

    };
});