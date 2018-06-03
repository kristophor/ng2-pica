export default {
  entry: 'dist/ng6-pica.js',
  dest: 'dist/bundles/ng6-pica.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng6-pica',
  globals: {
    '@angular/core': 'ng.core',
    'rxjs': 'Rx'
  }
}
