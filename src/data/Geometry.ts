import { PrimitiveState } from "./PrimitiveState";
import { VertexAttribute, VertexAttributes } from "./VertexAttributes";

/**
 * 几何数据。
 * 
 * 包含以下数据：
 * - 顶点属性数据
 * - 顶点索引数据
 * - 如何渲染
 * - 拓扑结构
 */
export class Geometry
{
    /**
     * Describes the primitive-related properties of the pipeline.
     *
     * 图元拓扑结构。
     */
    primitive?: PrimitiveState = new PrimitiveState();

    /**
     * 顶点属性数据映射。
     */
    vertices?: VertexAttributes = {};

    /**
     * 顶点索引数据。
     */
    indices?: IIndicesDataTypes;

    /**
     * 绘制。
     */
    get draw(): IDraw
    {
        if (this._draw) return this._draw;

        const instanceCount = this.getInstanceCount();

        if (this.indices)
        {
            return {
                __type: "DrawIndexed",
                indexCount: this.indices.length,
                firstIndex: 0,
                instanceCount,
            };
        }

        return {
            __type: "DrawVertex",
            vertexCount: this.getNumVertex(),
            instanceCount,
        };
    }
    set draw(value: IDraw)
    {
        this._draw = value;
    }
    protected _draw?: IDraw;

    /**
     * 获取顶点数量。
     *
     * @returns 顶点数量。 
     */
    getNumVertex?()
    {
        const attributes = this.vertices;
        const vertexList = Object.keys(attributes).map((v) => attributes[v]).filter((v) => v.stepMode !== "instance");

        const count = VertexAttribute.getVertexCount(vertexList[0]);

        // 验证所有顶点属性数据的顶点数量一致。
        console.assert(vertexList.length > 0 && vertexList.every((v) => count === VertexAttribute.getVertexCount(v)));

        return count;
    }

    /**
     * 获取实例数量。
     *
     * @returns 实例数量。
     */
    getInstanceCount?()
    {
        const attributes = this.vertices;
        const vertexList = Object.keys(attributes).map((v) => attributes[v]).filter((v) => v.stepMode === "instance");

        const count = VertexAttribute.getVertexCount(vertexList[0]);

        // 验证所有顶点属性数据的顶点数量一致。
        console.assert(vertexList.length > 0 && vertexList.every((v) => count === VertexAttribute.getVertexCount(v)));

        return count;
    }
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
