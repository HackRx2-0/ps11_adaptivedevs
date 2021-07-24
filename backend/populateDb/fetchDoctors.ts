import fs, { writeFile } from 'fs';
import fetch from 'node-fetch';

fetch(
  `https://bfhlprodapigw.healthrx.co.in/search-wrapper-prod/search?page=1&size=10000&top_doctors=true&index_type=DoctorSupplier&source=All_Doctors&env=prod`
).then(async (res) => {
  res.text().then((text) => {
    writeFile('./doctors.json', text, (err) => {
      if (err) {
        console.log("couldn't write to file");
        console.error(err);
        return;
      }
      console.log('written to file doctors.json');
    });
  });
});

console.time('timeTaken');
fs.readFile(
  './doctors.json',
  {
    encoding: 'utf-8',
  },
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const parsed: DocotorResults = JSON.parse(data);
    console.log(parsed.data.results.results.length);
    console.timeEnd('timeTaken');
  }
);
