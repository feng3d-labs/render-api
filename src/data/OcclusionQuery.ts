import { RenderObject } from "./RenderObject";

export interface OcclusionQuery
{
    /**
     * 数据类型。
     */
    readonly __type__: "OcclusionQuery";

    /**
     * GPU渲染对象列表。
     */
    renderObjects: RenderObject[];

    /**
     * 渲染完成后由引擎自动填充。
     */
    result?: {
        /**
         * 查询结果。
         */
        result: number;
    };
}