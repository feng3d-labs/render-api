import { CopyBufferToBuffer, Data, TextureImageSource } from "@feng3d/render-api";
import { assert, describe, it } from "vitest";

declare module "@feng3d/render-api"
{
    export interface DataMap
    {
        A: A;
    }
}

@Data.reg
export class A extends Data
{
    __type__: 'A' = 'A';
    a = 1;
}

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
        const a = Data.getInstance({ __type__: 'A1', a: 2 });

        assert.equal(a.constructor, A);
    });
});
