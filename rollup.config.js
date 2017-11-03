import buble from 'rollup-plugin-buble';

export default {
	input: 'src/esm/index.js',
	name: 'phoneFns',
	external: ['callingCodes'],
	output: {
		format: 'umd',
		file: 'phone-fns.js'
	},
	plugins: [
		buble({
			exclude: ['callingCodes.js']
		})
	]
};
