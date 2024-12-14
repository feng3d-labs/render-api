import { IBlendState } from "../data/IBlendState";

/**
 * 当混合系数用到了混合常量值时设置混合常量值。
 * 
 * @param blend 
 * @returns 
 */
export function getBlendConstantColor(blend: IBlendState)
{
    const { color, alpha, constantColor } = blend;

    // 当混合系数用到了混合常量值时设置混合常量值。
    if (0
        || color?.srcFactor === "constant"
        || color?.srcFactor === "one-minus-constant"
        || color?.dstFactor === "constant"
        || color?.dstFactor === "one-minus-constant"
        || alpha?.srcFactor === "constant"
        || alpha?.srcFactor === "one-minus-constant"
        || alpha?.dstFactor === "constant"
        || alpha?.dstFactor === "one-minus-constant"
    )
    {
        return constantColor ?? [0, 0, 0, 0];
    }

    return undefined;
}
