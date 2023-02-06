import { tests } from "../../tests.mjs";
import { function_auto } from "../auto.mjs";

export function function_auto_tests(function_name) {
    await function_auto(function_name);
    await tests();
}