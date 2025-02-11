import { IRenderPassColorAttachment } from "./IRenderPassColorAttachment";
import { IRenderPassDepthStencilAttachment } from "./IRenderPassDepthStencilAttachment";

/**
 * 渲染通道描述
 */
export interface IRenderPassDescriptor
{
    /**
     * 标签。
     *
     * 用于调试。
     */
    readonly label?: string;

    /**
     * 颜色附件
     */
    readonly colorAttachments?: readonly IRenderPassColorAttachment[];

    /**
     * 深度模板附件。
     *
     * 当使用深度附件时，必须设置，使用默认值可设置为 `{}` 。
     */
    readonly depthStencilAttachment?: IRenderPassDepthStencilAttachment;

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