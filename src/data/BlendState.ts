import { BlendComponent } from "./BlendComponent";
import { IColor } from "./RenderPassColorAttachment";

/**
 * 混合状态。
 *
 * 定义如何混合到目标颜色中。
 *
 * ### WebGPU
 *
 * @see https://gpuweb.github.io/gpuweb/#dictdef-gpublendstate
 */
export class BlendState
{
    /**
     * 混合时使用的常量值，默认为 [0,0,0,0]。
     *
     * 当 {@link BlendComponent.srcFactor} {@link BlendComponent.dstFactor} 取值为 "constant" 或者 "one-minus-constant" 时生效。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendColor
     * @see https://gpuweb.github.io/gpuweb/#dom-renderstate-blendconstant-slot
     *
     * 注：只取 renderPipeline.fragment?.targets?.[0]?.blend.constantColor 值。
     */
    readonly constantColor?: IColor = [0, 0, 0, 0];

    /**
     * 为颜色通道定义相应渲染目标的混合行为。
     */
    readonly color?: BlendComponent = new BlendComponent();

    /**
     * 为alpha通道定义相应渲染目标的混合行为。
     */
    readonly alpha?: BlendComponent = new BlendComponent();
}
