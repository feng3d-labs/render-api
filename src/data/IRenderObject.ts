import { ShaderMacro } from "../Macro";
import { Geometry } from "./Geometry";
import { IRenderPipeline } from "./IRenderPipeline";
import { IScissorRect } from "./IScissorRect";
import { IUniforms } from "./IUniforms";
import { IViewport } from "./IViewport";

/**
 * 渲染对象，包含一次渲染时包含的所有数据。
 */
export interface IRenderObject
{
    /**
     * 数据类型。
     */
    readonly __type?: "RenderObject";

    /**
     * 视窗。
     *
     * 描述渲染在画布的哪个区域，默认整个画布。
     */
    viewport?: IViewport;

    /**
     * 光栅化阶段中使用的剪刀矩形。
     */
    scissorRect?: IScissorRect;

    /**
     * 渲染管线描述。
     */
    pipeline: IRenderPipeline;

    /**
     * 渲染几何数据。
     */
    geometry: Geometry;

    /**
     * Uniform变量数据
     */
    readonly uniforms?: IUniforms;

    _version?: number;

    /**
     * shader 中的 宏
     */
    shaderMacro?: ShaderMacro;
}
