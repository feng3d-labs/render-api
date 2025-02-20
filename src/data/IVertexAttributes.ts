/**
 * 顶点属性数据映射。
 */
export interface IVertexAttributes
{
    [name: string]: IVertexAttribute;
}

/**
 * 顶点属性数据。
 */
export interface IVertexAttribute
{
    /**
     * 顶点数据。
     */
    data: IVertexDataTypes;

    /**
     * 顶点数据格式。
     *
     * 由于提供的数据并不一定与着色器中格式一直，因此必须提供与着色器中兼容的数据格式。
     */
    readonly format: IVertexFormat;

    /**
     * 所在顶点数据中的偏移字节数。
     */
    readonly offset?: number;

    /**
     * The stride, in bytes, between elements of this array.
     *
     * {@link GPUVertexBufferLayout.arrayStride}
     */
    readonly arrayStride?: number;

    /**
     * Whether each element of this array represents per-vertex data or per-instance data
     *
     * {@link GPUVertexBufferLayout.stepMode}
     *
     * 默认 `"vertex"` 。
     */
    readonly stepMode?: IVertexStepMode;
}

export type IVertexStepMode = "vertex" | "instance";

export type IVertexDataTypes = | Float32Array
    | Uint32Array
    | Int32Array
    | Uint16Array
    | Int16Array
    | Uint8ClampedArray
    | Uint8Array
    | Int8Array;

/**
 * 顶点数据格式。
 */
export type IVertexFormat =
    | "uint8x2"
    | "uint8x4"
    | "sint8x2"
    | "sint8x4"
    | "unorm8x2"
    | "unorm8x4"
    | "snorm8x2"
    | "snorm8x4"
    | "uint16x2"
    | "uint16x4"
    | "sint16x2"
    | "sint16x4"
    | "unorm16x2"
    | "unorm16x4"
    | "snorm16x2"
    | "snorm16x4"
    | "float16x2"
    | "float16x4"
    | "float32"
    | "float32x2"
    | "float32x3"
    | "float32x4"
    | "uint32"
    | "uint32x2"
    | "uint32x3"
    | "uint32x4"
    | "sint32"
    | "sint32x2"
    | "sint32x3"
    | "sint32x4"
    | "unorm10-10-10-2";