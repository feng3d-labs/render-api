/// <reference types="@webgpu/types" />

/// <reference types="./debug.d.ts" />
/// <reference types="./shader.d.ts" />

export * from './consts/vertexFormatMap';

export * from './data/BindingResources';
export * from './data/BlendComponent';
export * from './data/BlendState';
export * from './data/Buffer';
export * from './data/BufferBinding';
export * from './data/CanvasContext';
export * from './data/CanvasTexture';
export * from './data/ColorTargetState';
export * from './data/CommandEncoder';
export * from './data/CopyBufferToBuffer';
export * from './data/CopyTextureToTexture';
export * from './data/DepthStencilState';
export * from './data/DrawIndexed';
export * from './data/DrawVertex';
export * from './data/FragmentState';
export * from './data/ImageCopyTexture';
export * from './data/OcclusionQuery';
export * from './data/PrimitiveState';
export * from './data/ReadPixels';
export * from './data/RenderObject';
export * from './data/RenderPass';
export * from './data/RenderPassColorAttachment';
export * from './data/RenderPassDepthStencilAttachment';
export * from './data/RenderPassDescriptor';
export * from './data/RenderPipeline';
export * from './data/Sampler';
export * from './data/ScissorRect';
export * from './data/StencilFaceState';
export * from './data/Submit';
export * from './data/Texture';
export * from './data/TextureDataSource';
export * from './data/TextureImageSource';
export * from './data/TextureView';
export * from './data/TransformFeedbackPass';
export * from './data/VertexAttributes';
export * from './data/VertexState';
export * from './data/Viewport';
export * from './data/WriteBuffer';

export * from './internal/BufferBindingInfo';

export * from './types/TypedArray';

export * from './utils/ChainMap';
export * from './utils/unreadonly';

export const renderState = {
    isRunWebGPU: false,
    isRunWebGL: false,
}