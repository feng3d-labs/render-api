import { Data } from "./Data";

/**
 * 顶点着色器阶段描述。
 */
@Data.reg
export class VertexState extends Data
{
    __type__?: "VertexState" = "VertexState";

    /**
     * 着色器代码。
     */
    code: string;
}