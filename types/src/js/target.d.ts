export default Target;
declare class Target {
    constructor(toggle: any);
    targetEl: any;
    toggles: any[];
    addToggle(toggle: any): void;
    removeToggle(toggle: any): void;
    open(): void;
    close(): void;
    toggle(): void;
    isOpen(): any;
}
