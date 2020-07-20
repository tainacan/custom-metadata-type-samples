# Custom Metadata Type Samples

This repo contains a list of simples sample custom metadata type plugins for Tainacan. It is intended to be used with the oficial documentation for registering custom metadata type:

https://tainacan.github.io/tainacan-wiki/#/dev/creating-metadata-type

- **custom-metadata-type** - contains a simples *numberinput* metadata type;
- **custom-metadata-type_v2** - is the same *numberinput* plus a registered form component, that adds an option "step" to it;
- **custom-metadata-type_v3** - is the same, but instead of a plain javascript, a vue component is used, thus basic webpack setup is necessary. This is the one to go if you are looking for usage of extra third party components. Keep in mind that, beside adaptations to the `package.json` and `webpack.config.js` files, you will also need to run:

```
npm install
npm run build
```
