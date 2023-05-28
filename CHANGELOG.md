# CHANGELOG

## v1.7.0 - 2023.05.29 01
* (break) remove outdated `parseBoolAttr`. `brop` is better.
* bump up dependencies
	* update `@nuogz/i18n` to `v1.3.0` to properly support browser build
	* update `typescript` to `v5.x`, and renew jsdoc
* use eslint flat config, and related config udpate
	* use `eslint.config.js` instead `eslintrc.cjs`
	* renew file struct to suit new eslint flat config


## v1.6.6 - 2023.05.19 17
* add `copy-json.web.js` to avoid import `i18n` when building webpage


## v1.6.5 - 2023.04.07 11
* bump up dependencies


## v1.6.4 - 2023.04.03 16
* bump up dependencies


## v1.6.3 - 2023.03.31 16
* bump up dependencies


## v1.6.2 - 2023.03.07 17
* bump up dependencies


## v1.6.1 - 2023.02.02 14
* fix `injectBaseLogger.d.ts`


## v1.6.1 - 2023.02.02 14
* fix `injectBaseLogger.d.ts`


## v1.6.0 - 2023.02.02 14
* half restruct `injectBaseLogger`


## v1.5.1 - 2023.01.05 16
* add declaration files
* bump up dependencies


## v1.5.0 - 2023.01.05 10
* add `injectBaseLogger`


## v1.4.1 - 2022.09.15 01
* try to improve package export


## v1.4.0 - 2022.09.02 17
* add `readPackage`
* add `getSafe`


## v1.3.3 - 2022.08.31 11
* use `@nuogz/json-bigint` instead `json-bigint` in `copyJSON`


## v1.3.2 - 2022.08.30 11
* fix import `json-bigint` when `copyJSON` 


## v1.3.1 - 2022.08.30 01
* add `sideEffects` to `package.json`
* bump up dependencies


## v1.3.0 - 2022.08.25 18
* improve `copyJSON` support to handle `BigInt` by `json-bigint`


## v1.2.1 - 2022.08.24 15
* improve package info
* improve `.eslintrc.cjs` for lint better
* move files for lint better


## v1.2.0 - 2022.08.22 15
* update `brop`
* add `toCSSLength`
* rename `parseBoolAttr` to `parseBoolProp`


## v1.1.0 - 2022.08.22 14
* fixed break
* no more splitting `node` and `browser` environments
* update `jsconfig.json`
* tweak `.eslintrc.cjs` for special environment


## v1.0.0 - 2022.08.22 11
* independent from many projects
* tweak all files for publishing to npm
* start use `CHANGLOG.md` since version `v1.0.0`
