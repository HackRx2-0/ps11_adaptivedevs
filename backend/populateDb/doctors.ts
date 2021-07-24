import {} from 'faker';
import prismaClient from './prismaClient';
import { DocotorResults } from './doctorResults';
import fs from 'fs';
import faker from 'faker';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const doctorTypes = [
  'allergist',
  'antihistamine',
  'Cardiologist',
  'Dentist',
  'Dermatologist',
  'endocrinologist',
  'ENT specialist',
  'gastroenterology ',
  'General Physician',
  'Gynaecologist',
  'Hepatologist',
  'hepatology',
  'HIV specialist ',
  'infectionspecialist',
  'neurologist',
  'Ophthalmologist',
  'Orthopaedic',
  'Paediatrician',
  'Physiotherapist',
  'primary care doctor',
  'proctologist',
  'Psychiatrist',
  'Pulmonologist',
  'Rheumatologists',
  'Sexologist',
  'Urologist',
  'vascular surgeon',
];
fs.readFile('./doctors.json', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const parsed: DocotorResults = JSON.parse(data);

  parsed.data.results.results.forEach(async (result) => {
    const name = `Dr. ${faker.name.lastName()} ${faker.name.firstName()}`;
    await prismaClient.user
      .create({
        data: {
          password: 'password',
          phone_number: Math.floor(Math.random() * 10000000000).toString(),
          name,
          role: 'doctor',
          doctor_details: {
            create: {
              display_name: name,
              ready_to_accept_patients: Math.random() < 0.6,
              doctor_introduction: faker.lorem.paragraph(),
              is_online: Math.random() < 0.6,
              qualifications: {
                create: [
                  {
                    degree: result.qualifications[0]?.degree || 'Degree',
                  },
                ],
              },
              languages_spoken: {
                create: [
                  {
                    language: result.languages[0] || 'English',
                  },
                ],
              },
              specialities: {
                create: [
                  {
                    name:
                      doctorTypes[getRandomInt(0, doctorTypes.length - 1)] ||
                      'General Physcian',
                  },
                ],
              },
            },
          },
        },
      })
      .then((res) => {
        if (res) {
          console.log('success');
        }
      });
  });
  // prismaClient.user.create({

  // })
});
// prismaClient.user.createMany({
// skipDuplicates: true,
// dataL
// })
// export const populateDoctors = () => {
//   // prisma.
// };
