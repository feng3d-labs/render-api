import { TextureView } from "./TextureView";

/**
 * 渲染通道颜色附件。
 */
export class RenderPassColorAttachment
{
    /**
     * 颜色附件视图。
     *
     * ### WebGL
     *
     * 如果没有设置，默认为画布；否则使用 纹理视图 。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/framebufferTexture2D
     *
     * 注：引擎运行中该属性可能是 IGLRenderbuffer 类型，用于处理多重采样。
     *
     */
    readonly view?: TextureView = new TextureView();

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
    readonly clearValue?: IColor = [0, 0, 0, 0];

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
    readonly loadOp?: ILoadOp = "clear";
}

export type IColor = [red: number, green: number, blue: number, alpha: number];

export type ILoadOp = "load" | "clear";
