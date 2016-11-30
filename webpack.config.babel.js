import path from 'path'
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import LoaderOptionsPlugin from 'webpack/lib/LoaderOptionsPlugin'
import HotModuleReplacementPlugin from 'webpack/lib/HotModuleReplacementPlugin'
import NamedModulesPlugin from 'webpack/lib/NamedModulesPlugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const isProduction = 'production' === (process.env.NODE_ENV = process.argv.indexOf('-p') === -1 ? 'development' : 'production')
const styles = 'css-loader?sourceMap!postcss-loader!sass-loader?sourceMap'

export default () => ({
	devtool: isProduction ? 'source-map' : 'eval',
	entry: {
		index: isProduction
			? './index'
			: ['react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', './index'],
		temp: './temp.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	plugins: [
		new LoaderOptionsPlugin({options: {context: __dirname, postcss: [autoprefixer]}}),
		new HtmlWebpackPlugin({title: 'Fedor', template: './index.html'})
	].concat(isProduction
		? [new ExtractTextPlugin('[name].css')]
		: [new NamedModulesPlugin(), new HotModuleReplacementPlugin()]
	),
	module: {
		loaders: [
			{test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/},
			{
				test: /\.s?css$/,
				loader: isProduction
					? ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: styles})
					: `style-loader!${styles}`
			}
		]
	},
	resolve: {
		alias: {
			Components: path.join(__dirname, 'Components'),
			Pages: path.join(__dirname, 'Pages'),
			Atoms: path.join(__dirname, 'Components/Atoms'),
			Organisms: path.join(__dirname, 'Components/Organisms'),
			Molecules: path.join(__dirname, 'Components/Molecules'),
			Utils: path.join(__dirname, 'Components/Utils')
		}
	},
	devServer: {
		hot: true,
		host: '0.0.0.0',
		historyApiFallback: true
	}
})
