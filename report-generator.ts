import * as path from 'path';

// tslint:disable:no-var-requires
// tslint:disable-next-line:no-implicit-dependencies
const report = require('multiple-cucumber-html-reporter');

const projectName = path.basename(__dirname);
const projectVersion = process.env.npm_package_version;
const reportGenerationTime = new Date().toISOString();
report.generate({
  customData: {
    data: [
      { label: 'Project', value: `${projectName}` },
      { label: 'Release', value: `${projectVersion}` },
      { label: 'Report Generation Time', value: `${reportGenerationTime}` },
    ],
    title: 'Run info',
  },
  disableLog: true,
  displayDuration: true,
  durationInMS: true,
  jsonDir: 'reports',
  openReportInBrowser: true,
  reportName: 'TestCafe Report',
  reportPath: 'reports',
});
