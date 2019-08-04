import Common from '../src/lib/common.js';

describe("单元测试", function(){
    it("通用模块测试用例", function(){
        let common = new Common();

        // 测试add方法
        assert.equal(0, common.add(0));
        assert.equal(2, common.add(1));

        // 测试url地址转换
        const url = 'http://www.uomi.top/product/abc/list?id=123456&sort=discount#title';
        const expectResult = {
            protocol: 'http',
            host: 'www.uomi.top',
            path: '/product/abc/list',
            hash: 'title',
            query: {
                id: 123456,
                sort: 'discount'
            }
        }
        // 该测试用例无法达到 100% 覆盖，仅作为演示用例
        assert.equal(expectResult, common.parseUrlToObj(url));
    });
});