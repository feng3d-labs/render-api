import { CanvasContext } from './CanvasContext';
import { Color, LoadOp } from './RenderPassColorAttachment';

/**
 * 画布渲染通道描述。
 */
export interface CanvasRenderPassDescriptor
{
    /**
     * 清除后填充值。
     *
     * 默认为 [0,0,0,0]。
     *
     * ### WebGL
     *
     * @see https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clearColor
     *
     * ### WebGPU:
     * Indicates the value to clear {@link GPURenderPassColorAttachment#view} to prior to executing the
     * render pass. If not map/exist|provided, defaults to `{r: 0, g: 0, b: 0, a: 0}`. Ignored
     * if {@link GPURenderPassColorAttachment#loadOp} is not {@link GPULoadOp#"clear"}.
     * The components of {@link GPURenderPassColorAttachment#clearValue} are all double values.
     * They are converted [$to a texel value of texture format$] matching the render attachment.
     * If conversion fails, a validation error is generated.
     */
    readonly clearColorValue?: Color;

    /**
     * 是否清除颜色附件。
     *
     * 默认 `"clear"` 。
     *
     * ### WebGL
     *
     * @see https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clear
     *
     * ### WebGPU
     *
     * Indicates the load operation to perform on {@link GPURenderPassColorAttachment#view} prior to
     * executing the render pass.
     * Note: It is recommended to prefer clearing; see {@link GPULoadOp#"clear"} for details.
     */
    readonly loadColorOp?: LoadOp;

    /**
     * 清除后填充深度值。
     *
     * 默认为 1。
     *
     * @see https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clearDepth
     */
    readonly depthClearValue?: number;

    /**
     * 是否清除深度值。
     *
     * 默认为 "load"。
     *
     * @see https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clear
     */
    readonly depthLoadOp?: 'load' | 'clear';

    /**
     * 清除后填充模板值。
     *
     * 默认为 0。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clearStencil
     */
    readonly stencilClearValue?: number;

    /**
     * 是否清除模板值。
     *
     * 默认为 "load"。
     *
     * @see https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clear
     */
    readonly stencilLoadOp?: 'load' | 'clear';

    /**
     * 采用次数。
     *
     * 注意： WebGL2 支持。
     *
     * 当值存在时，引擎将会自动创建支持`multisample`的`IGLRenderbuffer`用于接收颜色附件的结果。在渲染通道执行结束后在由`IGLRenderbuffer`拷贝到对应纹理上。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample
     *
     * WebGPU:
     * 是否开启多重采样。WebGPU貌似只支持4重采样。如果在颜色附件中没有给出支持多重采样的纹理时则引擎将会自动为其添加。
     */
    readonly sampleCount?: 4;
}