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
}