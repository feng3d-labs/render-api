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
export interface IDepthStencilState
{
    /**
     * 指示这个 GPURenderPipeline 是否可以修改 depthStencilAttachment 深度值。
     *
     * 默认为 `true` 。
     */
    readonly depthWriteEnabled?: boolean;

    /**
     * 用于测试片元深度与 depthStencilAttachment 深度值的比较操作。
     *
     * 默认 `'less'` 。
     */
    readonly depthCompare?: ICompareFunction;

    /**
     * 定义了如何为朝前的图元执行模板比较和操作。
     * 
     * 默认为 {}。
     */
    readonly stencilFront?: IStencilFaceState;

    /**
     * 定义了如何为朝后的图元执行模板比较和操作。
     * 
     * 默认为 {}。
     */
    readonly stencilBack?: IStencilFaceState;

    /**
     * 掩码控制在执行模板比较测试时读取哪些 depthStencilAttachment 模板值位。
     * 
     * 默认为 0xFFFFFFFF 。
     */
    readonly stencilReadMask?: number;

    /**
     * 掩码控制可以写入哪些 depthStencilAttachment 模板值位。
     * 
     * 默认为 0xFFFFFFFF 。
     */
    readonly stencilWriteMask?: number;

    /**
     * 添加到每个片元的恒定深度偏差。
     * 
     * 默认为 0 。
    */
    readonly depthBias?: number;

    /**
     * 与片元的斜率成比例的深度偏差。
     * 
     * 默认为 0 。
     */
    readonly depthBiasSlopeScale?: number;
}
