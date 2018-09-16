@echo off
SET SOURCE_DIR=.\..\src
SET TO_SOURCE_DIR=.\src
SET PACK_DIR=.\package
SET ROOT_DIR=.\..
SET PUBLISH=--publish
call npm i

echo Clearing /src and /package...
@RD /S /Q %TO_SOURCE_DIR%
@RD /S /Q %PACK_DIR%

REM copy src
echo 'Copying src...'
xcopy /s %SOURCE_DIR% %TO_SOURCE_DIR%\

REM copy README & LICENSE to src
echo 'Copying README and LICENSE to /src...'
copy %ROOT_DIR%\LICENSE %TO_SOURCE_DIR%\LICENSE
copy %ROOT_DIR%\README.md %TO_SOURCE_DIR%\README.md

REM compile package and copy files required by npm
echo 'Building /src...'
cd %TO_SOURCE_DIR%
call node_modules/.bin/tsc
cd ..

echo 'Creating package...'
REM create package dir
mkdir %PACK_DIR%

REM create the package
cd %PACK_DIR%
call npm pack ..\%TO_SOURCE_DIR%

REM delete source directory used to create the package
cd ..
@RD /S /Q %TO_SOURCE_DIR%