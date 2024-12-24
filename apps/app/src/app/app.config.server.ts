import {
  ApplicationConfig,
  mergeApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { provideServerRoutesConfig } from '@angular/ssr';

import { serverRoutes } from '../server.routes';
import { appRoutes } from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes),
  ],
};

export const config = mergeApplicationConfig(
  {
    providers: [
      provideClientHydration(withEventReplay()),
      provideExperimentalZonelessChangeDetection(),
      provideRouter(appRoutes),
    ],
  },
  serverConfig,
);
