import { RenderPassDescriptor } from "./RenderPassDescriptor";
import { RenderObject } from "./RenderObject";

/**
 * WebGL渲染通道
 *
 * 包含渲染通道描述以及需要渲染的对象列表。
 */
export class RenderPass
{
    /**
     * 数据类型。
     */
    readonly __type?: "RenderPass" = "RenderPass";

    /**
     * 渲染通道描述
     */
    readonly descriptor?: RenderPassDescriptor = new RenderPassDescriptor();

    /**
     * 渲染对象列表
     */
    readonly renderObjects?: readonly IRenderPassObject[] = [];

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