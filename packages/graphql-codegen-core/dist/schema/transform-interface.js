(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./transform-fields", "../debugging", "../utils/get-directives"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const transform_fields_1 = require("./transform-fields");
    const debugging_1 = require("../debugging");
    const get_directives_1 = require("../utils/get-directives");
    function transformInterface(schema, gqlInterface) {
        debugging_1.debugLog(`[transformInterface] transformed interface ${gqlInterface.name}`);
        const resolvedFields = transform_fields_1.resolveFields(schema, gqlInterface.getFields());
        const directives = get_directives_1.getDirectives(schema, gqlInterface);
        return {
            name: gqlInterface.name,
            description: gqlInterface.description || '',
            fields: resolvedFields,
            hasFields: resolvedFields.length > 0,
            directives,
            usesDirectives: Object.keys(directives).length > 0,
        };
    }
    exports.transformInterface = transformInterface;
});
//# sourceMappingURL=transform-interface.js.map