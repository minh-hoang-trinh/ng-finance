module.exports = {
  name: 'gluon',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/gluon',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
