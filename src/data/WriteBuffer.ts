import { TypedArray } from "../types/TypedArray";

export interface WriteBuffer
{
    __type__?: "WriteBuffer";

    /**
     * GPU缓冲区写入起始位置。
     */
    bufferOffset?: number;

    /**
     * 写入缓冲区数据。
     */
    data: ArrayBufferLike | TypedArray;

    /**
     * 读取数据的起始位置。
     *
     * 默认为 0 。
     *
     * 当写入的数据类型为 {@link ArrayBufferLike} 时单位为字节，当数据类型为 {@link TypedArray} 时单位为元素。
     */
    dataOffset?: number;

    /**
     * 写入数据尺寸。
     *
     * 当写入的数据类型为 {@link ArrayBufferLike} 时单位为字节，当数据类型为 {@link TypedArray} 时单位为元素。
     */
    size?: number;
}
