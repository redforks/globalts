/**
 * global object in works under any javascript environment, include node.js, browser.
 *
 * Not named as global, to prevent corrupt nodejs builtin global variable.
 */
export default new Function('return this')();
