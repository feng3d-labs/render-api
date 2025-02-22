import { Data } from "./Data";

/**
 * 根据索引数据绘制图元。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements
 * @see GPURenderCommandsMixin.drawIndexed
 */
@Data.reg
export class DrawIndexed extends Data
{
    /**
     * 数据类型。
     */
    readonly __type__: "DrawIndexed" = "DrawIndexed";

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
    readonly instanceCount?: number = 1;

    /**
     * Offset into the index buffer, in indices, begin drawing from.
     *
     * 默认为 0 。
     */
    readonly firstIndex?: number = 0;
}
