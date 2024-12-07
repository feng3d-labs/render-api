/**
 * GPU计算通道编码器。
 *
 * @see GPUCommandEncoder.beginComputePass
 * @see GPUComputePassEncoder
 */
export interface IComputePass
{
    /**
     * 数据类型。
     */
    readonly __type: "ComputePass";
}