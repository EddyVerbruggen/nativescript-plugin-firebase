// the main monolith
export * from './firebase';

// the modules that have already been extracted from the monolith (which can be imported separately)
export * from './admob';
export * from './analytics';
export * from './crashlytics';
export * from './performance';
export * from './storage';
export * from './messaging';
import * as ml from './mlkit';
export declare const mlkit: typeof ml;
