import { CopyBufferToBuffer, Data, TextureImageSource } from "@feng3d/render-api";
import { assert, describe, it } from "vitest";

describe("Data", () =>
{
    it("getInstance", () =>
    {
        const instance = TextureImageSource.getInstance({ image: undefined as any })

        assert.equal(instance.constructor, TextureImageSource);

        assert.equal(new CopyBufferToBuffer().__type, "CopyBufferToBuffer");
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

        console.log(a);
        assert.equal(a.constructor, AA);
        assert.equal(a.b!.constructor, B);
        assert.equal(a.arr![0]!.constructor, B);
    });
});
