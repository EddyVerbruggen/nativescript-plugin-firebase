// the main monolith
export * from './firebase';

// the modules I've already extracted from the monolith
export * from './analytics';
export * from './storage';
import * as ml from './mlkit';
export declare const mlkit: typeof ml;
