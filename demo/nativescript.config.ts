import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'org.nativescript.firebasedemo',
  appResourcesPath: 'app_resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  discardUncaughtJsExceptions: false,
  appPath: 'app',
} as NativeScriptConfig
