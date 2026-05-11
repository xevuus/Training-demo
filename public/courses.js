// STR Course Predictor Data
// All elevation profiles are simplified point arrays [distance_meters, elevation_meters]
// Time factors: multiplier applied to flat VDOT prediction (1.0 = same as flat road)

const STR_COURSES = {
  xc: [
    {
      id: 'mcalpine',
      name: 'McAlpine Creek Park',
      location: 'Charlotte, NC',
      type: 'xc',
      surface: 'Crushed limestone / pea gravel',
      distances: [5000, 8000],
      difficulty: 2,
      description: 'Legendary flat and fast course. One steep 150m hill at ~2200m, steep descent on backside. Home of Foot Locker South Regional. Course record territory when conditions are right.',
      notable: 'Foot Locker South Regional, NC State Championships',
      timeFactor: { 5000: 1.04, 8000: 1.05 },
      // elevation profile: [distance_m, elevation_m] — relative to start
      profile: [
        [0,0],[200,0],[500,1],[800,1],[1000,0],[1200,-1],[1500,-1],[1800,0],
        [2000,0],[2200,0],[2350,8],[2500,12],[2600,8],[2700,0],[2900,-2],
        [3000,-1],[3200,0],[3500,0],[3800,1],[4000,0],[4200,0],[4500,-1],[4800,0],[5000,0]
      ],
      courseRecords: { mens5k: '13:52', womens5k: '15:48' }
    },
    {
      id: 'wakemed',
      name: 'WakeMed Soccer Park',
      location: 'Cary, NC',
      type: 'xc',
      surface: 'Grass / dirt',
      distances: [5000, 6000, 8000],
      difficulty: 3,
      description: 'World-class course hosting NXR Southeast, ACC Championships, and Great American XC Festival. Starts downhill, flat middle section, then a punishing series of steep rolling hills at the 2-mile mark.',
      notable: 'NXR Southeast, ACC XC Championships, Great American XC Festival',
      timeFactor: { 5000: 1.06, 6000: 1.07, 8000: 1.07 },
      profile: [
        [0,0],[200,-2],[400,-4],[550,-6],[700,-6],[900,-5],[1050,-5],
        [1200,-4],[1300,-3],[1450,-3],[1600,-2],[1800,0],[2000,2],[2100,4],
        [2200,6],[2350,4],[2500,2],[2700,0],[2900,-2],[3100,0],[3200,2],
        [3400,6],[3500,8],[3600,6],[3800,2],[4000,0],[4200,-1],[4400,0],
        [4600,2],[4800,1],[5000,0]
      ],
      courseRecords: { mens5k: '14:01', womens5k: '16:02' }
    },
    {
      id: 'apalachee',
      name: 'Apalachee Regional Park',
      location: 'Tallahassee, FL',
      type: 'xc',
      surface: 'Grass, dirt, pine forest trail, limerock',
      distances: [5000, 6000, 8000, 10000],
      difficulty: 2,
      description: 'Purpose-built XC facility and 2026 World Cross Country Championship venue. Multi-surface course through rolling hills, lowlands, and pine forests. Minimal elevation change but varied terrain demands attention.',
      notable: '2026 World XC Championships, NCAA South Regional',
      timeFactor: { 5000: 1.05, 6000: 1.05, 8000: 1.06, 10000: 1.06 },
      profile: [
        [0,0],[300,1],[600,2],[800,3],[1000,2],[1200,1],[1400,0],[1600,-1],
        [1800,-2],[2000,-1],[2200,0],[2400,1],[2600,2],[2800,3],[3000,2],
        [3200,1],[3400,0],[3600,-1],[3800,0],[4000,1],[4200,2],[4400,1],
        [4600,0],[4800,0],[5000,0]
      ],
      courseRecords: { mens5k: '13:58', womens5k: '15:55' }
    },
    {
      id: 'vancortlandt',
      name: 'Van Cortlandt Park',
      location: 'The Bronx, NY',
      type: 'xc',
      surface: 'Cinder / dirt / grass',
      distances: [5000, 8000],
      difficulty: 5,
      description: 'The most storied XC course in the United States. Notorious Cemetery Hill destroys legs. The first 500m funnels runners into a narrow path causing dangerous congestion. Back hills loop is relentless. Respect the history — times here mean more.',
      notable: 'NCAA Championships, World XC Championships, Manhattan Invitational',
      timeFactor: { 5000: 1.10, 8000: 1.12 },
      profile: [
        [0,0],[200,0],[400,-1],[500,-2],[700,0],[900,2],[1100,8],[1300,16],
        [1500,18],[1600,14],[1800,10],[2000,6],[2200,4],[2400,2],[2600,0],
        [2800,-2],[3000,0],[3200,4],[3400,10],[3600,16],[3700,18],[3800,14],
        [4000,8],[4200,4],[4400,2],[4600,0],[4800,-1],[5000,0]
      ],
      courseRecords: { mens5k: '13:32', womens5k: '15:22' }
    },
    {
      id: 'laverngibson',
      name: 'LaVern Gibson Championship Course',
      location: 'Terre Haute, IN',
      type: 'xc',
      surface: 'Grass / designed XC trail',
      distances: [5000, 8000, 10000],
      difficulty: 3,
      description: '"Cross Country Town USA." Purpose-built course that has hosted NCAA Division I Championships 12 times. Rolling terrain designed to challenge without being punishing. Spectator-friendly layout.',
      notable: 'NCAA D1 Championships (12x), Big Ten Championships',
      timeFactor: { 5000: 1.06, 8000: 1.07, 10000: 1.07 },
      profile: [
        [0,0],[300,2],[600,4],[900,6],[1100,4],[1300,2],[1500,0],[1700,-2],
        [1900,0],[2100,3],[2300,6],[2500,8],[2700,6],[2900,3],[3100,0],
        [3300,-2],[3500,0],[3700,3],[3900,5],[4100,4],[4300,2],[4500,0],
        [4700,-1],[4900,0],[5000,0]
      ],
      courseRecords: { mens8k: '22:58', womens6k: '19:04' }
    },
    {
      id: 'holmdel',
      name: 'Holmdel Park',
      location: 'Holmdel, NJ',
      type: 'xc',
      surface: 'Grass / dirt',
      distances: [5000],
      difficulty: 5,
      description: 'The most feared high school XC course in the Northeast. Unrelenting hills from start to finish. The infamous "Bowl" and "Dead Man\'s Hill" have broken countless PRs. NJ State Meet venue for decades.',
      notable: 'NJ State Championships, Shore Coaches Invitational',
      timeFactor: { 5000: 1.12 },
      profile: [
        [0,0],[200,3],[400,8],[600,14],[800,18],[1000,14],[1200,8],[1400,4],
        [1600,0],[1800,-4],[2000,-6],[2100,-4],[2200,0],[2400,6],[2600,12],
        [2800,18],[2900,20],[3000,16],[3200,10],[3400,6],[3600,2],[3800,0],
        [4000,4],[4200,10],[4400,14],[4600,10],[4800,4],[5000,0]
      ],
      courseRecords: { mens5k: '14:28', womens5k: '16:45' }
    },
    {
      id: 'mtsac',
      name: 'Mt. SAC Cross Country Course',
      location: 'Walnut, CA',
      type: 'xc',
      surface: 'Grass / dirt',
      distances: [5000, 8000],
      difficulty: 4,
      description: 'One of the most iconic courses in California, home to the legendary Mt. SAC Invitational. Rolling hills throughout with a punishing final climb. Fast conditions when dry.',
      notable: 'Mt. SAC Invitational, CA State Championships',
      timeFactor: { 5000: 1.08, 8000: 1.09 },
      profile: [
        [0,0],[300,4],[600,8],[800,6],[1000,4],[1200,2],[1400,0],[1600,4],
        [1800,8],[2000,12],[2200,10],[2400,6],[2600,2],[2800,0],[3000,4],
        [3200,8],[3400,12],[3600,10],[3800,6],[4000,4],[4200,8],[4400,14],
        [4600,10],[4800,4],[5000,0]
      ],
      courseRecords: { mens5k: '14:05', womens5k: '16:10' }
    },
    {
      id: 'balboa',
      name: 'Balboa Park',
      location: 'San Diego, CA',
      type: 'xc',
      surface: 'Grass / dirt',
      distances: [5000],
      difficulty: 3,
      description: 'Foot Locker Cross Country Championship venue. Moderately hilly course with beautiful surroundings. Known for producing fast times in ideal San Diego weather conditions.',
      notable: 'Foot Locker Cross Country Championships',
      timeFactor: { 5000: 1.06 },
      profile: [
        [0,0],[300,2],[600,5],[900,8],[1100,6],[1300,3],[1500,0],[1700,-2],
        [1900,2],[2100,5],[2300,7],[2500,5],[2700,2],[2900,0],[3100,3],
        [3300,6],[3500,8],[3700,5],[3900,2],[4100,0],[4300,2],[4500,4],
        [4700,2],[4900,1],[5000,0]
      ],
      courseRecords: { mens5k: '14:00', womens5k: '15:58' }
    },
    {
      id: 'franklinpark',
      name: 'Franklin Park',
      location: 'Boston, MA',
      type: 'xc',
      surface: 'Grass / dirt / some pavement',
      distances: [5000, 8000, 10000],
      difficulty: 4,
      description: 'Historic Boston course with technical hills and tight turns. The "Bear Cage" section is notoriously difficult. Host of multiple NCAA Championships. Cold, windy conditions common in November.',
      notable: 'NCAA Championships, New England Championships',
      timeFactor: { 5000: 1.09, 8000: 1.10, 10000: 1.10 },
      profile: [
        [0,0],[200,2],[400,5],[600,9],[800,12],[1000,9],[1200,5],[1400,2],
        [1600,0],[1800,4],[2000,8],[2200,12],[2400,14],[2600,10],[2800,6],
        [3000,2],[3200,0],[3400,3],[3600,7],[3800,10],[4000,8],[4200,4],
        [4400,2],[4600,5],[4800,8],[5000,0]
      ],
      courseRecords: { mens8k: '23:10', womens5k: '15:40' }
    },
    {
      id: 'zimmer',
      name: 'Thomas Zimmer Championship Course',
      location: 'Madison, WI',
      type: 'xc',
      surface: 'Grass / dirt',
      distances: [5000, 8000, 10000],
      difficulty: 3,
      description: 'Purpose-built course opened in 2009, host of 2018 NCAA Championships. Rolling terrain with strategic hills. Spectator-friendly with excellent sightlines across the course.',
      notable: '2018 NCAA Championships, Big Ten Championships',
      timeFactor: { 5000: 1.06, 8000: 1.07, 10000: 1.07 },
      profile: [
        [0,0],[300,3],[600,6],[900,8],[1100,5],[1300,2],[1500,0],[1700,3],
        [1900,6],[2100,8],[2300,6],[2500,3],[2700,0],[2900,4],[3100,7],
        [3300,9],[3500,6],[3700,3],[3900,0],[4100,3],[4300,6],[4500,4],
        [4700,2],[4900,1],[5000,0]
      ],
      courseRecords: { mens8k: '23:05', womens6k: '19:20' }
    },
    {
      id: 'rimrock',
      name: 'Rim Rock Farm',
      location: 'Lawrence, KS',
      type: 'xc',
      surface: 'Grass / dirt',
      distances: [5000, 8000],
      difficulty: 3,
      description: 'Beautiful natural course with scenic rolling hills. Home of the legendary Cowboy Jamboree since 1937. Technical enough to require strategy but fast enough for big PRs.',
      notable: 'Cowboy Jamboree, Big 12 Championships',
      timeFactor: { 5000: 1.06, 8000: 1.07 },
      profile: [
        [0,0],[300,3],[600,5],[900,4],[1100,2],[1300,0],[1500,3],[1700,6],
        [1900,8],[2100,6],[2300,3],[2500,0],[2700,4],[2900,7],[3100,9],
        [3300,6],[3500,3],[3700,0],[3900,3],[4100,5],[4300,3],[4500,1],
        [4700,0],[4900,0],[5000,0]
      ],
      courseRecords: { mens8k: '23:20', womens5k: '16:05' }
    }
  ],

  road: [
    {
      id: 'berlin',
      name: 'Berlin Marathon',
      location: 'Berlin, Germany',
      type: 'road',
      distance: 42195,
      difficulty: 1,
      description: 'The fastest marathon in the world. Virtually flat with only 75m total elevation gain. Eliud Kipchoge set the world record here (2:01:09). Perfect conditions for PRs.',
      notable: 'World Record course — Kipchoge 2:01:09',
      timeFactor: 0.99,
      profile: [
        [0,0],[5000,2],[10000,4],[15000,3],[20000,2],[25000,3],[30000,4],
        [35000,2],[40000,1],[42195,0]
      ],
      courseRecord: { mens: '2:01:09', womens: '2:11:53' }
    },
    {
      id: 'chicago',
      name: 'Chicago Marathon',
      location: 'Chicago, IL',
      type: 'road',
      distance: 42195,
      difficulty: 1,
      description: 'Nearly flat course through Chicago\'s neighborhoods. Slight net downhill. One of the fastest courses in the world and a favorite for BQ attempts. Crowds are incredible.',
      notable: 'World Marathon Major, Kelvin Kiptum WR 2:00:35',
      timeFactor: 0.995,
      profile: [
        [0,0],[5000,1],[10000,2],[15000,1],[20000,0],[25000,1],[30000,2],
        [35000,1],[40000,0],[42195,0]
      ],
      courseRecord: { mens: '2:00:35', womens: '2:13:44' }
    },
    {
      id: 'london',
      name: 'London Marathon',
      location: 'London, UK',
      type: 'road',
      distance: 42195,
      difficulty: 2,
      description: 'One of the fastest majors with 127m elevation gain and 161m loss. Slightly net downhill. Excellent crowd support and ideal spring temperatures make it a PR course.',
      notable: 'World Marathon Major, World Record attempts',
      timeFactor: 1.01,
      profile: [
        [0,0],[5000,4],[10000,8],[15000,6],[20000,4],[25000,6],[30000,8],
        [35000,5],[40000,2],[42195,0]
      ],
      courseRecord: { mens: '2:01:25', womens: '2:16:16' }
    },
    {
      id: 'tokyo',
      name: 'Tokyo Marathon',
      location: 'Tokyo, Japan',
      type: 'road',
      distance: 42195,
      difficulty: 1,
      description: 'Mostly flat point-to-point course through the heart of Tokyo. Only 95m elevation gain. Cool March temperatures and excellent organization make it one of the fastest majors.',
      notable: 'World Marathon Major, Abbott World Marathon Majors',
      timeFactor: 1.0,
      profile: [
        [0,0],[5000,3],[10000,5],[15000,4],[20000,2],[25000,4],[30000,5],
        [35000,3],[40000,1],[42195,0]
      ],
      courseRecord: { mens: '2:02:16', womens: '2:16:02' }
    },
    {
      id: 'boston',
      name: 'Boston Marathon',
      location: 'Hopkinton to Boston, MA',
      type: 'road',
      distance: 42195,
      difficulty: 4,
      description: 'The world\'s oldest annual marathon and the most prestigious. 248m gain, 388m loss — net downhill but brutal. Steep opening descent destroys quads before the Newton Hills and infamous Heartbreak Hill (mile 20-21). Not eligible for world records.',
      notable: 'Oldest annual marathon, Heartbreak Hill, qualification required',
      timeFactor: 1.04,
      profile: [
        [0,143],[1609,99],[3219,72],[4828,55],[6437,62],[8047,55],[9656,47],
        [11265,53],[12874,55],[14484,40],[16093,18],[17702,35],[19312,44],
        [20921,40],[22530,46],[24140,40],[25749,61],[27358,70],[28968,60],
        [30577,55],[32186,68],[33796,48],[35405,29],[37014,18],[38624,5],
        [40233,3],[42195,0]
      ],
      courseRecord: { mens: '2:03:02', womens: '2:19:59' }
    },
    {
      id: 'nyc',
      name: 'New York City Marathon',
      location: 'New York, NY',
      type: 'road',
      distance: 42195,
      difficulty: 4,
      description: 'Through all five boroughs with 246m gain and 251m loss. Multiple bridges create demanding rolling terrain. The Queensboro Bridge at mile 15 is a brutal silent climb. One of the most iconic race experiences in the world.',
      notable: 'World Marathon Major, 5 boroughs, 50,000 runners',
      timeFactor: 1.06,
      profile: [
        [0,0],[1609,4],[3219,8],[4828,20],[6437,15],[8047,8],[9656,4],
        [11265,2],[12874,8],[14484,15],[16093,35],[17702,20],[19312,8],
        [20921,4],[22530,8],[24140,15],[25749,20],[27358,15],[28968,10],
        [30577,5],[32186,8],[33796,12],[35405,8],[37014,4],[38624,2],
        [40233,2],[42195,0]
      ],
      courseRecord: { mens: '2:04:58', womens: '2:22:31' }
    },
    {
      id: 'nychalf',
      name: 'NYC Half Marathon',
      location: 'New York, NY',
      type: 'road',
      distance: 21097,
      difficulty: 3,
      description: 'Through Central Park and the streets of Manhattan. Rolling terrain through Central Park is demanding. Finishes in Battery Park with iconic city views.',
      notable: 'NYRR flagship half marathon',
      timeFactor: 1.04,
      profile: [
        [0,0],[2000,8],[4000,15],[6000,10],[8000,5],[10000,8],[12000,12],
        [14000,8],[16000,4],[18000,2],[20000,1],[21097,0]
      ],
      courseRecord: { mens: '59:22', womens: '1:07:00' }
    },
    {
      id: 'peachtree',
      name: 'Peachtree Road Race 10K',
      location: 'Atlanta, GA',
      type: 'road',
      distance: 10000,
      difficulty: 3,
      description: 'The world\'s largest 10K with 60,000 runners on July 4th. Net downhill overall but Cardiac Hill at mile 3 is brutal, especially in Atlanta summer heat. Conditions heavily impact times.',
      notable: "World's largest 10K, July 4th tradition",
      timeFactor: 1.05,
      profile: [
        [0,0],[1000,4],[2000,8],[3000,20],[4000,25],[5000,15],[6000,8],
        [7000,4],[8000,2],[9000,1],[10000,0]
      ],
      courseRecord: { mens: '27:15', womens: '30:46' }
    },
    {
      id: 'bolderboulder',
      name: 'Bolder Boulder 10K',
      location: 'Boulder, CO',
      type: 'road',
      distance: 10000,
      difficulty: 4,
      description: 'Run at 5,400 feet altitude with significant elevation change. The altitude alone adds 3-5% to times for sea-level runners. Rolling terrain through Boulder neighborhoods finishing in Folsom Field stadium.',
      notable: 'Memorial Day tradition, 50,000 runners, altitude at 5,400ft',
      timeFactor: 1.08,
      profile: [
        [0,0],[1000,5],[2000,10],[3000,15],[4000,20],[5000,18],[6000,12],
        [7000,8],[8000,5],[9000,3],[10000,0]
      ],
      courseRecord: { mens: '28:01', womens: '32:02' }
    },
    {
      id: 'baytobreakers',
      name: 'Bay to Breakers 12K',
      location: 'San Francisco, CA',
      type: 'road',
      distance: 12000,
      difficulty: 4,
      description: 'San Francisco\'s iconic race featuring Hayes Street Hill — a 150m long climb at 11% grade. Significant net change across the city. Mostly a party but times here are legitimately hard-earned.',
      notable: 'World\'s oldest footrace, Hayes Street Hill',
      timeFactor: 1.07,
      profile: [
        [0,0],[1000,2],[2000,5],[3000,8],[4000,25],[5000,40],[6000,35],
        [7000,20],[8000,10],[9000,5],[10000,2],[11000,0],[12000,0]
      ],
      courseRecord: { mens: '33:31', womens: '38:43' }
    }
  ]
};

