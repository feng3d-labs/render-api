import { watcher } from "@feng3d/watcher";
import "../polyfills/Function";
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
export class Geometry
{
    __type__?: "Geometry" = "Geometry";

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
    draw?: IDraw;

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
}

Geometry._reg((geometry) =>
{
    const watchSession = watcher.on();
    // 监听属性变化
    watchSession.watch(geometry, "primitive", () => PrimitiveState._init(geometry.primitive));
    watchSession.watch(geometry, "vertices", () => VertexAttributes._init(geometry.vertices));

    // 初始化
    geometry.__type__ = "Geometry";
    geometry.primitive ??= PrimitiveState._init({});
    geometry.vertices ??= VertexAttributes._init({});

    return () =>
    {
        watchSession.off();
    };
})

Object.defineProperty(Geometry.prototype, "draw", {
    get: function getDraw(this: Geometry)
    {
        if (this['_draw']) return this['_draw'];

        const instanceCount = Geometry.getInstanceCount(this);

        if (this.indices)
        {
            return {
                __type__: "DrawIndexed",
                indexCount: this.indices.length,
                firstIndex: 0,
                instanceCount,
            };
        }

        return {
            __type__: "DrawVertex",
            vertexCount: Geometry.getNumVertex(this),
            instanceCount,
        };
    },
    set: function setDraw(this: Geometry, value: IDraw)
    {
        if (!value)
        {
            this['_draw'] = undefined;
            return;
        }
        if (value.__type__ === "DrawVertex")
        {
            this['_draw'] = value;
        }
        else
        {
            this['_draw'] = value;
        }
    },
});

/**
 * 顶点索引数据类型。
 */
export type IIndicesDataTypes = Uint16Array | Uint32Array;

/**
 * 绘制图形。
 */
export type IDraw = DrawVertex | DrawIndexed;
