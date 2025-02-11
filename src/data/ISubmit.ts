import { ICommandEncoder } from "./ICommandEncoder";

/**
 * 一次 GPU 提交。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/GPUQueue/submit
 */
export interface ISubmit
{
    /**
     * 命令编码器列表。
     */
    commandEncoders: ICommandEncoder[];
}
