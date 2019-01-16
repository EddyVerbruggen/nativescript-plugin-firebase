### Building our jar with some glue code
From this folder, run:

```bash
javac -source 1.7 -target 1.7 -cp ~/Toolshed/android-adk-macos/platforms/android-28/android.jar  -d ./ -sourcepath ./org/nativescript/plugins/firebase/mlkit ./org/nativescript/plugins/firebase/mlkit/*.java
jar cfve ../nativescript-firebase-mlkit-helper.jar BitmapUtil ./org/nativescript/plugins/firebase/mlkit/BitmapUtil.class
```