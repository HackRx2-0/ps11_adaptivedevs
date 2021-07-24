import { Redis as RedisModules } from 'redis-modules-sdk';
import IORedis, { RedisOptions, Redis as IoRedis } from 'ioredis';
import _ from 'lodash';
const ENVIRONMENT = process.env.ENVIRONMENT || 'local';

export const redisOptions: RedisOptions = {
  host: ENVIRONMENT == 'production' ? 'redis' : '127.0.0.1',
  port: process.env?.REDIS_PORT ? parseFloat(process.env.REDIS_PORT) : 6379,
  enableReadyCheck: true,
  enableOfflineQueue: true,
  password: process.env.REDIS_PASS || 'password2',
  retryStrategy(times) {
    if (times >= 100) {
      return;
    }
    return 5 * 1000;
  },
};
export const redisModules = new RedisModules(redisOptions);
redisModules.connect();
export const redis: IoRedis = redisModules.redis;

redis.on('connect', () => console.log('Redis connection made'));
redis.on('ready', () => console.log('Redis is ready'));
redis.on('error', () => console.log('Error in Redis connection'));
redis.on('close', () => console.log('Redis connection closed'));
redis.on('reconnecting', () => console.log('Reconnecting to Redis'));
redis.on('end', () => console.log('Redis connection ended'));

