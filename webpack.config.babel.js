import path from 'path'
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import LoaderOptionsPlugin from 'webpack/lib/LoaderOptionsPlugin'
import HotModuleReplacementPlugin from 'webpack/lib/HotModuleReplacementPlugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const isProduction = 'production' === (process.env.NODE_ENV = process.argv.indexOf('-p') === -1 ? 'development' : 'production')
const styles = 'css?sourceMap!postcss!sass?sourceMap'

export default () => ({
	devtool: isProduction ? 'source-map' : 'eval',
	entry: {
		index: isProduction
			? './index'
			: ['react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', './index']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	plugins: [new LoaderOptionsPlugin({options: {context: __dirname, postcss: [autoprefixer]}})].concat(isProduction
		? [new ExtractTextPlugin('[name].css'), new HtmlWebpackPlugin({title: 'Fedor'})]
		: [new HotModuleReplacementPlugin()]
	),
	module: {
		loaders: [
			{test: /\.js$/, loaders: ['babel']},
			{
				test: /\.s?css$/,
				loader: isProduction
					? ExtractTextPlugin.extract({fallbackLoader: 'style', loader: styles})
					: `style!${styles}`
			}
		]
	},
	devServer: {
		hot: true,
		host: '0.0.0.0'
	}
})
