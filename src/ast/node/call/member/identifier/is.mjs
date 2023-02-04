import { ast_node_type_is } from './../../../type/is.mjs';
import { ast_node_identifier_is } from './../../../identifier/is.mjs';
export function ast_node_call_member_identifier_is(node, if_true) {
    if (ast_node_type_is(node, 'CallExpression')) {
        let {callee} = node;
        if (ast_node_type_is(callee, 'MemberExpression')) {
            let {property} = callee;
            if (ast_node_identifier_is(property)) {
                let {name} = property;
                if_true(name, node, callee);
            }
        }
    }
}