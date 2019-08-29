const plugins = [];
// import '@babel/polyfill'  必须配置useBuiltIns: entry
module.exports = {
 presets: [["@vue/app",{"useBuiltIns": "entry"}]],
 plugins: plugins
};

