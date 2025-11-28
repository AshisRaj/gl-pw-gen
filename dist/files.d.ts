export declare function ensureDir(p: string): Promise<void>;
export declare function copyDir(src: string, dst: string): Promise<void>;
export declare function renderAndCopyDir(src: string, dst: string, data: any): Promise<void>;
export declare function writeJSON(p: string, obj: any): Promise<void>;
