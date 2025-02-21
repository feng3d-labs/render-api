import { IPrimitiveState } from "./IPrimitiveState";
import { IVertexAttributes } from "./IVertexAttributes";

/**
 * 几何数据。
 * 
 * 包含以下数据：
 * - 顶点属性数据
 * - 顶点索引数据
 * - 如何渲染
 * - 拓扑结构
 * - 正面
 */
export interface IGeometry
{
    /**
     * Describes the primitive-related properties of the pipeline.
     *
     * 图元拓扑结构。
     */
    readonly primitive?: IPrimitiveState;

    /**
     * 顶点属性数据映射。
     */
    vertices?: IVertexAttributes;

    /**
     * 顶点索引数据。
     */
    indices?: IIndicesDataTypes;

    /**
     * 绘制。
     */
    readonly draw: IDraw;
}

/**
 * 顶点索引数据类型。
 */
export type IIndicesDataTypes = Uint16Array | Uint32Array;

/**
 * 绘制图形。
 */
export type IDraw = IDrawVertex | IDrawIndexed;

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
     * 数据类型。
     */
    readonly __type: "DrawVertex";

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
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements
 * @see GPURenderCommandsMixin.drawIndexed
 */
export interface IDrawIndexed
{
    /**
     * 数据类型。
     */
    readonly __type: "DrawIndexed";

    /**
     * The number of indices to draw.
     *
     * 绘制的顶点索引数量。
     */
    readonly indexCount: number;

    /**
     * The number of instances to draw.
     *
     * 默认为 1 。
     */
    readonly instanceCount?: number;

    /**
     * Offset into the index buffer, in indices, begin drawing from.
     *
     * 默认为 0 。
     */
    readonly firstIndex?: number;
}
