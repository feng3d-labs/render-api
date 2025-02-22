import { Data } from "./Data";

/**
 * {@link GPUStencilFaceState}
 *
 * @see https://www.orillusion.com/zh/webgpu.html#dictdef-gpustencilfacestate
 */
export class StencilFaceState extends Data
{
    /**
     * 在测试片元与 depthStencilAttachment 模板值时使用的 GPUCompareFunction。
     *
     * 默认为 "always"。
     */
    readonly compare?: ICompareFunction = "always";

    /**
     * 如果片元模板比较测试（由 compare 描述）失败，则执行的 GPUStencilOperation。
     *
     * 默认为 "keep"。
     */
    readonly failOp?: IStencilOperation = "keep";

    /**
     * 如果由 depthCompare 描述的片元深度比较失败，则执行的 GPUStencilOperation。
     *
     * 默认为 "keep"。
     */
    readonly depthFailOp?: IStencilOperation = "keep";

    /**
     * 如果片元模板比较测试通过，则执行由compare描述的GPUStencilOperation。
     *
     * 默认为 "keep"。
     */
    readonly passOp?: IStencilOperation = "keep";
}

export type ICompareFunction = "never" | "less" | "equal" | "less-equal" | "greater" | "not-equal" | "greater-equal" | "always";

export type IStencilOperation = "keep" | "zero" | "replace" | "invert" | "increment-clamp" | "decrement-clamp" | "increment-wrap" | "decrement-wrap";