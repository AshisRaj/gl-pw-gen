import { describe, expect, it } from 'vitest';
import { makeTmpDir, runCLI } from './helpers';

describe('CLI help', () => {
  it('prints help for `init -h` with all options', async () => {
    const tmp = makeTmpDir();
    const { out, exitCode } = await runCLI(tmp, ['init', '-h']);

    // Commander usually exits 0 for help
    expect(exitCode).toBe(0);

    // Top usage line (escape [options])
    expect(out).toMatch(/^Usage:\s+gl-pw-gen init \[options\] <project-name>/im);

    // Key options you expose
    expect(out).toMatch(/--pm <name>.*Package manager.*\(npm\|yarn\)/i);
    expect(out).toMatch(/--js\b.*Use JavaScript/i);
    expect(out).toMatch(/--ci <provider>.*\(github\|gitlab\|none\)/i);
    expect(out).toMatch(/--reporter <name>.*\(html\|allure\|monocart\)/i);
    expect(out).toMatch(/-y, --yes\b.*skip prompts/i);
    expect(out).toMatch(/--non-interactive\b.*Alias of --yes/i);
  });
});
