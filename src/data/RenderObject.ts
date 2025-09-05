import { Geometry } from "./Geometry";
import { RenderPipeline } from "./RenderPipeline";
import { ScissorRect } from "./ScissorRect";
import { BindingResources } from "./BindingResources";
import { Viewport } from "./Viewport";

/**
 * 渲染对象，包含一次渲染时包含的所有数据。
 */
export interface RenderObject
{
    /**
     * 数据类型。
     */
    __type__?: "RenderObject";

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
    uniforms?: BindingResources;

    _version?: number;
}
