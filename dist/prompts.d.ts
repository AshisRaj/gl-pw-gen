export type Answers = {
    projectName: string;
    language: 'ts' | 'js';
    packageManager: 'npm' | 'yarn';
    ci: 'github' | 'gitlab' | 'none';
    reporter: 'html' | 'allure' | 'monocart';
    notifications: 'email' | 'slack' | 'teams';
    husky: boolean;
    zephyr: boolean;
    preset: 'web' | 'api' | 'hybrid';
};
export declare function askQuestions(projectName: string, flags: any): Promise<Answers>;
