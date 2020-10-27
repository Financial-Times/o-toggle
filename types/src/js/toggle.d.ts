export default Toggle;
declare class Toggle {
    static init(el: any, config: any): Toggle[];
    constructor(toggleEl: any, config: any);
    callback: any;
    toggleEl: any;
    toggle(e: any): void;
    targetEl: any;
    target: any;
    open(): void;
    close(): void;
    destroy(): void;
}
declare namespace Toggle {
    export { Target };
}
import Target from "./target.js";
