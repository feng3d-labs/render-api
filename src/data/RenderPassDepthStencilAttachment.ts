import { Data } from "./Data";
import { TextureView } from "./TextureView";

/**
 * 深度模板附件。
 */
export class RenderPassDepthStencilAttachment extends Data
{
    /**
     * 深度附件视图。
     *
     * 如果没有设置，默认为画布；否则使用 纹理视图 。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/framebufferTexture2D
     */
    readonly view?: TextureView = new TextureView();

    /**
     * 清除后填充深度值。
     *
     * 默认为 1。
     *
     * @see https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clearDepth
     */
    readonly depthClearValue?: number = 1;

    /**
     * 是否清除深度值。
     *
     * 默认为 "load"。
     *
     * @see https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clear
     */
    readonly depthLoadOp?: "load" | "clear" = "load";

    /**
     * 清除后填充模板值。
     *
     * 默认为 0。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clearStencil
     */
    readonly stencilClearValue?: number = 0;

    /**
     * 是否清除模板值。
     *
     * 默认为 "load"。
     *
     * @see https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clear
     */
    readonly stencilLoadOp?: "load" | "clear" = "load";
}