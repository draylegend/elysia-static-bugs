import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import {
  bootstrapApplication,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppFeature } from './app/app.feature';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppFeature, {
  providers: [
    provideClientHydration(withEventReplay()),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(appRoutes),
  ],
}).catch(err => console.error(err));