// Recommendation data by training phase
const STR_RECOMMENDATIONS = {
  supplements: {
    'Base Building': [
      { name: 'Iron', dose: 'As directed by doctor', timing: 'With vitamin C, away from coffee', why: 'High mileage depletes iron stores. Get blood work done every 6 months during heavy training.' },
      { name: 'Vitamin D3', dose: '2000-4000 IU daily', timing: 'With a meal containing fat', why: 'Most runners are deficient, especially in winter. Critical for bone health and immune function.' },
      { name: 'Magnesium Glycinate', dose: '200-400mg', timing: 'Before bed', why: 'Supports muscle recovery, sleep quality, and reduces cramping during long runs.' },
      { name: 'Omega-3 Fish Oil', dose: '1-2g EPA+DHA', timing: 'With meals', why: 'Reduces exercise-induced inflammation during high mileage base phases.' },
    ],
    'Threshold Building': [
      { name: 'Beta-Alanine', dose: '3.2-6.4g daily', timing: 'Split doses with meals', why: 'Increases muscle carnosine, buffering lactic acid during threshold and interval sessions.' },
      { name: 'Creatine Monohydrate', dose: '3-5g daily', timing: 'Post-workout', why: 'Enhances repeat sprint ability and recovery between hard interval sessions.' },
      { name: 'Caffeine', dose: '3-6mg/kg body weight', timing: '45-60 min before hard workouts', why: 'Proven ergogenic aid for tempo and interval sessions. Use strategically, not daily.' },
      { name: 'Electrolytes (Na, K, Mg)', dose: 'Per product label', timing: 'During runs over 60 min', why: 'Threshold sessions cause significant sweat loss — electrolyte imbalance impairs performance.' },
    ],
    'Taper / Race Ready': [
      { name: 'Caffeine', dose: '3-6mg/kg, race morning', timing: '45-60 min before gun', why: 'Peak ergogenic benefit. Reduce daily caffeine intake 5-7 days before to restore sensitivity.' },
      { name: 'Sodium / Carb Loading', dose: 'Per race nutrition plan', timing: '2-3 days pre-race', why: 'Maximizes glycogen stores and blood volume for race day.' },
      { name: 'Vitamin C', dose: '500mg', timing: 'Daily in taper week', why: 'Immune support during taper when training stress drops but race stress increases.' },
      { name: 'Tart Cherry Juice', dose: '240ml twice daily', timing: 'Morning and evening', why: 'Reduces inflammation and muscle soreness in the final days before racing.' },
    ],
    'Recovery / Off Season': [
      { name: 'Protein (Whey or Plant)', dose: '20-30g', timing: 'Within 30 min post-run', why: 'Muscle protein synthesis is elevated post-exercise. Hit this window every session.' },
      { name: 'Collagen + Vitamin C', dose: '10-15g collagen + 50mg Vit C', timing: '30-60 min before easy runs', why: 'Supports tendon and cartilage repair during recovery periods.' },
      { name: 'Turmeric / Curcumin', dose: '500-1000mg with black pepper', timing: 'With meals', why: 'Natural anti-inflammatory for joint and muscle recovery during off-season.' },
      { name: 'Zinc', dose: '15-25mg', timing: 'With evening meal', why: 'Supports immune function and testosterone production during recovery phases.' },
    ],
    'Peak Fitness': [
      { name: 'Caffeine', dose: '3-6mg/kg', timing: '45 min pre-workout', why: 'Essential ergogenic for peak training sessions.' },
      { name: 'Beet Root / Nitrates', dose: '400-500mg nitrate', timing: '2-3 hours pre-workout', why: 'Increases oxygen efficiency — measurable VO2max improvement at peak fitness.' },
      { name: 'BCAA or EAA', dose: '5-10g', timing: 'During long or double days', why: 'Reduces muscle breakdown during high-volume peak training weeks.' },
      { name: 'Electrolytes', dose: 'Per label', timing: 'During all runs over 45 min', why: 'Peak training means peak sweat loss. Stay on top of electrolytes daily.' },
    ],
  },

  strength: {
    'Base Building': {
      frequency: '2-3x per week',
      focus: 'General strength and injury prevention',
      workouts: [
        { name: 'Single-Leg Romanian Deadlift', sets: '3×10 each leg', cue: 'Hinge at hip, flat back, feel hamstring stretch. Use a light dumbbell to start.' },
        { name: 'Clamshells', sets: '3×20 each side', cue: 'Resistance band above knees, keep feet together, rotate top knee up. Targets glute med.' },
        { name: 'Hip Thrusts', sets: '3×15', cue: 'Drive through heels, squeeze glutes at top, avoid hyperextending lower back.' },
        { name: 'Bulgarian Split Squat', sets: '3×8 each leg', cue: 'Rear foot elevated, front foot far enough forward that knee tracks over toes.' },
        { name: 'Dead Bug', sets: '3×10 each side', cue: 'Press low back into floor. Extend opposite arm/leg slowly, breathe out on extension.' },
        { name: 'Calf Raises (single leg)', sets: '3×15 each', cue: 'Full range — all the way up and all the way down. Crucial for Achilles health.' },
      ]
    },
    'Threshold Building': {
      frequency: '2x per week',
      focus: 'Power, single-leg stability, reactive strength',
      workouts: [
        { name: 'Box Jumps', sets: '4×5', cue: 'Explosive jump, soft landing, step down. Focus on power production not height.' },
        { name: 'Single-Leg Hop and Stick', sets: '3×8 each leg', cue: 'Jump forward, land on one foot, hold 2 seconds. Builds ankle and knee stability.' },
        { name: 'Nordic Hamstring Curl', sets: '3×6', cue: 'Anchor feet, lower body slowly resisting gravity. Best hamstring injury prevention exercise.' },
        { name: 'Lateral Band Walk', sets: '3×20 steps each direction', cue: 'Slight squat position, resist band pulling knees together, controlled steps.' },
        { name: 'Pallof Press', sets: '3×12 each side', cue: 'Resist rotation, press straight out and back. Core anti-rotation strength.' },
        { name: 'Single-Leg Squat (Pistol progression)', sets: '3×8 each leg', cue: 'Use TRX or door frame for assistance. Build toward unassisted over time.' },
      ]
    },
    'Taper / Race Ready': {
      frequency: '1x per week, maintenance only',
      focus: 'Neuromuscular activation, keep sharp without adding fatigue',
      workouts: [
        { name: 'A-Skip Drills', sets: '3×20m', cue: 'High knee drive, quick ground contact. Wakes up running mechanics.' },
        { name: 'Bounding', sets: '3×30m', cue: 'Exaggerated running stride, drive knee up and push off powerfully.' },
        { name: 'Leg Swings', sets: '20 each direction, each leg', cue: 'Hold wall for balance, controlled swing forward and back, then side to side.' },
        { name: 'Glute Bridge', sets: '2×15', cue: 'Light activation, not heavy loading. Just waking up the posterior chain.' },
        { name: 'Calf Raise', sets: '2×10 each leg', cue: 'Light, full range. Maintain Achilles tendon health through taper.' },
      ]
    },
    'Recovery / Off Season': {
      frequency: '2-3x per week',
      focus: 'Address imbalances, build foundation for next season',
      workouts: [
        { name: 'Goblet Squat', sets: '3×12', cue: 'Chest up, knees track toes, full depth. General lower body strength.' },
        { name: 'Face Pulls', sets: '3×15', cue: 'Cable or band at face height, pull to ears, external rotate. Shoulder health.' },
        { name: 'Copenhagen Plank', sets: '3×20 sec each side', cue: 'Side plank with top leg on bench, lift bottom leg. Adductor strength for runners.' },
        { name: 'Romanian Deadlift', sets: '3×10', cue: 'Both legs, heavier load. Build posterior chain strength in off-season.' },
        { name: 'Farmers Carry', sets: '3×30m', cue: 'Heavy dumbbells, tall posture, controlled breathing. Total body stability.' },
        { name: 'Plank Variations', sets: '3×30-60 sec', cue: 'Straight arm, forearm, side plank rotation. Core endurance for running posture.' },
      ]
    },
  },

  yoga: {
    'Base Building': [
      { name: 'Pigeon Pose', duration: '90 sec each side', cue: 'Deep hip flexor and glute opener. Essential for high mileage weeks.' },
      { name: 'Supine Twist', duration: '60 sec each side', cue: 'Releases tension in lower back and IT band from long runs.' },
      { name: "Lizard Pose", duration: '60 sec each side', cue: 'Deep hip flexor stretch with inner groin opening. Hold and breathe.' },
      { name: 'Legs Up the Wall', duration: '5-10 min', cue: 'Best recovery pose for runners. Reduces swelling and flushes lactic acid from legs.' },
      { name: 'Downward Dog', duration: '60 sec, pedal heels', cue: 'Full posterior chain stretch — calves, hamstrings, lower back.' },
    ],
    'Threshold Building': [
      { name: 'Warrior I', duration: '45 sec each side', cue: 'Hip flexor strength and stability. Hold deep and focus on breathing.' },
      { name: 'Warrior III', duration: '30 sec each side', cue: 'Single-leg balance and hip stability. Mimics running mechanics.' },
      { name: 'Chair Pose', duration: '45 sec', cue: 'Quad strength and endurance. Hold until it burns — embrace it.' },
      { name: 'Low Lunge with Twist', duration: '45 sec each side', cue: 'Hip flexor + thoracic rotation. Opens the front body for upright running posture.' },
      { name: 'Standing Figure Four', duration: '30 sec each side', cue: 'Standing pigeon. Challenges balance while opening piriformis.' },
    ],
    'Taper / Race Ready': [
      { name: 'Child\'s Pose', duration: '2-3 min', cue: 'Full relaxation. Let the mat hold your weight. Release tension before race day.' },
      { name: 'Happy Baby', duration: '90 sec', cue: 'Gentle hip opener. Rock side to side to massage lower back.' },
      { name: 'Supine Hamstring Stretch', duration: '60 sec each leg', cue: 'Loop strap around foot if needed. Gentle — not aggressive in taper week.' },
      { name: 'Savasana with visualization', duration: '10 min', cue: 'Visualize race morning, your warm-up, the start, your pace, the finish. Mental prep.' },
    ],
    'Recovery / Off Season': [
      { name: 'Yin Hip Series', duration: '3-5 min each pose', cue: 'Dragon, Sleeping Swan, Saddle. Deep connective tissue work during off-season.' },
      { name: 'Cat-Cow', duration: '2 min', cue: 'Spinal mobility. Move with breath — inhale to cow, exhale to cat.' },
      { name: 'Reclined Butterfly', duration: '3-5 min', cue: 'Let gravity do the work. Deep inner groin and hip release.' },
      { name: 'Thread the Needle', duration: '60 sec each side', cue: 'Upper back and thoracic rotation. Addresses tightness from running posture.' },
    ],
  },

  warmups: {
    easy: {
      name: 'Easy Day Warmup',
      duration: '5 min',
      steps: [
        { name: 'Walk', duration: '2 min', cue: 'Brisk walk to get blood moving. No need to rush.' },
        { name: 'Leg Swings', duration: '30 sec each direction', cue: 'Forward/back then side to side. 10 swings each.' },
        { name: 'Hip Circles', duration: '30 sec each direction', cue: 'Big circles, loosen up the hip joint.' },
        { name: 'Easy jog', duration: '2 min', cue: 'Very easy. If it feels awkward, you\'re going too fast.' },
      ]
    },
    track: {
      name: 'Track / Interval Warmup',
      duration: '20-25 min',
      steps: [
        { name: 'Easy jog', duration: '10-12 min', cue: 'Genuinely easy. Don\'t waste energy warming up.' },
        { name: 'Dynamic leg swings', duration: '1 min each leg', cue: 'Forward/back and side to side. 15 reps each direction.' },
        { name: 'High knees', duration: '2×20m', cue: 'Quick cadence, drive knee to hip height, land on ball of foot.' },
        { name: 'Butt kicks', duration: '2×20m', cue: 'Heel to glute, quick turnover, stay tall.' },
        { name: 'A-skips', duration: '2×20m', cue: 'Punch knee up, foot dorsiflexed, land under hip.' },
        { name: 'Strides', duration: '4×100m', cue: 'Build to 95% over 60m, hold, float in. 90 sec rest between. Get the fast-twitch fibers firing.' },
      ]
    },
    longrun: {
      name: 'Long Run Warmup',
      duration: '8-10 min',
      steps: [
        { name: 'Walk', duration: '3 min', cue: 'Start slow. Long runs don\'t need explosive warmup.' },
        { name: 'Hip flexor stretch (standing)', duration: '30 sec each side', cue: 'Lunge position, drive hip forward, hold.' },
        { name: 'Calf raises', duration: '15 reps each leg', cue: 'Full range. Wake up Achilles before the long haul.' },
        { name: 'Easy jog', duration: '5 min', cue: 'First 5 min of your long run IS the warmup. Start embarrassingly slow.' },
      ]
    },
  },

  cooldowns: {
    easy: {
      name: 'Easy Day Cooldown',
      duration: '5 min',
      steps: [
        { name: 'Walk', duration: '3-5 min', cue: 'Let heart rate drop naturally. Don\'t stop cold.' },
        { name: 'Light stretching', duration: '5 min', cue: 'Calves, quads, hip flexors. Hold each 30 sec.' },
      ]
    },
    hard: {
      name: 'Post-Workout Cooldown',
      duration: '15-20 min',
      steps: [
        { name: 'Easy jog', duration: '10-12 min', cue: 'Truly easy. This is where recovery begins. Don\'t skip it.' },
        { name: 'Walk', duration: '3 min', cue: 'Bring heart rate below 100 before stopping.' },
        { name: 'Standing quad stretch', duration: '30 sec each leg', cue: 'Pull heel to glute, keep knees together.' },
        { name: 'Standing calf stretch', duration: '30 sec each leg', cue: 'Against wall, straight leg then bent knee for soleus.' },
        { name: 'Hip flexor lunge stretch', duration: '30 sec each side', cue: 'Drop back knee, drive hip forward. Essential after speed work.' },
        { name: 'Foam roll IT band/quads', duration: '2 min each side', cue: 'Slow rolls, pause on tender spots for 5-10 seconds.' },
      ]
    },
  },

  stretches: [
    { name: 'Standing Calf Stretch', target: 'Calves / Achilles', duration: '45 sec each leg', cue: 'Hands on wall, straight back leg heel pressed into ground. Then bend knee for soleus.' },
    { name: 'Hip Flexor Lunge', target: 'Hip flexors / quads', duration: '45 sec each side', cue: 'Drop back knee, drive front hip forward, tuck pelvis slightly. One of the most important stretches for runners.' },
    { name: 'Seated Hamstring Stretch', target: 'Hamstrings', duration: '45 sec each leg', cue: 'Sit with one leg extended, hinge forward at hip — not back. Keep chest up.' },
    { name: 'Figure-4 Glute Stretch', target: 'Glutes / piriformis', duration: '45 sec each side', cue: 'On back, cross ankle over opposite knee, pull both legs toward chest.' },
    { name: 'IT Band Cross Stretch', target: 'IT band / TFL', duration: '30 sec each side', cue: 'Stand, cross affected leg behind, lean away. Feel pull along outside of thigh.' },
    { name: 'Doorway Hip Flexor', target: 'Hip flexors', duration: '60 sec each side', cue: 'Place back knee on pad in doorway, front foot through. Deep static stretch.' },
    { name: 'Wall Ankle Dorsiflexion', target: 'Ankle / lower calf', duration: '30 sec each ankle', cue: 'Foot 4 inches from wall, drive knee forward to touch wall. Prevents shin splints.' },
    { name: 'Thread the Needle', target: 'Upper back / thoracic', duration: '30 sec each side', cue: 'On all fours, slide one arm under body and rotate. Releases upper back tightness from running posture.' },
    { name: 'Prone Quad Stretch', target: 'Quads', duration: '30 sec each leg', cue: 'Face down, pull heel to glute with strap or hand. More effective than standing version.' },
    { name: 'Adductor Stretch (Butterfly)', target: 'Inner thighs', duration: '60 sec', cue: 'Seated, soles together, lean forward from hips. Often neglected in runners.' },
  ]
};
