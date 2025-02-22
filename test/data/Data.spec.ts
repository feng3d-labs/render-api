import { TextureImageSource } from "@feng3d/render-api";
import { assert, describe, it } from "vitest";

describe("Data", () =>
{
    it("getInstance", () =>
    {
        const instance = TextureImageSource.getInstance({ image: undefined as any })

        assert.equal(instance.constructor, TextureImageSource);
    });
});
