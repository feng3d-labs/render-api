import { vertexFormatMap as vertexAttributeFormatMap } from "../consts/vertexFormatMap";
import { IVertexAttribute } from "../data/IVertexAttributes";

export class VertexAttribute
{
    /**
     * 获取顶点属性数据的顶点数量。 
     * 
     * @param attribute 顶点属性数据。
     * @returns 
     */
    static getVertexCount(attribute: IVertexAttribute)
    {
        if (attribute.stepMode === "instance") 
        {
            return 1;
        }

        // 单个顶点属性数据尺寸。
        const attributeSize = vertexAttributeFormatMap[attribute.format].byteSize;
        const offset = attribute.offset || 0;
        // 一个顶点数据尺寸，可能包括多个顶点属性（例如一个position 和 uv 共 3*4 + 2*4 = 20 字节）。
        const arrayStride = attribute.arrayStride || attributeSize;

        const attributeCount = (attribute.data.byteLength - offset) / arrayStride;

        return attributeCount;
    }
}
