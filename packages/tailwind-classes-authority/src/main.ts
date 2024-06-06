import { miniAndCoumpounds } from "./configs/miniAndCoumpound";

// createMultiTV
// createOneTV
// Merge classes -> base => variant => compound => className

const { root } = miniAndCoumpounds();

console.log(root({"bonjour": "hello"}));
