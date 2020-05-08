module.exports = {
  name: 'data-provider',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/data-provider',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
