import { ICommandEncoder } from "./ICommandEncoder";

/**
 * 一次 GPU 提交。
 */
export interface ISubmit
{
    /**
     * 命令编码器列表。
     */
    commandEncoders: ICommandEncoder[];
}
