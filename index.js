const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BacktrackImportsPlugin = require('backtrack-imports-plugin').BacktrackImportsPlugin;

class WrapperPlugin {
    apply(compiler) {
        const plugins = [
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                reportFilename: compiler.options.name === 'client'
                    ? '../analyze/client.html'
                    : './analyze/server.html',
            }),
            new BacktrackImportsPlugin({})
        ]
        plugins.forEach((plugin) => {
            plugin.apply(compiler);
        });
    }
}

module.exports = {
    WrapperPlugin
};