const data: {
  [key: string]: {
    disease: string;
    symptoms: string[];
    typeof_doctors: string[];
  };
} = {
  'Fungal infection': {
    disease: 'Fungal infection',
    symptoms: [
      'itching',
      'skin rash',
      'nodal skin eruptions',
      'dischromic patches',
    ],
    typeof_doctors: ['Dermatologist', 'infectionspecialist'],
  },
  Allergy: {
    disease: 'Allergy',
    symptoms: [
      'continuous sneezing',
      'shivering',
      'chills',
      'watering from eyes',
    ],
    typeof_doctors: ['Dermatologist', 'allergist'],
  },
  GERD: {
    disease: 'GERD',
    symptoms: [
      'stomach pain',
      'acidity',
      'ulcers on tongue',
      'vomiting',
      'cough',
      'chest pain',
    ],
    typeof_doctors: ['gastroenterology'],
  },
  'Chronic cholestasis': {
    disease: 'Chronic cholestasis',
    symptoms: [
      'itching',
      'vomiting',
      'yellowish skin',
      'nausea',
      'loss of appetite',
      'abdominal pain',
      'yellowing of eyes',
    ],
    typeof_doctors: ['gastroenterology', 'hepatology'],
  },
  'Drug Reaction': {
    disease: 'Drug Reaction',
    symptoms: [
      'itching',
      'skin rash',
      'stomach pain',
      'burning micturition',
      'spotting urination',
    ],
    typeof_doctors: ['antihistamine', 'allergist'],
  },
  'Peptic ulcer diseae': {
    disease: 'Peptic ulcer diseae',
    symptoms: [
      'vomiting',
      'indigestion',
      'loss of appetite',
      'abdominal pain',
      'passage of gases',
      'internal itching',
    ],
    typeof_doctors: ['gastroenterology'],
  },
  AIDS: {
    disease: 'AIDS',
    symptoms: [
      'muscle wasting',
      'patches in throat',
      'high fever',
      'extra marital contacts',
    ],
    typeof_doctors: ['HIV specialist'],
  },
  'Bronchial Asthma': {
    disease: 'Bronchial Asthma',
    symptoms: [
      'fatigue',
      'cough',
      'high fever',
      'breathlessness',
      'family history',
      'mucoid sputum',
    ],
    typeof_doctors: ['Pulmonologist', 'allergist'],
  },
  Migraine: {
    disease: 'Migraine',
    symptoms: [
      'acidity',
      'indigestion',
      'headache',
      'blurred and distorted vision',
      'excessive hunger',
      'stiff neck',
      'depression',
      'irritability',
      'visual disturbances',
    ],
    typeof_doctors: ['neurologist'],
  },
  'Cervical spondylosis': {
    disease: 'Cervical spondylosis',
    symptoms: [
      'back pain',
      'weakness in limbs',
      'neck pain',
      'dizziness',
      'loss of balance',
    ],
    typeof_doctors: ['Orthopaedic', 'neurologist'],
  },
  'Paralysis (brain hemorrhage)': {
    disease: 'Paralysis (brain hemorrhage)',
    symptoms: [
      'vomiting',
      'headache',
      'weakness of one body side',
      'altered sensorium',
    ],
    typeof_doctors: ['neurologist'],
  },
  Jaundice: {
    disease: 'Jaundice',
    symptoms: [
      'itching',
      'vomiting',
      'fatigue',
      'weight loss',
      'high fever',
      'yellowish skin',
      'dark urine',
      'abdominal pain',
    ],
    typeof_doctors: ['General Physician'],
  },
  Malaria: {
    disease: 'Malaria',
    symptoms: [
      'chills',
      'vomiting',
      'high fever',
      'sweating',
      'headache',
      'nausea',
      'diarrhoea',
      'muscle pain',
    ],
    typeof_doctors: ['General Physician'],
  },
  'Chicken pox': {
    disease: 'Chicken pox',
    symptoms: [
      'itching',
      'skin rash',
      'fatigue',
      'lethargy',
      'high fever',
      'headache',
      'loss of appetite',
      'mild fever',
      'swelled lymph nodes',
      'malaise',
      'red spots over body',
    ],
    typeof_doctors: ['General Physician', 'infectionspecialist'],
  },
  Dengue: {
    disease: 'Dengue',
    symptoms: [
      'skin rash',
      'chills',
      'joint pain',
      'vomiting',
      'fatigue',
      'high fever',
      'headache',
      'nausea',
      'loss of appetite',
      'pain behind the eyes',
      'back pain',
      'malaise',
      'muscle pain',
      'red spots over body',
    ],
    typeof_doctors: ['infectionspecialist', 'General Physician'],
  },
  Typhoid: {
    disease: 'Typhoid',
    symptoms: [
      'chills',
      'vomiting',
      'fatigue',
      'high fever',
      'headache',
      'nausea',
      'constipation',
      'abdominal pain',
      'diarrhoea',
      'toxic look (typhos)',
      'belly pain',
    ],
    typeof_doctors: ['General Physician', 'gastroenterology'],
  },
  'hepatitis A': {
    disease: 'hepatitis A',
    symptoms: [
      'joint pain',
      'vomiting',
      'yellowish skin',
      'dark urine',
      'nausea',
      'loss of appetite',
      'abdominal pain',
      'diarrhoea',
      'mild fever',
      'yellowing of eyes',
      'muscle pain',
    ],
    typeof_doctors: ['hepatology', 'gastroenterology'],
  },
  'Hepatitis B': {
    disease: 'Hepatitis B',
    symptoms: [
      'itching',
      'fatigue',
      'lethargy',
      'yellowish skin',
      'dark urine',
      'loss of appetite',
      'abdominal pain',
      'yellow urine',
      'yellowing of eyes',
      'malaise',
      'receiving blood transfusion',
      'receiving unsterile injections',
    ],
    typeof_doctors: ['Hepatologist', 'gastroenterology'],
  },
  'Hepatitis C': {
    disease: 'Hepatitis C',
    symptoms: [
      'fatigue',
      'yellowish skin',
      'nausea',
      'loss of appetite',
      'yellowing of eyes',
      'family history',
    ],
    typeof_doctors: ['hepatology', 'gastroenterology'],
  },
  'Hepatitis D': {
    disease: 'Hepatitis D',
    symptoms: [
      'joint pain',
      'vomiting',
      'fatigue',
      'yellowish skin',
      'dark urine',
      'nausea',
      'loss of appetite',
      'abdominal pain',
      'yellowing of eyes',
    ],
    typeof_doctors: ['hepatology', 'gastroenterology'],
  },
  'Hepatitis E': {
    disease: 'Hepatitis E',
    symptoms: [
      'joint pain',
      'vomiting',
      'fatigue',
      'high fever',
      'yellowish skin',
      'dark urine',
      'nausea',
      'loss of appetite',
      'abdominal pain',
      'yellowing of eyes',
      'acute liver failure',
      'coma',
      'stomach bleeding',
    ],
    typeof_doctors: ['hepatology', 'gastroenterology'],
  },
  'Alcoholic hepatitis': {
    disease: 'Alcoholic hepatitis',
    symptoms: [
      'vomiting',
      'yellowish skin',
      'abdominal pain',
      'swelling of stomach',
      'distention of abdomen',
      'history of alcohol consumption',
      'fluid overload',
    ],
    typeof_doctors: ['General Physician'],
  },
  Tuberculosis: {
    disease: 'Tuberculosis',
    symptoms: [
      'chills',
      'vomiting',
      'fatigue',
      'weight loss',
      'cough',
      'high fever',
      'breathlessness',
      'sweating',
      'loss of appetite',
      'mild fever',
      'yellowing of eyes',
      'swelled lymph nodes',
      'malaise',
      'phlegm',
      'chest pain',
      'blood in sputum',
    ],
    typeof_doctors: ['General Physician', 'Pulmonologist'],
  },
  'Common Cold': {
    disease: 'Common Cold',
    symptoms: [
      'continuous sneezing',
      'chills',
      'fatigue',
      'cough',
      'high fever',
      'headache',
      'swelled lymph nodes',
      'malaise',
      'phlegm',
      'throat irritation',
      'redness of eyes',
      'sinus pressure',
      'runny nose',
      'congestion',
      'chest pain',
      'loss of smell',
      'muscle pain',
    ],
    typeof_doctors: ['General Physician'],
  },
  Pneumonia: {
    disease: 'Pneumonia',
    symptoms: [
      'chills',
      'fatigue',
      'cough',
      'high fever',
      'breathlessness',
      'sweating',
      'malaise',
      'phlegm',
      'chest pain',
      'fast heart rate',
      'rusty sputum',
    ],
    typeof_doctors: ['General Physician', 'Pulmonologist'],
  },
  'Dimorphic hemmorhoids(piles)': {
    disease: 'Dimorphic hemmorhoids(piles)',
    symptoms: [
      'constipation',
      'pain during bowel movements',
      'pain in anal region',
      'bloody stool',
      'irritation in anus',
    ],
    typeof_doctors: ['gastroenterology'],
  },
  'Heart attack': {
    disease: 'Heart attack',
    symptoms: ['vomiting', 'breathlessness', 'sweating', 'chest pain'],
    typeof_doctors: ['Cardiologist'],
  },
  'Varicose veins': {
    disease: 'Varicose veins',
    symptoms: [
      'fatigue',
      'cramps',
      'bruising',
      'obesity',
      'swollen legs',
      'swollen blood vessels',
      'prominent veins on calf',
    ],
    typeof_doctors: ['vascular surgeon'],
  },
  Hypothyroidism: {
    disease: 'Hypothyroidism',
    symptoms: [
      'fatigue',
      'weight gain',
      'cold hands and feets',
      'mood swings',
      'lethargy',
      'dizziness',
      'puffy face and eyes',
      'enlarged thyroid',
      'brittle nails',
      'swollen extremeties',
      'depression',
      'irritability',
      'abnormal menstruation',
    ],
    typeof_doctors: ['endocrinologist'],
  },
  Hyperthyroidism: {
    disease: 'Hyperthyroidism',
    symptoms: [
      'fatigue',
      'mood swings',
      'weight loss',
      'restlessness',
      'sweating',
      'diarrhoea',
      'fast heart rate',
      'excessive hunger',
      'muscle weakness',
      'irritability',
      'abnormal menstruation',
    ],
    typeof_doctors: ['endocrinologist'],
  },
  Hypoglycemia: {
    disease: 'Hypoglycemia',
    symptoms: [
      'vomiting',
      'fatigue',
      'anxiety',
      'sweating',
      'headache',
      'nausea',
      'blurred and distorted vision',
      'excessive hunger',
      'drying and tingling lips',
      'slurred speech',
      'irritability',
      'palpitations',
    ],
    typeof_doctors: ['endocrinologist'],
  },
  Osteoarthristis: {
    disease: 'Osteoarthristis',
    symptoms: [
      'joint pain',
      'neck pain',
      'knee pain',
      'hip joint pain',
      'swelling joints',
      'painful walking',
    ],
    typeof_doctors: ['Rheumatologists'],
  },
  Arthritis: {
    disease: 'Arthritis',
    symptoms: [
      'muscle weakness',
      'stiff neck',
      'swelling joints',
      'movement stiffness',
      'painful walking',
    ],
    typeof_doctors: ['Rheumatologists'],
  },
  '(vertigo) Paroymsal Positional Vertigo': {
    disease: '(vertigo) Paroymsal Positional Vertigo',
    symptoms: [
      'vomiting',
      'headache',
      'nausea',
      'spinning movements',
      'loss of balance',
      'unsteadiness',
    ],
    typeof_doctors: ['ENT specialist', 'neurologist'],
  },
  Acne: {
    disease: 'Acne',
    symptoms: ['skin rash', 'pus filled pimples', 'blackheads', 'scurring'],
    typeof_doctors: ['Dermatologist'],
  },
  'Urinary tract infection': {
    disease: 'Urinary tract infection',
    symptoms: [
      'burning micturition',
      'bladder discomfort',
      'foul smell of urine',
      'continuous feel of urine',
    ],
    typeof_doctors: ['Urologist', 'General Physician'],
  },
  Psoriasis: {
    disease: 'Psoriasis',
    symptoms: [
      'skin rash',
      'joint pain',
      'skin peeling',
      'silver like dusting',
      'small dents in nails',
      'inflammatory nails',
    ],
    typeof_doctors: ['Dermatologist'],
  },
  Impetigo: {
    disease: 'Impetigo',
    symptoms: [
      'skin rash',
      'high fever',
      'blister',
      'red sore around nose',
      'yellow crust ooze',
    ],
    typeof_doctors: ['Paediatrician', 'General Physician'],
  },
};

