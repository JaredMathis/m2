export function test_a() {
    return test_b() + test_c() + test_d();
}
function test_b() {
    return 'b';
}
function test_c() {
    return 'c';
}
function test_d() {
    return 'd';
}