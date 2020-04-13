module.exports = {
	"transpileDependencies": [
		"vuetify"
	],
	"css": {
		"loaderOptions": {
		  "sass": {}
		}
	},
	devServer: {
		host: 'localhost',
		watchOptions: {
            poll: true
        }
	}
	
}