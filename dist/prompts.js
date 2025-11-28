import inquirer from 'inquirer';
export async function askQuestions(projectName, flags) {
    const nonInteractive = !!flags.yes || !!flags.nonInteractive || process.env.CI === '1' || process.env.CI === 'true';
    const base = {
        projectName,
        language: flags.js ? 'js' : 'ts',
        packageManager: flags.pm === 'yarn' ? 'yarn' : 'npm',
        ci: flags.ci,
        reporter: flags.reporter,
        husky: flags.husky !== false,
        zephyr: !!flags.zephyr,
        preset: flags.preset,
    };
    // 🚫 No prompts in non-interactive mode: return defaults/flags
    if (nonInteractive) {
        return {
            projectName,
            language: (base.language ?? 'ts'),
            packageManager: (base.packageManager ?? 'npm'),
            ci: (base.ci ?? 'github'),
            reporter: (base.reporter ?? 'allure'),
            notifications: (base.notifications ?? 'email'),
            husky: base.husky ?? true,
            zephyr: base.zephyr ?? false,
            preset: (base.preset ?? 'web'),
        };
    }
    const questions = [
        {
            type: 'list',
            name: 'packageManager',
            message: 'Package manager?',
            choices: [
                { name: 'npm', value: 'npm' },
                { name: 'yarn', value: 'yarn' },
            ],
            default: base.packageManager,
        },
        {
            type: 'list',
            name: 'language',
            message: 'Language?',
            choices: [
                { name: 'TypeScript', value: 'ts' },
                { name: 'JavaScript', value: 'js' },
            ],
            default: base.language,
        },
        {
            type: 'list',
            name: 'preset',
            message: 'Preset?',
            choices: [
                { name: 'Web (UI/POM + fixtures)', value: 'web' },
                { name: 'API (Axios + assertions)', value: 'api' },
                { name: 'Hybrid (UI + API)', value: 'hybrid' },
            ],
            default: base.preset,
        },
        {
            type: 'list',
            name: 'ci',
            message: 'CI provider?',
            choices: ['github', 'gitlab', 'none'],
            default: base.ci,
        },
        {
            type: 'list',
            name: 'reporter',
            message: 'Reporter?',
            choices: ['html', 'allure', 'monocart'],
            default: base.reporter,
        },
        {
            type: 'list',
            name: 'notifications',
            message: 'Select notification channels:',
            choices: [
                { name: 'Email', value: 'email' },
                { name: 'Slack', value: 'slack' },
                { name: 'Teams', value: 'teams' },
            ],
            default: base.notifications,
        },
        {
            type: 'confirm',
            name: 'husky',
            message: 'Include Husky pre-commit hooks?',
            default: base.husky,
        },
        {
            type: 'confirm',
            name: 'zephyr',
            message: 'Include Zephyr publish stub?',
            default: base.zephyr,
        },
    ];
    // One pragmatic cast to avoid the union-overload fight in v12:
    const answers = await inquirer.prompt(questions);
    return { ...base, ...answers };
}
//# sourceMappingURL=prompts.js.map