import { IPrimitiveState } from "./IPrimitiveState";

/**
 * 渲染管线。
 */
export interface IRenderPipeline
{
    /**
     * Describes the primitive-related properties of the pipeline.
     * 
     * 图元拓扑结构。
     */
    readonly primitive?: IPrimitiveState;

    /**
     * 描述顶点着色器源码入口点以及顶点属性缓冲区布局。
     */
    readonly vertex: IVertexState;
}

/**
 * 顶点程序阶段。
 */
export interface IVertexState
{
    /**
     * 着色器代码。
     */
    readonly code: string;
}
