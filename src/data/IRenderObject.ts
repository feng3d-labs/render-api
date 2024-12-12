import { IRenderPipeline } from "./IRenderPipeline";

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

    // /**
    //  * 顶点属性数据列表
    //  */
    // vertices?: IGLVertexAttributes;

    // /**
    //  * 顶点索引数据
    //  */
    // indices?: IGLIndicesDataTypes;

    // /**
    //  * Uniform渲染数据
    //  */
    // uniforms?: LazyObject<IGLUniforms>;

    // /**
    //  * 绘制一定数量顶点。
    //  *
    //  * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawVertex
    //  */
    // drawVertex?: IGLDrawVertex;

    // /**
    //  * 根据索引数据绘制图元。
    //  *
    //  * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements
    //  */
    // drawIndexed?: IGLDrawIndexed;

    // /**
    //  * 回写顶点着色器中输出到缓冲区。
    //  *
    //  * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/bindTransformFeedback
    //  */
    // transformFeedback?: IGLTransformFeedback;
}
