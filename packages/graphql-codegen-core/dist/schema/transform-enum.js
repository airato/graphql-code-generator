(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../debugging", "../utils/get-directives"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const debugging_1 = require("../debugging");
    const get_directives_1 = require("../utils/get-directives");
    function transformGraphQLEnum(schema, graphqlEnum) {
        debugging_1.debugLog(`[transformGraphQLEnum] transformed enum ${graphqlEnum.name}`);
        const directives = get_directives_1.getDirectives(schema, graphqlEnum);
        const enumValues = graphqlEnum.getValues().map((enumItem) => {
            return {
                name: enumItem.name,
                description: enumItem.description || '',
                value: enumItem.value
            };
        });
        return {
            name: graphqlEnum.name,
            description: graphqlEnum.description || '',
            values: enumValues,
            directives,
            usesDirectives: Object.keys(directives).length > 0,
        };
    }
    exports.transformGraphQLEnum = transformGraphQLEnum;
});
//# sourceMappingURL=transform-enum.js.map