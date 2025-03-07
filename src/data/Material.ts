import { DataProxy } from "../DataProxy";
import { DepthStencilState } from "./DepthStencilState";
import { FragmentState } from "./FragmentState";
import { VertexState } from "./VertexState";

/**
 * 材质。
 * 
 * 对应WebGPU的Pipeline。
 */
export interface Material
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

export class Material
{
    static addInitFunc: (func: (material: Material) => ((material: Material) => void)) => void = DataProxy.addInitFunc;
    static init: (material: Partial<Material>) => Material = DataProxy.init;
    static del: (material: Material) => Material = DataProxy.del;
}

Material.addInitFunc((material) =>
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