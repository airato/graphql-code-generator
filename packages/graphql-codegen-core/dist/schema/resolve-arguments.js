(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "graphql", "./resolve-type", "./resolve-type-indicators", "../debugging", "../utils/get-directives"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const graphql_1 = require("graphql");
    const resolve_type_1 = require("./resolve-type");
    const resolve_type_indicators_1 = require("./resolve-type-indicators");
    const debugging_1 = require("../debugging");
    const get_directives_1 = require("../utils/get-directives");
    function resolveArguments(schema, args) {
        return args.map((arg) => {
            const type = resolve_type_1.resolveType(arg.type);
            const namedType = graphql_1.getNamedType(arg.type);
            const indicators = resolve_type_indicators_1.resolveTypeIndicators(namedType);
            const directives = get_directives_1.getDirectives(schema, arg);
            debugging_1.debugLog(`[resolveArguments] resolving argument ${arg.name} of type ${type.name}...`);
            return {
                name: arg.name,
                description: arg.description || '',
                type: type.name,
                isRequired: type.isRequired,
                isArray: type.isArray,
                isEnum: indicators.isEnum,
                isScalar: indicators.isScalar,
                isInterface: indicators.isInterface,
                isUnion: indicators.isUnion,
                isInputType: indicators.isInputType,
                isType: indicators.isType,
                directives,
                usesDirectives: Object.keys(directives).length > 0,
            };
        });
    }
    exports.resolveArguments = resolveArguments;
});
//# sourceMappingURL=resolve-arguments.js.map