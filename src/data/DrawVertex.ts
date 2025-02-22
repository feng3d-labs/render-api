import { Data } from "./Data";

/**
 * Draws primitives.
 *
 * 根据顶点数据绘制图元。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawVertex
 * @see GPURenderCommandsMixin.draw
 */
export class DrawVertex extends Data
{
    /**
     * 数据类型。
     */
    readonly __type: "DrawVertex" = "DrawVertex";

    /**
     * The number of vertices to draw.
     */
    readonly vertexCount: number;

    /**
     * The number of instances to draw.
     *
     * 默认为 1 。
     */
    readonly instanceCount?: number = 1;

    /**
     * Offset into the vertex buffers, in vertices, to begin drawing from.
     *
     * 默认为 0。
     */
    readonly firstVertex?: number = 0;
}