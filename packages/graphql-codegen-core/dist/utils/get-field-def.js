(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "graphql"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const graphql_1 = require("graphql");
    function getFieldDef(parentType, fieldAST) {
        const name = fieldAST.name.value;
        if (name === '__typename') {
            return null;
        }
        if (parentType instanceof graphql_1.GraphQLObjectType ||
            parentType instanceof graphql_1.GraphQLInterfaceType) {
            return parentType.getFields()[name];
        }
        return null;
    }
    exports.getFieldDef = getFieldDef;
});
//# sourceMappingURL=get-field-def.js.map