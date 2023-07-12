import typescript from '@rollup/plugin-typescript'
import sourceMaps from 'rollup-plugin-sourcemaps'
// import tsConfig from './tsconfig.json'
// import tsConfigPaths from 'rollup-plugin-tsconfig-paths'

export default [
	{
		input: 'src/index.ts',
		output: [
			{
        file: 'build/index.cjs',
				format: 'cjs',
				sourcemap: true
			}
		],
    plugins: [
			// tsConfigPaths(),
      typescript(),
      sourceMaps()
    ]
	}
];