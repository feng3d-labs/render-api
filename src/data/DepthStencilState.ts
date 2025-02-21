import { ICompareFunction, IStencilFaceState } from "./IStencilFaceState";

/**
 * 深度模板阶段描述。
 *
 * `format` 将从深度附件 {@link IGPURenderPassDescriptor.depthStencilAttachment} 纹理上获取。
 *
 * {@link GPUDepthStencilState}
 *
 * @see https://www.orillusion.com/zh/webgpu.html#depth-stencil-state
 */
export class DepthStencilState
{
    /**
     * 指示这个 GPURenderPipeline 是否可以修改 depthStencilAttachment 深度值。
     *
     * 默认为 `true` 。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/depthMask
     */
    readonly depthWriteEnabled?: boolean = true;

    /**
     * 用于测试片元深度与 depthStencilAttachment 深度值的比较操作。
     *
     * 默认 `'less'` 。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/depthFunc
     */
    readonly depthCompare?: ICompareFunction = "less";

    /**
     * 定义了如何为朝前的图元执行模板比较和操作。
     *
     * 默认为 {}。
     */
    readonly stencilFront?: IStencilFaceState = new IStencilFaceState();

    /**
     * 定义了如何为朝后的图元执行模板比较和操作。
     *
     * 默认为 {}。
     */
    readonly stencilBack?: IStencilFaceState = new IStencilFaceState();

    /**
     * 模板测试时如果使用 "replace" ，则使用该值填充模板值。
     *
     * 默认为 0 。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/stencilFunc
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate
     *
     * @see https://www.orillusion.com/zh/webgpu.html#dom-gpurenderpassencoder-setstencilreference
     */
    readonly stencilReference?: number = 0;

    /**
     * 掩码控制在执行模板比较测试时读取哪些 depthStencilAttachment 模板值位。
     *
     * 默认为 0xFFFFFFFF 。
     */
    readonly stencilReadMask?: number = 0xFFFFFFFF;

    /**
     * 掩码控制可以写入哪些 depthStencilAttachment 模板值位。
     *
     * 默认为 0xFFFFFFFF 。
     */
    readonly stencilWriteMask?: number = 0xFFFFFFFF;

    /**
     * 添加到每个片元的恒定深度偏差。
     *
     * 默认为 0 。
     *
     * 对应WebGL中的 WebGLRenderingContextBase.polygonOffset 函数的 units 参数。
    */
    readonly depthBias?: number = 0;

    /**
     * 与片元的斜率成比例的深度偏差。
     *
     * 默认为 0 。
     *
     * 对应WebGL中的 WebGLRenderingContextBase.polygonOffset 函数的 factor 参数。
     */
    readonly depthBiasSlopeScale?: number = 0;
}
