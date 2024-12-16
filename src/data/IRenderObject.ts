import { IRenderPipeline } from "./IRenderPipeline";
import { IVertexAttributes } from "./IVertexAttributes";

/**
 * 渲染对象，包含一次渲染时包含的所有数据。
 */
export interface IRenderObject
{
    /**
     * 数据类型。
     */
    readonly __type?: "RenderObject";

    /**
     * 渲染管线描述。
     */
    readonly pipeline: IRenderPipeline;

    /**
     * 顶点属性数据映射。
     */
    vertices?: IVertexAttributes;

    /**
     * 顶点索引数据。
     */
    indices?: IIndicesDataTypes;

    // /**
    //  * Uniform渲染数据
    //  */
    // uniforms?: LazyObject<IGLUniforms>;

    /**
     * 根据顶点数据绘制图元。
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawVertex
     */
    readonly drawVertex?: IDrawVertex;

    /**
     * 根据索引数据绘制图元。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements
     */
    readonly drawIndexed?: IDrawIndexed;
}

/**
 * 顶点索引数据类型。
 */
export type IIndicesDataTypes = Uint16Array | Uint32Array;

/**
 * Draws primitives.
 *
 * 根据顶点数据绘制图元。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawVertex
 * @see GPURenderCommandsMixin.draw
 */
export interface IDrawVertex
{
    /**
     * The number of vertices to draw.
     */
    readonly vertexCount: number;

    /**
     * The number of instances to draw.
     * 
     * 默认为 1 。
     */
    readonly instanceCount?: number;

    /**
     * Offset into the vertex buffers, in vertices, to begin drawing from.
     * 
     * 默认为 0。
     */
    readonly firstVertex?: number;
}

/**
 * 根据索引数据绘制图元。
 */
export interface IDrawIndexed
{
    /**
     * 默认渲染所有顶点索引。
     */
    indexCount?: number;
    instanceCount?: number;
    firstIndex?: number;
}