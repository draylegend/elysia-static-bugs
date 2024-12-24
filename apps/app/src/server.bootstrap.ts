import { bootstrapApplication } from '@angular/platform-browser';

import { config } from './app/app.config.server';
import { AppFeature } from './app/app.feature';

export default () => bootstrapApplication(AppFeature, config);
