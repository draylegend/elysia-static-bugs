import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';
import { join } from 'path';
import { Config } from 'tailwindcss';

export default {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
} satisfies Config;
