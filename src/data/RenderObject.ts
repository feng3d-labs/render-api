import { Geometry } from "./Geometry";
import { RenderPipeline } from "./RenderPipeline";
import { ScissorRect } from "./ScissorRect";
import { Uniforms } from "./Uniforms";
import { Viewport } from "./Viewport";

/**
 * 渲染对象，包含一次渲染时包含的所有数据。
 */
export class RenderObject
{
    /**
     * 数据类型。
     */
    readonly __type__?: "RenderObject" = "RenderObject";

    /**
     * 视窗。
     *
     * 描述渲染在画布的哪个区域，默认整个画布。
     */
    viewport?: Viewport;

    /**
     * 光栅化阶段中使用的剪刀矩形。
     */
    scissorRect?: ScissorRect;

    /**
     * 渲染管线描述。
     */
    pipeline: RenderPipeline;

    /**
     * 渲染几何数据。
     */
    geometry: Geometry;

    /**
     * Uniform变量数据
     */
    readonly uniforms?: Uniforms = new Uniforms();

    _version?: number;
}
