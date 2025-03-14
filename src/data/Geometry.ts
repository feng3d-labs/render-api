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
export interface Geometry
{
    /**
     * Describes the primitive-related properties of the pipeline.
     *
     * 图元拓扑结构。
     */
    primitive?: PrimitiveState;

    /**
     * 顶点属性数据映射。
     */
    vertices?: VertexAttributes;

    /**
     * 顶点索引数据。
     */
    indices?: IIndicesDataTypes;

    /**
     * 绘制。
     */
    draw?: IDraw;
}

export class Geometry
{

    /**
     * 获取顶点数量。
     *
     * @returns 顶点数量。 
     */
    static getNumVertex(geometry: Geometry)
    {
        const attributes = geometry.vertices;
        const vertexList = Object.keys(attributes).map((v) => attributes[v]).filter((v) => (v.data && v.stepMode !== "instance"));

        const count = vertexList.length > 0 ? VertexAttribute.getVertexCount(vertexList[0]) : 0;

        // 验证所有顶点属性数据的顶点数量一致。
        if (vertexList.length > 0)
        {
            console.assert(vertexList.every((v) => count === VertexAttribute.getVertexCount(v)));
        }

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
        const vertexList = Object.keys(attributes).map((v) => attributes[v]).filter((v) => (v.data && v.stepMode === "instance"));

        const count = vertexList.length > 0 ? VertexAttribute.getVertexCount(vertexList[0]) : 1;

        // 验证所有顶点属性数据的顶点数量一致。
        if (vertexList.length > 0)
        {
            console.assert(vertexList.every((v) => count === VertexAttribute.getVertexCount(v)));
        }

        return count;
    }

    static getDraw(geometry: Geometry): DrawIndexed | DrawVertex
    {
        if (geometry['_draw']) return geometry['_draw'];

        const instanceCount = Geometry.getInstanceCount(geometry);

        if (geometry.indices)
        {
            return {
                __type__: "DrawIndexed",
                indexCount: geometry.indices.length,
                firstIndex: 0,
                instanceCount,
            };
        }

        return {
            __type__: "DrawVertex",
            vertexCount: Geometry.getNumVertex(geometry),
            instanceCount,
        };
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
