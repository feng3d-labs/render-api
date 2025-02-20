import { IVertexAttribute, IVertexFormat } from "../data/IVertexAttributes";

export class VertexAttribute
{
    static getAttributeCount(attribute: IVertexAttribute)
    {
        if (attribute.stepMode === "instance") 
        {
            return 1;
        }

        attribute.data
        attribute.offset
        attribute.format
        attribute.arrayStride
        attribute.stepMode

        const itemSize = this.getAttributeItemSize(attribute.format);


    }

    static getAttributeItemSize(format: IVertexFormat)
    {
        return 0;
    }
}
