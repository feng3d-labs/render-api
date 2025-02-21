import { ShaderMacro } from "../Macro";
import { IRenderPipeline } from "./IRenderPipeline";
import { IScissorRect } from "./IScissorRect";
import { IVertexAttributes } from "./IVertexAttributes";
import { IViewport } from "./IViewport";
import { TypedArray } from "./TypedArray";

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
     * 顶点属性数据映射。
     */
    vertices?: IVertexAttributes;

    /**
     * 顶点索引数据。
     */
    indices?: IIndicesDataTypes;

    /**
     * Uniform变量数据
     */
    readonly uniforms?: IUniforms;

    /**
     * 绘制。
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawVertex
     */
    readonly draw: IDraw;

    _version?: number;

    /**
     * shader 中的 宏
     */
    shaderMacro?: ShaderMacro;
}

export type IDraw = IDrawVertex | IDrawIndexed;

/**
 * 顶点索引数据类型。
 */
export type IIndicesDataTypes = Uint16Array | Uint32Array;

/**
 * Draws primitives.
 *
 * 根据顶点数据绘制图元。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawVertex
 * @see GPURenderCommandsMixin.draw
 */
export interface IDrawVertex
{
    /**
     * 数据类型。
     */
    readonly __type: "DrawVertex";

    /**
     * The number of vertices to draw.
     */
    readonly vertexCount: number;

    /**
     * The number of instances to draw.
     *
     * 默认为 1 。
     */
    readonly instanceCount?: number;

    /**
     * Offset into the vertex buffers, in vertices, to begin drawing from.
     *
     * 默认为 0。
     */
    readonly firstVertex?: number;
}

/**
 * 根据索引数据绘制图元。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements
 * @see GPURenderCommandsMixin.drawIndexed
 */
export interface IDrawIndexed
{
    /**
     * 数据类型。
     */
    readonly __type: "DrawIndexed";

    /**
     * The number of indices to draw.
     *
     * 绘制的顶点索引数量。
     */
    readonly indexCount: number;

    /**
     * The number of instances to draw.
     *
     * 默认为 1 。
     */
    readonly instanceCount?: number;

    /**
     * Offset into the index buffer, in indices, begin drawing from.
     *
     * 默认为 0 。
     */
    readonly firstIndex?: number;
}

/**
 * Uniform 类型
 */
export type IUniformType = IUniformTypeMap[keyof IUniformTypeMap];

/**
 * Uniform 数据
 */
export interface IUniforms
{
    [key: string]: IUniformType;
}

export interface IUniformTypeMap
{
    /**
     * 缓冲区绑定。
     */
    IBufferBinding: IBufferBinding;
}

/**
 * 缓冲区绑定。
 *
 * WebGL 统一块(Uniform Block) 数据
 * WebGPU 缓冲区绑定（GPUBufferBinding）
 *
 * @see GPUBufferBinding
 */
export interface IBufferBinding
{
    [name: string]: IBufferBindingItem;

    /**
     * 如果未设置引擎将自动生成。
    */
    readonly bufferView?: TypedArray;
}

export type IUniformDataItem = number | number[] | number[][] | TypedArray | TypedArray[]
    | { toArray(): number[] | Float32Array }
    | { toArray(): number[] | Float32Array }[]
    ;
export type IBufferBindingItem = IUniformDataItem | { [key: string]: IBufferBindingItem };