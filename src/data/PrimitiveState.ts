import { Data } from "./Data";

/**
 * 图元拓扑结构。
 *
 * {@link GPUPrimitiveState}
 *
 * `stripIndexFormat` 将由引擎自动设置。
 */
@Data.reg
export class PrimitiveState extends Data
{
    __type__?: "PrimitiveState" = "PrimitiveState";

    /**
     * The type of primitive to be constructed from the vertex inputs.
     *
     * * `point-list` 绘制单个点。
     * * `line-strip` 绘制连线
     * * `line-list` 每两个顶点绘制一条线段。
     * * `triangle-list` 每三个顶点绘制一个三角形。
     * * `triangle-strip` 绘制三角形条带。
     *
     * 默认 `triangle-list` ,默认每三个顶点绘制一个三角形。
     * 
     * 图形拓扑结构。
     *
     * 以下仅在WebGL生效
     * * LINE_LOOP 绘制循环连线。
     * * TRIANGLE_FAN  绘制三角扇形。
     */
    topology?: IPrimitiveTopology = "triangle-list";

    /**
     * Defines which polygon orientation will be culled, if any.
     *
     * 剔除面。
     *
     * 默认 `"none"` ,不进行剔除。
     *
     * * `none` 关闭剔除面功能
     * * `front` 剔除正面
     * * `back` 剔除背面
     */
    cullFace?: ICullFace = "none";

    /**
     * Defines which polygons are considered front-facing.
     *
     * 正向方向。默认 "ccw"，表示三角形逆时针方向为正面。
     */
    frontFace?: IFrontFace = "ccw";
}

/**
 * 图元拓扑结构。
 */
export type IPrimitiveTopology = IPrimitiveTopologyMap[keyof IPrimitiveTopologyMap];

export interface IPrimitiveTopologyMap
{
    "point-list": "point-list",
    "line-list": "line-list",
    "line-strip": "line-strip",
    "triangle-list": "triangle-list",
    "triangle-strip": "triangle-strip",
}

/**
 * * `FRONT_AND_BACK` 剔除正面与背面，仅在WebGL中生效！
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/cullFace
 */
export type ICullFace = ICullFaceMap[keyof ICullFaceMap];

export interface ICullFaceMap
{
    "none": "none",
    "front": "front",
    "back": "back",
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/frontFace
 */
export type IFrontFace = "ccw" | "cw";