(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "graphql", "../debugging"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const graphql_1 = require("graphql");
    const debugging_1 = require("../debugging");
    function isRequired(type) {
        return (String(type)).indexOf('!') > -1;
    }
    exports.isRequired = isRequired;
    function isArray(type) {
        return (String(type)).indexOf('[') > -1;
    }
    exports.isArray = isArray;
    function resolveType(type) {
        const name = graphql_1.getNamedType(type).name;
        debugging_1.debugLog(`[resolveType] resolving type ${name}`);
        return {
            name,
            isRequired: isRequired(type),
            isArray: isArray(type),
        };
    }
    exports.resolveType = resolveType;
});
//# sourceMappingURL=resolve-type.js.map