import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { isMainModule } from '@angular/ssr/node';
import { staticPlugin } from '@elysiajs/static';
import { Elysia } from 'elysia';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = dirname(fileURLToPath(import.meta.url));
const elysia = new Elysia()
  .use(
    staticPlugin({
      alwaysStatic: true,
      assets: resolve(dist, '../browser'),
      prefix: '',
    }),
  )
  .get('/*', c => new AngularAppEngine().handle(c.request));

isMainModule(import.meta.url) &&
  elysia.listen(process.env['PORT'] || 4000, ({ url }) =>
    console.log(`🦊 ${url.href}`),
  );

export const reqHandler = createRequestHandler(elysia.fetch);
