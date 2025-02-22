import { ShaderMacro } from "../Macro";
import { Data } from "./Data";
import { Geometry } from "./Geometry";
import { Material } from "./Material";
import { ScissorRect } from "./ScissorRect";
import { Uniforms } from "./Uniforms";
import { Viewport } from "./Viewport";

/**
 * 渲染对象，包含一次渲染时包含的所有数据。
 */
@Data.reg
export class RenderObject extends Data
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
    @Data.type(Viewport)
    viewport?: Viewport;

    /**
     * 光栅化阶段中使用的剪刀矩形。
     */
    @Data.type(ScissorRect)
    scissorRect?: ScissorRect;

    /**
     * 渲染管线描述。
     */
    @Data.type(Material)
    pipeline: Material;

    /**
     * 渲染几何数据。
     */
    @Data.type(Geometry)
    geometry: Geometry;

    /**
     * Uniform变量数据
     */
    @Data.type(Uniforms)
    readonly uniforms?: Uniforms = new Uniforms();

    _version?: number;

    /**
     * shader 中的 宏
     */
    @Data.type(ShaderMacro)
    shaderMacro?: ShaderMacro = new ShaderMacro();
}
