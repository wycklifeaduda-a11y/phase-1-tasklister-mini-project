const appScript = document.createElement("script");
appScript.src = new URL("./src/index.js", document.currentScript.src);
document.currentScript.after(appScript);
