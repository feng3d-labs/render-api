import { IBlendComponent } from "./IBlendComponent";

/**
 * 混合状态。
 * 
 * 定义如何混合到目标颜色中。
 *
 * ### WebGPU
 * 
 * @see https://gpuweb.github.io/gpuweb/#dictdef-gpublendstate
 */
export interface IBlendState
{
    /**
     * 为颜色通道定义相应渲染目标的混合行为。
     */
    readonly color?: IBlendComponent;

    /**
     * 为alpha通道定义相应渲染目标的混合行为。
     */
    readonly alpha?: IBlendComponent;
}
