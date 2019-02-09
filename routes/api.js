// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is a sample API route. */
router.get('/test', (req,res) => {
	res.json({
	confirmation : 'Confirmed',
	data : 'This is a Test End Point'	
	})
})

module.exports = router
