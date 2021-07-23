import { Redis as RedisModules } from 'redis-modules-sdk';
import { RedisOptions, Redis as IoRedis } from 'ioredis';

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

redisModules.rejson_module_set(
  'symptoms',
  '.',
  `{
    "Fungal infection": [
      "itching",
      "skin rash",
      "nodal skin eruptions",
      "dischromic patches"
    ],
    "Allergy": [
      "continuous sneezing",
      "shivering",
      "chills",
      "watering from eyes"
    ],
    "GERD": [
      "stomach pain",
      "acidity",
      "ulcers on tongue",
      "vomiting",
      "cough",
      "chest pain"
    ],
    "Chronic cholestasis": [
      "itching",
      "vomiting",
      "yellowish skin",
      "nausea",
      "loss of appetite",
      "abdominal pain",
      "yellowing of eyes"
    ],
    "Drug Reaction": [
      "itching",
      "skin rash",
      "stomach pain",
      "burning micturition",
      "spotting urination"
    ],
    "Peptic ulcer diseae": [
      "vomiting",
      "indigestion",
      "loss of appetite",
      "abdominal pain",
      "passage of gases",
      "internal itching"
    ],
    "AIDS": [
      "muscle wasting",
      "patches in throat",
      "high fever",
      "extra marital contacts"
    ],
    "Diabetes ": [
      "fatigue",
      "weight loss",
      "restlessness",
      "lethargy",
      "irregular sugar level",
      "blurred and distorted vision",
      "obesity",
      "excessive hunger",
      "increased appetite",
      "polyuria"
    ],
    "Gastroenteritis": ["vomiting", "sunken eyes", "dehydration", "diarrhoea"],
    "Bronchial Asthma": [
      "fatigue",
      "cough",
      "high fever",
      "breathlessness",
      "family history",
      "mucoid sputum"
    ],
    "Hypertension ": [
      "headache",
      "chest pain",
      "dizziness",
      "loss of balance",
      "lack of concentration"
    ],
    "Migraine": [
      "acidity",
      "indigestion",
      "headache",
      "blurred and distorted vision",
      "excessive hunger",
      "stiff neck",
      "depression",
      "irritability",
      "visual disturbances"
    ],
    "Cervical spondylosis": [
      "back pain",
      "weakness in limbs",
      "neck pain",
      "dizziness",
      "loss of balance"
    ],
    "Paralysis (brain hemorrhage)": [
      "vomiting",
      "headache",
      "weakness of one body side",
      "altered sensorium"
    ],
    "Jaundice": [
      "itching",
      "vomiting",
      "fatigue",
      "weight loss",
      "high fever",
      "yellowish skin",
      "dark urine",
      "abdominal pain"
    ],
    "Malaria": [
      "chills",
      "vomiting",
      "high fever",
      "sweating",
      "headache",
      "nausea",
      "diarrhoea",
      "muscle pain"
    ],
    "Chicken pox": [
      "itching",
      "skin rash",
      "fatigue",
      "lethargy",
      "high fever",
      "headache",
      "loss of appetite",
      "mild fever",
      "swelled lymph nodes",
      "malaise",
      "red spots over body"
    ],
    "Dengue": [
      "skin rash",
      "chills",
      "joint pain",
      "vomiting",
      "fatigue",
      "high fever",
      "headache",
      "nausea",
      "loss of appetite",
      "pain behind the eyes",
      "back pain",
      "malaise",
      "muscle pain",
      "red spots over body"
    ],
    "Typhoid": [
      "chills",
      "vomiting",
      "fatigue",
      "high fever",
      "headache",
      "nausea",
      "constipation",
      "abdominal pain",
      "diarrhoea",
      "toxic look (typhos)",
      "belly pain"
    ],
    "hepatitis A": [
      "joint pain",
      "vomiting",
      "yellowish skin",
      "dark urine",
      "nausea",
      "loss of appetite",
      "abdominal pain",
      "diarrhoea",
      "mild fever",
      "yellowing of eyes",
      "muscle pain"
    ],
    "Hepatitis B": [
      "itching",
      "fatigue",
      "lethargy",
      "yellowish skin",
      "dark urine",
      "loss of appetite",
      "abdominal pain",
      "yellow urine",
      "yellowing of eyes",
      "malaise",
      "receiving blood transfusion",
      "receiving unsterile injections"
    ],
    "Hepatitis C": [
      "fatigue",
      "yellowish skin",
      "nausea",
      "loss of appetite",
      "yellowing of eyes",
      "family history"
    ],
    "Hepatitis D": [
      "joint pain",
      "vomiting",
      "fatigue",
      "yellowish skin",
      "dark urine",
      "nausea",
      "loss of appetite",
      "abdominal pain",
      "yellowing of eyes"
    ],
    "Hepatitis E": [
      "joint pain",
      "vomiting",
      "fatigue",
      "high fever",
      "yellowish skin",
      "dark urine",
      "nausea",
      "loss of appetite",
      "abdominal pain",
      "yellowing of eyes",
      "acute liver failure",
      "coma",
      "stomach bleeding"
    ],
    "Alcoholic hepatitis": [
      "vomiting",
      "yellowish skin",
      "abdominal pain",
      "swelling of stomach",
      "distention of abdomen",
      "history of alcohol consumption",
      "fluid overload"
    ],
    "Tuberculosis": [
      "chills",
      "vomiting",
      "fatigue",
      "weight loss",
      "cough",
      "high fever",
      "breathlessness",
      "sweating",
      "loss of appetite",
      "mild fever",
      "yellowing of eyes",
      "swelled lymph nodes",
      "malaise",
      "phlegm",
      "chest pain",
      "blood in sputum"
    ],
    "Common Cold": [
      "continuous sneezing",
      "chills",
      "fatigue",
      "cough",
      "high fever",
      "headache",
      "swelled lymph nodes",
      "malaise",
      "phlegm",
      "throat irritation",
      "redness of eyes",
      "sinus pressure",
      "runny nose",
      "congestion",
      "chest pain",
      "loss of smell",
      "muscle pain"
    ],
    "Pneumonia": [
      "chills",
      "fatigue",
      "cough",
      "high fever",
      "breathlessness",
      "sweating",
      "malaise",
      "phlegm",
      "chest pain",
      "fast heart rate",
      "rusty sputum"
    ],
    "Dimorphic hemmorhoids(piles)": [
      "constipation",
      "pain during bowel movements",
      "pain in anal region",
      "bloody stool",
      "irritation in anus"
    ],
    "Heart attack": ["vomiting", "breathlessness", "sweating", "chest pain"],
    "Varicose veins": [
      "fatigue",
      "cramps",
      "bruising",
      "obesity",
      "swollen legs",
      "swollen blood vessels",
      "prominent veins on calf"
    ],
    "Hypothyroidism": [
      "fatigue",
      "weight gain",
      "cold hands and feets",
      "mood swings",
      "lethargy",
      "dizziness",
      "puffy face and eyes",
      "enlarged thyroid",
      "brittle nails",
      "swollen extremeties",
      "depression",
      "irritability",
      "abnormal menstruation"
    ],
    "Hyperthyroidism": [
      "fatigue",
      "mood swings",
      "weight loss",
      "restlessness",
      "sweating",
      "diarrhoea",
      "fast heart rate",
      "excessive hunger",
      "muscle weakness",
      "irritability",
      "abnormal menstruation"
    ],
    "Hypoglycemia": [
      "vomiting",
      "fatigue",
      "anxiety",
      "sweating",
      "headache",
      "nausea",
      "blurred and distorted vision",
      "excessive hunger",
      "drying and tingling lips",
      "slurred speech",
      "irritability",
      "palpitations"
    ],
    "Osteoarthristis": [
      "joint pain",
      "neck pain",
      "knee pain",
      "hip joint pain",
      "swelling joints",
      "painful walking"
    ],
    "Arthritis": [
      "muscle weakness",
      "stiff neck",
      "swelling joints",
      "movement stiffness",
      "painful walking"
    ],
    "(vertigo) Paroymsal Positional Vertigo": [
      "vomiting",
      "headache",
      "nausea",
      "spinning movements",
      "loss of balance",
      "unsteadiness"
    ],
    "Acne": ["skin rash", "pus filled pimples", "blackheads", "scurring"],
    "Urinary tract infection": [
      "burning micturition",
      "bladder discomfort",
      "foul smell of urine",
      "continuous feel of urine"
    ],
    "Psoriasis": [
      "skin rash",
      "joint pain",
      "skin peeling",
      "silver like dusting",
      "small dents in nails",
      "inflammatory nails"
    ],
    "Impetigo": [
      "skin rash",
      "high fever",
      "blister",
      "red sore around nose",
      "yellow crust ooze"
    ]
  }
`
);

// redisModules.search_module_create('symtomsindex', 'JSON', [
//   {
//     phonetic: 'dm:en',
//     name: 'symptoms',
//     type: 'TEXT',
//     seperator: ',',
//   },
// ]);
