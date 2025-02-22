import { Data } from "./Data";
import { DrawIndexed } from "./DrawIndexed";
import { DrawVertex } from "./DrawVertex";
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
export class Geometry extends Data
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
    vertices?: VertexAttributes = new VertexAttributes();

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

        const instanceCount = Geometry.getInstanceCount(this);

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
            vertexCount: Geometry.getNumVertex(this),
            instanceCount,
        };
    }
    set draw(value: IDraw)
    {
        if (!value)
        {
            this._draw = undefined;
            return;
        }
        if (value.__type === "DrawVertex")
        {
            this._draw = DrawVertex.getInstance(value);
        }
        this._draw = value;
    }
    protected _draw?: IDraw;

    /**
     * 获取顶点数量。
     *
     * @returns 顶点数量。 
     */
    static getNumVertex(geometry: Geometry)
    {
        const attributes = geometry.vertices;
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
    static getInstanceCount(geometry: Geometry)
    {
        const attributes = geometry.vertices;
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
export type IDraw = DrawVertex | DrawIndexed;
