import { Data } from "./Data";
import { DepthStencilState } from "./DepthStencilState";
import { FragmentState } from "./FragmentState";
import { VertexState } from "./VertexState";

/**
 * 材质。
 * 
 * 对应WebGPU的Pipeline。
 */
@Data.reg
export class Material extends Data
{
    __type__?: "Material" = "Material";

    /**
     * 标签。
     *
     * 用于调试。
     */
    readonly label?: string;

    /**
     * 顶点着色器阶段描述。
     */
    @Data.type(VertexState)
    readonly vertex: VertexState;

    /**
     * 片段着色器阶段描述。
     */
    @Data.type(FragmentState)
    readonly fragment?: FragmentState;

    /**
     * 深度模板阶段描述。
     */
    @Data.type(DepthStencilState)
    readonly depthStencil?: DepthStencilState;

    _version?: number;
}
