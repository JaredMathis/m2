export function test_a() {
    return test_b() + test_c() + test_d();
}
function test_b() {
    return 'b' + test_c() + test_d();
}
function test_c() {
    return 'c' + test_d();
}
function test_d() {
    return 'd';
}