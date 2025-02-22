import { CommandEncoder } from "./CommandEncoder";
import { Data } from "./Data";

/**
 * 一次 GPU 提交。
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/GPUQueue/submit
 */
@Data.reg
export class Submit extends Data
{
    __type__?: "Submit" = "Submit";

    /**
     * 命令编码器列表。
     */
    get commandEncoders(): CommandEncoder[]
    {
        return this._commandEncoders;
    }
    set commandEncoders(value: CommandEncoder[])
    {
        if (!value) return;
        this._commandEncoders = value.map((v) => CommandEncoder.getInstance(v));
    }
    protected _commandEncoders?: CommandEncoder[];
}
