# version to avoid caching issue with the browser for multiple files with ease

1. add a query param to each file you want to avoid browser caching when deploying new version to the server.

2. for first time use, the name of the query value should be this name: app_version_1 

3. query example: <script src="myFile.js?v=app_version_1"></script>

4. each time you run: 'npm run app-version' from the command line, version number will be increment by 1

5. to reset version to 1, run: 'npm run app-version-reset' from the command line.

6. be the version.js app_version_{number} is the same as in the files you plane to increment the version 

7. add more files to change versions in filesLocation array insdie app_version.js
