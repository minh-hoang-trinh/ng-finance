module.exports = {
  name: 'performance',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/performance',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
