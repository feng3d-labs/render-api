import { OcclusionQuery } from "./OcclusionQuery";
import { RenderObject } from "./RenderObject";
import { RenderPassDescriptor } from "./RenderPassDescriptor";

/**
 * WebGL渲染通道
 *
 * 包含渲染通道描述以及需要渲染的对象列表。
 */
export interface RenderPass
{
    /**
     * 数据类型。
     */
    readonly __type__?: "RenderPass";

    /**
     * 渲染通道描述
     */
    readonly descriptor?: RenderPassDescriptor;

    /**
     * 渲染对象列表
     */
    readonly renderObjects?: readonly RenderPassObject[];
}

export type RenderPassObject = RenderPassObjectMap[keyof RenderPassObjectMap];

export interface RenderPassObjectMap
{
    IRenderObject: RenderObject;
    OcclusionQuery: OcclusionQuery
}