@ECHO OFF

ECHO Removing old nupkg
del /S *.nupkg

ECHO Packing the NuGet release files
..\.nuget\NuGet.exe Pack Lecoati.BlenderGrid.nuspec

ECHO Publish NuGet
..\.nuget\NuGet.exe Push Lecoati.BlenderGrid*.nupkg

PAUSE
