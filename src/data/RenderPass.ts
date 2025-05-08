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
    readonly renderPassObjects?: readonly RenderPassObject[];

    /**
     * 当渲染通道中存在遮挡查询时，在查询结束后调用该函数返回查询结果。
     *
     * @param occlusionQuerys 遮挡查询列表
     * @param results 是否被渲染。true表示被渲染，false表示未被渲染。
     */
    onOcclusionQuery?(occlusionQuerys: OcclusionQuery[], results: number[]): void;
}

export type RenderPassObject = RenderPassObjectMap[keyof RenderPassObjectMap];

export interface RenderPassObjectMap
{
    IRenderObject: RenderObject;
    OcclusionQuery: OcclusionQuery
}