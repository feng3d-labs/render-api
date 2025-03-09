import { assert, describe, it } from "vitest";
import "../../src/polyfills/Function";

describe("Function", () =>
{
    it("应该初始化null时直接返回null", () =>
    {
        class TestClass { initialized: boolean }

        TestClass._reg((instance) =>
        {
            instance.initialized = true;
            return () => instance.initialized = false;
        });

        {
            const result = TestClass._init(null as any);
            assert.equal(result, null);
        }

        {
            const result = TestClass._init(undefined as any);
            assert.equal(result, undefined);
        }
    });

    it("应该注册初始化函数", () =>
    {
        class TestClass { }
        let initialized = false;

        TestClass._reg((instance) =>
        {
            initialized = true;
            return () => initialized = false;
        });

        const instance: TestClass = {};
        TestClass._init(instance);

        assert.ok(initialized);
        assert.ok(TestClass.__initFuncs);
    });

    it("应该调用初始化函数后返回传入的实例", () =>
    {
        class TestClass { }

        TestClass._reg((instance) =>
        {
            return () => { };
        });

        const instance: TestClass = {};
        const ins = TestClass._init(instance);

        assert.equal(ins, instance); // 应该返回传入的实例
    });

    it("应该执行清理函数", () =>
    {
        class TestClass { }
        let cleaned = false;

        TestClass._reg(() => () => cleaned = true);
        const instance: TestClass = {};
        TestClass._init(instance);

        TestClass._del(instance);
        assert.ok(cleaned);
        assert.ok(!TestClass.__map.has(instance));
    });

    it("应该处理多次初始化", () =>
    {
        class TestClass { }
        let count = 0;

        TestClass._reg(() =>
        {
            count++;
            return () => count--;
        });

        const instance: TestClass = {};
        TestClass._init(instance);
        TestClass._init(instance);

        assert.equal(count, 1);
    });

    it("应该处理非构造函数调用", () =>
    {
        assert.throws(() => Object._reg(() => () => { }), /只能用于不是Object的构造函数/);
        assert.throws(() => Object._init({}), /只能用于不是Object的构造函数/);
    });
});
