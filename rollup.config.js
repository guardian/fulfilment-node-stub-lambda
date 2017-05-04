import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

//This configures rollup, which turns 
// src/index.js + all of your dependencies 
//into dist/index.js

export default {
	entry: 'src/index.js',
	plugins: [
		babel(),
		nodeResolve({
			jsnext: true
		}),
		commonjs()
	],
	format: 'cjs',
	dest: 'dist/index.js',
	external: ['aws-sdk']
};
