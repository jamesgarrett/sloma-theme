module.exports = (app, config, partials) => {
	require('./home')(app, config, partials)
	require('./blog')(app, config, partials)
	require('./post')(app, config, partials)
	require('./about')(app, config, partials)
	require('./videos')(app, config, partials)
	require('./contact')(app, config, partials)
	require('./search')(app, config, partials)
	require('./explore')(app, config, partials)
	require('./testimonials')(app, config, partials)
	require('./openhouses')(app, config, partials)
	require('./openhouse')(app, config, partials)
	require('./listings')(app, config, partials)
	require('./listing')(app, config, partials)
	require('./page')(app, config, partials)
}