const insertJSON = async () => {
  for (const key in data) {
    const symptoms = data[key].symptoms;
    for (const [index, symptom] of symptoms.entries()) {
      await redis.hset(`disease-symptom:${key}:${index + 1}`, [
        `symptom`,
        `${symptom}`,
      ]);
      symptom.split(' ').forEach((word) => {
        redisModules.search_module_sugadd('auto-suggest', word, word.length);
      });
    }
    // for (const [index, doctorType] of data[key].typeof_doctors.entries()) {
    //   await redis.hset(`disease-doctor:${key}`, [
    //     `${key}:${index + 1}`,
    //     `${doctorType}`,
    //   ]);
    // }
  }
};
insertJSON();

// redisModules.search_module_create('disease_index', 'HASH', [
//   {
//     name: 'disease-symptom:',

//     type: 'TEXT',
//     phonetic: 'dm:en',
//   },
// ]);

// FT.CREATE myIdx ON HASH PREFIX 1 doc: SCHEMA title TEXT WEIGHT 5.0 body TEXT url TEXT
// FT.CREATE myIdx ON HASH PREFIX 1 disease-symptom: SCHEMA symptom TEXT SORTABLE PHONETIC dm:en

// redis.sendCommand(new IORedis.Command(`FT.CREATE`, ['disease-index', 'ON', 'HASH', 'PREFIX', '1', 'disease-symptom:', 'SCHEMA', ''], {
//   replyEncoding: 'utf-8',
// }, (err) => {}))

redis.send_command(
  'FT.CREATE',
  'myIdx',
  'ON',
  'HASH',
  'PREFIX',
  '1',
  'disease-symptom:',
  'SCHEMA',
  'symptom',
  'TEXT',
  'PHONETIC',
  'dm:en'
);
