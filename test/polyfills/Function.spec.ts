import { assert, describe, it } from "vitest";
import "../../src/polyfills/Function";

describe("Function", () =>
{
    it("should register initialization function", () =>
    {
        class TestClass { }
        let initialized = false;

        TestClass._reg((instance) =>
        {
            initialized = true;
            return () => initialized = false;
        });

        const instance = new TestClass();
        TestClass._init(instance);

        assert.ok(initialized);
        assert.ok(TestClass.__initFuncs);
    });

    it("should execute cleanup functions", () =>
    {
        class TestClass { }
        let cleaned = false;

        TestClass._reg(() => () => cleaned = true);
        const instance = new TestClass();
        TestClass._init(instance);

        TestClass._del(instance);
        assert.ok(cleaned);
        assert.ok(!TestClass.__map.has(instance));
    });

    it("should handle multiple initializations", () =>
    {
        class TestClass { }
        let count = 0;

        TestClass._reg(() =>
        {
            count++;
            return () => count--;
        });

        const instance = new TestClass();
        TestClass._init(instance);
        TestClass._init(instance);

        assert.equal(count, 1);
    });

    it("should handle non-constructor calls", () =>
    {
        assert.throws(() => Object._reg(() => () => { }), /只能用于不是Object的构造函数/);
        assert.throws(() => Object._init({}), /只能用于不是Object的构造函数/);
    });
});
