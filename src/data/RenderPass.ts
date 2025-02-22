import { Data } from "./Data";
import { RenderObject } from "./RenderObject";
import { RenderPassDescriptor } from "./RenderPassDescriptor";

/**
 * WebGL渲染通道
 *
 * 包含渲染通道描述以及需要渲染的对象列表。
 */
@Data.reg
export class RenderPass extends Data
{
    /**
     * 数据类型。
     */
    readonly __type__?: "RenderPass" = "RenderPass";

    /**
     * 渲染通道描述
     */
    @Data.type(RenderPassDescriptor)
    readonly descriptor?: RenderPassDescriptor;

    /**
     * 渲染对象列表
     */
    @Data.type(RenderObject)
    readonly renderObjects?: readonly IRenderPassObject[];

    // /**
    //  * 渲染不被遮挡查询结果。具体数据保存在各子项的"result"属性中。
    //  *
    //  * 当提交WebGL后自动获取结果后填充该属性。
    //  */
    // occlusionQueryResults?: IGLOcclusionQuery[];
}

export type IRenderPassObject = IRenderPassObjectMap[keyof IRenderPassObjectMap];

export interface IRenderPassObjectMap
{
    IRenderObject: RenderObject;
}