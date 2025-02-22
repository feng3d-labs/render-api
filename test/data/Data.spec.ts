import { CommandEncoder, CopyBufferToBuffer, Data, Geometry, Material, PrimitiveState, RenderObject, RenderPass, RenderPassColorAttachment, RenderPassDescriptor, Submit, TextureImageSource, TextureView, VertexAttributes } from "@feng3d/render-api";
import { assert, describe, it } from "vitest";

describe("Data", () =>
{
    it("getInstance", () =>
    {
        const instance = TextureImageSource.getInstance({ image: undefined as any })

        assert.equal(instance.constructor, TextureImageSource);

        assert.equal(new CopyBufferToBuffer().__type__, "CopyBufferToBuffer");
    });

    it("getInstance", () =>
    {
        @Data.reg
        class A extends Data
        {
            __type__: 'A' = 'A';
            a = 1;
        }

        const a = Data.getInstance({ __type__: 'A', a: 2 });

        assert.equal(a.constructor, A);
    });

    it("getInstance", () =>
    {
        @Data.reg
        class B extends Data
        {
            __type__?: 'B' = 'B';
            b = true;
        }

        @Data.reg
        class AA extends Data
        {
            __type__?: 'AA' = 'AA';
            n = 1;

            b0? = true;

            s? = "s";

            obj?: any;

            b? = new B();

            @Data.type(B)
            arr?: B[];
        }

        const a = AA.getInstance({
            __type__: 'AA',
            n: 2,
            b0: false,
            s: "s2",
            obj: { a: 1 },
            b: { b: false },
            arr: [{ __type__: "B", b: false }, { b: true }, new B()],
        });

        assert.equal(a.constructor, AA);
        assert.equal(a.b!.constructor, B);
        assert.equal(a.arr![0]!.constructor, B);
    });

    it("getInstance", () =>
    {
        const submit: Submit = { // 一次GPU提交
            commandEncoders: [ // 命令编码列表
                {
                    passEncoders: [ // 通道编码列表
                        { // 渲染通道
                            descriptor: { // 渲染通道描述
                                colorAttachments: [{ // 颜色附件
                                    // view: { texture: { context: { canvasId: "canvas.id" } } }, // 绘制到canvas上
                                    clearValue: [0.0, 0.0, 0.0, 1.0], // 渲染前填充颜色
                                }],
                            },
                            renderObjects: [{ // 渲染对象
                                material: { // 渲染管线
                                    vertex: { // 顶点着色器
                                        code: `
                                    @vertex
                                    fn main(
                                        @location(0) position: vec2<f32>,
                                    ) -> @builtin(position) vec4<f32> {
                                        return vec4<f32>(position, 0.0, 1.0);
                                    }
                                    ` },
                                    fragment: { // 片段着色器
                                        code: `
                                        @binding(0) @group(0) var<uniform> color : vec4<f32>;
                                        @fragment
                                        fn main() -> @location(0) vec4f {
                                            return color;
                                        }
                                    ` },
                                },
                                geometry: {
                                    vertices: {
                                        position: { data: new Float32Array([0.0, 0.5, -0.5, -0.5, 0.5, -0.5]), format: "float32x2" }, // 顶点坐标数据
                                    },
                                    indices: new Uint16Array([0, 1, 2]), // 顶点索引数据
                                    draw: { __type__: "DrawIndexed", indexCount: 3 }, // 绘制命令
                                },
                                uniforms: { color: [1, 0, 0, 0] }, // Uniform 颜色值。
                            }]
                        },
                    ]
                }
            ],
        };

        const instance = Submit.getInstance(submit);
        assert.equal(instance.constructor, Submit);

        assert.equal(instance.commandEncoders[0].constructor, CommandEncoder);

        assert.equal(instance.commandEncoders[0].passEncoders[0].constructor, RenderPass);

        const renderpass = instance.commandEncoders[0].passEncoders[0] as RenderPass

        assert.equal(renderpass.descriptor!.constructor, RenderPassDescriptor);
        assert.equal(renderpass.descriptor!.colorAttachments![0].constructor, RenderPassColorAttachment);
        assert.equal(renderpass.descriptor!.colorAttachments![0].view!.constructor, TextureView);

        assert.equal(renderpass.renderObjects![0].constructor, RenderObject);
        assert.equal(renderpass.renderObjects![0].material!.constructor, Material);
        assert.equal(renderpass.renderObjects![0].geometry!.constructor, Geometry);

        assert.equal(renderpass.renderObjects![0].geometry!.vertices!.constructor, VertexAttributes);
        assert.equal(renderpass.renderObjects![0].geometry!.primitive!.constructor, PrimitiveState);
    });
});
