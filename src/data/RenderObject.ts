import { watcher } from "@feng3d/watcher";
import { Geometry } from "./Geometry";
import { RenderPipeline } from "./RenderPipeline";
import { ScissorRect } from "./ScissorRect";
import { Uniforms } from "./Uniforms";
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
    uniforms?: Uniforms;

    _version?: number;
}

export class RenderObject { }

RenderObject._reg((renderObject) =>
{
    const watchSession = watcher.on();

    // 监听属性变化
    watchSession.watch(renderObject, "viewport", () => Viewport._init(renderObject.viewport));
    watchSession.watch(renderObject, "scissorRect", () => ScissorRect._init(renderObject.scissorRect));
    watchSession.watch(renderObject, "pipeline", () => RenderPipeline._init(renderObject.pipeline));
    watchSession.watch(renderObject, "geometry", () => Geometry._init(renderObject.geometry));
    watchSession.watch(renderObject, "uniforms", () => Uniforms._init(renderObject.uniforms));

    // 初始化
    renderObject.__type__ = "RenderObject";
    renderObject.pipeline ??= RenderPipeline._init({});
    renderObject.geometry ??= Geometry._init({});
    renderObject.uniforms ??= Uniforms._init({});

    return () =>
    {
        watchSession.off();
    };
});