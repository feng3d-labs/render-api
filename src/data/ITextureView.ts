/**
 * 纹理视图。
 */
export interface ITextureView
{
    /**
     * mipmap级别。
     *
     * 默认为 0。
    */
   readonly baseMipLevel?: number;

   /**
    * 纹理数组中的层次。
    *
    * 默认为 0。
    */
    readonly baseArrayLayer?: number;
}