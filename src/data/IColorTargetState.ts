import { IBlendState } from "./IBlendState";

export interface IColorTargetState
{
    /**
     * The blending behavior for this color target. If left undefined, disables blending for this
     * color target.
     * 
     * 定义如何混合到目标颜色中。
     * 
     * 默认 `undefined`，表示不进行混合。
     */
    readonly blend?: IBlendState;

    /**
     * 控制那些颜色分量是否可以被写入到颜色中。
     *
     * [red: boolean, green: boolean, blue: boolean, alpha: boolean]
     *
     * 默认 [true,true,true,true]
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/colorMask
     */
    readonly writeMask?: IWriteMask;
}

export type IWriteMask = [red: boolean, green: boolean, blue: boolean, alpha: boolean];
