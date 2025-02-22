import { ColorTargetState } from "./ColorTargetState";
import { Data } from "./Data";

/**
 * 片段着色器阶段描述。
 *
 * {@link GPUFragmentState}
 */
@Data.reg
export class FragmentState extends Data
{
    __type__?: "FragmentState" = "FragmentState";

    /**
     * 着色器代码。
     */
    code: string;

    /**
     * A list of {@link GPUColorTargetState} defining the formats and behaviors of the color targets
     * this pipeline writes to.
     *
     * 定义了该管道写入的颜色目标的格式和行为。
     *
     * 注：WebGL中没法分别对每个颜色附件进行设置，统一使用第一项（targets[0]）设置！
     */
    @Data.type(ColorTargetState)
    readonly targets?: readonly ColorTargetState[] = [];
}
