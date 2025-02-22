import { CommandEncoder } from "./CommandEncoder";
import { Data } from "./Data";

/**
 * 一次 GPU 提交。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/GPUQueue/submit
 */
export class Submit extends Data
{
    /**
     * 命令编码器列表。
     */
    commandEncoders: CommandEncoder[];
}
