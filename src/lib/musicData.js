export const EXPLORE = [
  { id: "origin", icon: "Sparkles", tag: "8.1 · Origin", title: "Origin & Role of Music",
    summary: "Every known human society has had music — perhaps even before language.",
    points: [
      "Music is a combination of sounds, and sound is vibration. Composer Ferruccio Busoni put it simply: \"Music is sonorous air.\"",
      "Anthropologists have yet to find a single culture in history without music, and some evolutionary psychologists argue music predated language.",
      "Tribes and religious practices have used music for thousands of years to reach heightened states; Pythagoras used it to heal psychological and physical ailments.",
      "Today, research shows music's effect on the brain, the individual and society. It reaches us intellectually, socially, emotionally — and for many, spiritually.",
    ] },
  { id: "elements", icon: "Waves", tag: "8.3 · Elements", title: "The Elements of Music",
    summary: "Eight elements shape music: harmony, key, melody, pitch, rhythm, tempo, texture and timbre.",
    points: [
      "Harmony is the vertical combination of pitches: notes sounding together form chords, and chords can be arranged into recurring, sentence-like chord progressions.",
      "Key, or tonality, organizes a piece around a central note called the tonic. Returning to the tonic?especially near the end?can create a sense of musical resolution or completion.",
      "Melody is the recognizable tune of a song or instrumental piece: a sequence of pitches heard as one musical line.",
      "Pitch is the perceived highness or lowness of a sound. Pitches can be ordered on a frequency-related scale, from lower to higher sounds.",
      "Rhythm is the pattern of sounds and silences through time, including the beats of the music. Recurring patterns of motion, accents and durations help organize that pattern.",
      "Tempo is the speed of a piece of music or its steady beat, from slow to fast. Terms such as andante, allegro and presto describe different pace ranges.",
      "Texture describes how musical lines and harmonic parts combine. Monophonic texture has one melodic line; polyphonic texture has multiple independent melodies; homophonic texture has a main melody supported by chords.",
      "Timbre is the tone quality or character that lets us distinguish one voice or instrument from another, even when they perform the same pitch.",
    ] },
  { id: "songwriting", icon: "PenLine", tag: "8.4 · Songwriting", title: "Essentials in Song Writing",
    summary: "A theme, a melody, meaningful lyrics and a clear structure.",
    points: [
      "Start with a theme — the leading idea of the song. Your lyrics carry the message, so they deserve the most care.",
      "A motif or main melody is developed through the piece; a phrase is a musical sentence, and repeated phrases (ostinato) give a song its hook.",
      "Choose a key, a time signature and a tempo that match the mood. Chord progressions move the song forward.",
      "The module's song-composition task is graded on lyrics (50%), song structure and composition (30%) and originality (20%).",
    ] },
  { id: "genres", icon: "Disc3", tag: "8.5 · Genres", title: "The Different Music Genres",
    summary: "Blues, classical, folk, jazz, military, patriotic, rap, religious, rock and more.",
    points: [
      "The module introduces blues, classical, folk, jazz, military, patriotic, rap, religious and rock music.",
      "Genres can overlap and change over time; artists often combine musical traditions, instruments and rhythms.",
      "The Showcase gallery has more genre filters and playable listening examples.",
    ] },
  { id: "instruments", icon: "Mic2", tag: "8.6 · Instruments", title: "Classification of Instruments",
    summary: "Explore 23 instruments arranged in the alto, bass, baritone, soprano and tenor groups shown in the module.",
    points: [
      "The module organizes this selection by vocal range: alto, bass, baritone, soprano and tenor.",
      "These are register groupings for this lesson, not exclusive instrument families. Some instruments can appear in more than one register or classification system.",
    ] },
];

export const MODULE_GENRES = [
  { name: "Blues", description: "Expressive music shaped by recurring chord patterns, blues notes, and stories of struggle, hope, and everyday life." },
  { name: "Classical", description: "A broad tradition of composed music, from chamber works and concertos to symphonies and opera." },
  { name: "Folk", description: "Songs and music shared within communities, often passed on through performance and oral tradition." },
  { name: "Jazz", description: "A musical tradition known for improvisation, syncopation, distinctive rhythms, and interaction between musicians." },
  { name: "Military", description: "Music for marching, ceremony, and military ensembles, often with a strong, regular pulse." },
  { name: "Patriotic", description: "Songs that express attachment to a country, shared identity, or a call for freedom and unity." },
  { name: "Rap", description: "Rhythmic vocal delivery that uses rhyme, flow, and wordplay, commonly performed over a beat." },
  { name: "Religious", description: "Music connected with worship, prayer, spiritual practice, and faith communities." },
  { name: "Rock", description: "A broad, evolving genre often built around a strong beat, amplified instruments, and expressive vocals." },
];

export const INSTRUMENT_GROUPS = [
  {
    name: "Alto instruments",
    range: "Middle register",
    instruments: [
      { name: "Alto saxophone", family: "Woodwind · single reed", description: "A mid-sized saxophone with a warm, flexible sound, used in classical ensembles, concert bands, and jazz.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Yamaha_Saxophone_YAS-62.png/500px-Yamaha_Saxophone_YAS-62.png", imageSource: "https://commons.wikimedia.org/wiki/File:Yamaha_Saxophone_YAS-62.png" },
      { name: "French horn", family: "Brass", description: "A brass instrument with tubing coiled into a circle, rotary valves, and a flared bell. Its tubing measures about 12–13 feet when uncoiled.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Yamaha_Horn_YHR-667V.tif/lossy-page1-500px-Yamaha_Horn_YHR-667V.tif.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:Yamaha_Horn_YHR-667V.tif" },
      { name: "English horn (cor anglais)", family: "Woodwind · double reed", description: "A larger, lower-pitched relative of the oboe with a gently curved bocal and a pear-shaped bell.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/English_Horn_picture.jpg/500px-English_Horn_picture.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:English_Horn_picture.jpg" },
      { name: "Viola", family: "String · bowed", description: "The middle-voiced member of the violin family, larger and lower in pitch than a violin but higher than a cello.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Bratsche.jpg/500px-Bratsche.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:Bratsche.jpg" },
    ],
  },
  {
    name: "Bass instruments",
    range: "Low register",
    instruments: [
      { name: "Double bass", family: "String · bowed or plucked", description: "The largest and lowest-pitched bowed string instrument in the modern symphony orchestra.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/AGK_bass1_full.jpg/500px-AGK_bass1_full.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:AGK_bass1_full.jpg" },
      { name: "Bass guitar", family: "String · plucked", description: "A long-necked, fretted instrument that usually has four strings and anchors the low notes in many bands.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Fender_Precision_Bass.jpg/500px-Fender_Precision_Bass.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:Fender_Precision_Bass.jpg" },
      { name: "Bass saxophone", family: "Woodwind · single reed", description: "A very large, low-register member of the saxophone family, usually supported by a strap or stand while played.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/WANZ_Instrument_2024-09_IMG_7848_bass_saxophone_%28edit%29.png/500px-WANZ_Instrument_2024-09_IMG_7848_bass_saxophone_%28edit%29.png", imageSource: "https://commons.wikimedia.org/wiki/File:WANZ_Instrument_2024-09_IMG_7848_bass_saxophone_(edit).png" },
      { name: "Tuba", family: "Brass", description: "The largest common brass instrument. The player buzzes their lips into a cup-shaped mouthpiece to produce its deep sound.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Yamaha_Bass_tuba_YFB-822.tif/lossy-page1-500px-Yamaha_Bass_tuba_YFB-822.tif.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:Yamaha_Bass_tuba_YFB-822.tif" },
    ],
  },
  {
    name: "Baritone instruments",
    range: "Middle-low register",
    instruments: [
      { name: "Bassoon", family: "Woodwind · double reed", description: "A long, folded wooden instrument with a double reed and a mellow sound, commonly used for bass and tenor parts.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/FoxBassoon.png/500px-FoxBassoon.png", imageSource: "https://commons.wikimedia.org/wiki/File:FoxBassoon.png" },
      { name: "Baritone saxophone", family: "Woodwind · single reed", description: "A large saxophone with a low, resonant voice; it is the lowest-pitched saxophone in common use.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Baritone_Saxophone_Amati.png/500px-Baritone_Saxophone_Amati.png", imageSource: "https://commons.wikimedia.org/wiki/File:Baritone_Saxophone_Amati.png" },
      { name: "Bass clarinet", family: "Woodwind · single reed", description: "A low-register clarinet with a curved metal neck and an expanded bell, heard in orchestras and wind ensembles.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/BC_basscl_Prestige_1193_%2B_Yamaha_VCL_622.jpg/500px-BC_basscl_Prestige_1193_%2B_Yamaha_VCL_622.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:BC_basscl_Prestige_1193_%2B_Yamaha_VCL_622.jpg" },
      { name: "Cello (violoncello)", family: "String · bowed or plucked", description: "A bowed string instrument with a hollow wooden body and four strings; it is played upright with its endpin resting on the floor.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Cello_front_side.png/500px-Cello_front_side.png", imageSource: "https://commons.wikimedia.org/wiki/File:Cello_front_side.png" },
      { name: "Baritone horn", family: "Brass", description: "A valved brass instrument with a cup-shaped mouthpiece and a mellow middle-low register.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Yamaha_Baritone_horn_YBH-621S_by_Yamaha_%28crop%29.jpg/500px-Yamaha_Baritone_horn_YBH-621S_by_Yamaha_%28crop%29.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:Yamaha_Baritone_horn_YBH-621S_by_Yamaha_(crop).jpg" },
    ],
  },
  {
    name: "Soprano instruments",
    range: "High register",
    instruments: [
      { name: "Flute", family: "Woodwind · blown across an edge", description: "A high-register woodwind that makes sound when air is directed across an opening; keys open and close its tone holes.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Shinobue_and_other_flutes-3.jpg/500px-Shinobue_and_other_flutes-3.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:Shinobue_and_other_flutes-3.jpg" },
      { name: "Violin", family: "String · bowed", description: "A small, high-pitched member of the violin family, usually played with a bow and tuned in perfect fifths.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Violin_VL100.png/500px-Violin_VL100.png", imageSource: "https://commons.wikimedia.org/wiki/File:Violin_VL100.png" },
      { name: "Soprano saxophone", family: "Woodwind · single reed", description: "A small, high-register saxophone with a bright tone; it may have a straight or curved body.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Yamaha_Saxophone_YSS-875_EX.jpg/500px-Yamaha_Saxophone_YSS-875_EX.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:Yamaha_Saxophone_YSS-875_EX.jpg" },
      { name: "Trumpet", family: "Brass", description: "A high-register brass instrument. The player buzzes their lips into a mouthpiece and uses valves to change notes.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Yamaha_Trumpet_YTR-8335LA_crop.jpg/500px-Yamaha_Trumpet_YTR-8335LA_crop.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:Yamaha_Trumpet_YTR-8335LA_crop.jpg" },
      { name: "Clarinet", family: "Woodwind · single reed", description: "A woodwind with a single-reed mouthpiece, cylindrical body, and flared bell; it has a broad range and a clear, flexible tone.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Leitner%2BKraus_410_320.png/500px-Leitner%2BKraus_410_320.png", imageSource: "https://commons.wikimedia.org/wiki/File:Leitner%2BKraus_410_320.png" },
      { name: "Oboe", family: "Woodwind · double reed", description: "A slender woodwind whose two reeds vibrate together at the mouthpiece to produce its distinctive sound.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Oboe_Patricola_Artista_PT1.jpg/500px-Oboe_Patricola_Artista_PT1.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:Oboe_Patricola_Artista_PT1.jpg" },
      { name: "Piccolo", family: "Woodwind · blown across an edge", description: "A very small flute that sounds an octave higher than the standard concert flute.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Piccolo.jpg/500px-Piccolo.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:Piccolo.jpg" },
    ],
  },
  {
    name: "Tenor instruments",
    range: "Middle-high register",
    instruments: [
      { name: "Trombone", family: "Brass · slide", description: "A brass instrument whose telescoping slide changes the length of the tubing and allows smooth gliding between pitches.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Yamaha_Tenor_trombone_YSL-891Z_%28re-crop%29.jpg/500px-Yamaha_Tenor_trombone_YSL-891Z_%28re-crop%29.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:Yamaha_Tenor_trombone_YSL-891Z_(re-crop).jpg" },
      { name: "Tenor saxophone", family: "Woodwind · single reed", description: "A medium-sized saxophone with a rich tone, used in jazz groups, concert bands, and orchestral music.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/TenorSopranoSax_%281%29.jpg/500px-TenorSopranoSax_%281%29.jpg", imageSource: "https://commons.wikimedia.org/wiki/File:TenorSopranoSax_(1).jpg" },
      { name: "Guitar", family: "String · plucked or strummed", description: "A fretted string instrument, commonly with six strings, played by plucking or strumming.", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/GuitareClassique5.png/500px-GuitareClassique5.png", imageSource: "https://commons.wikimedia.org/wiki/File:GuitareClassique5.png" },
    ],
  },
];

export const WORKS = [
  { id: 1, title: "Symphony No. 5 in C minor", creator: "Ludwig van Beethoven", year: "1808", category: "Classical", from: "#8a6c15", to: "#c9a227",
    desc: "A four-movement orchestral work famous for its four-note opening motif.",
    meaning: "A textbook case of a motif developed across a whole symphony — the module describes a symphony as a piece for orchestra, commonly in sonata form." },
  { id: 2, title: "The Four Seasons", creator: "Antonio Vivaldi", year: "c. 1723", category: "Classical", from: "#20544f", to: "#7fbcb3",
    desc: "Four violin concertos that paint spring, summer, autumn and winter in sound.",
    meaning: "Shows how a concerto (a piece for a solo instrument with orchestra) can tell a story through tempo, dynamics and tone colour." },
  { id: 3, title: "Canon in D", creator: "Johann Pachelbel", year: "late 1600s", category: "Classical", from: "#4f4235", to: "#c9a227",
    desc: "A melody followed by imitations of it entering one after another over a repeating bass.",
    meaning: "A clear example of a canon and of ostinato — both defined in the module's review of concepts." },
  { id: 4, title: "Maskara", creator: "Eraserheads", year: "1994", category: "Rock", from: "#7b2d26", to: "#c9a227",
    desc: "A reflective alternative-rock song from the album Circus, about the faces people wear.",
    meaning: "One of the module's three pre-test songs: an OPM track that invites you to ask what the creator wanted listeners to feel." },
  { id: 5, title: "Bayan Ko", creator: "José Corazón de Jesús (lyrics) · Constancio de Guzman (music)", year: "1928", category: "Folk", from: "#5f4b0f", to: "#a5831c",
    desc: "A Filipino patriotic song about longing for a free homeland.",
    meaning: "A patriotic genre piece: music as a vessel of national identity and resistance." },
  { id: 6, title: "Bahay Kubo", creator: "Traditional (Filipino folk song)", year: "Traditional", category: "Folk", from: "#296a63", to: "#c9a227",
    desc: "A children's folk song that lists the vegetables growing around a nipa hut.",
    meaning: "Folk music passes down culture orally — simple melody, easy phrases, shared by a community." },
  { id: 7, title: "Liability", creator: "Lorde", year: "2013", category: "Rock", from: "#4f4235", to: "#a89274",
    desc: "A sparse, minimal pop ballad about feeling like too much for others.",
    meaning: "Another module pre-test song. Notice how the quiet style and restrained dynamics shape its vulnerable mood." },
  { id: 8, title: "High Hopes", creator: "Panic! at the Disco", year: "2018", category: "Rock", from: "#a5831c", to: "#7b2d26",
    desc: "An energetic, brass-driven pop-rock anthem about ambition and perseverance.",
    meaning: "The third pre-test song. Compare its fast, driving rhythm with Liability to see how tempo and tone change feeling." },
  { id: 9, title: "Kind of Blue", creator: "Miles Davis", year: "1959", category: "Jazz", from: "#173d39", to: "#35837a",
    desc: "A landmark jazz album built on modal improvisation and a relaxed, cool tone.",
    meaning: "Shows jazz's reliance on improvisation, register and tone — where musicians compose in the moment." },
];

const ADDITIONAL_WORKS = [
  {
    category: "Classical", from: "#8a6c15", to: "#c9a227",
    tracks: [
      ["Toccata and Fugue in D minor", "Johann Sebastian Bach", "1700s", "ho9rZjlsyYY", "A dramatic organ work whose contrasting sections showcase counterpoint and dynamics.", "Listen for how a short musical idea is developed through changes in texture and register."],
      ["Moonlight Sonata", "Ludwig van Beethoven", "1801", "4Tr0otuiQuU", "A piano sonata known for its gentle, flowing first movement.", "The steady broken chords create a calm foundation beneath the expressive melody."],
      ["Eine kleine Nachtmusik", "Wolfgang Amadeus Mozart", "1787", "Qb_jQBgzU-I", "A lively serenade for strings, with a bright and memorable opening theme.", "Its clear phrases and balanced structure make it a useful example of Classical-era style."],
      ["Classical Music That Will Make You Look Smart and Creative", "Journey Mx · Epidemic Sound mix", "n.d.", "7gsh5RENwjA", "A classical-style instrumental compilation published by Journey Mx.", "Listen for how melodic lines, orchestration, and dynamics create a classical mood."],
    ],
  },
  {
    category: "Folk", from: "#5f4b0f", to: "#a5831c",
    tracks: [
      ["Scarborough Fair", "Traditional English ballad · Simon & Garfunkel", "1960s", "4Ccgk8PXz64", "A traditional English ballad presented in a well-known folk arrangement.", "Notice the repeating vocal lines and the song's connection to oral storytelling."],
      ["This Land Is Your Land", "Woody Guthrie", "1940", "wxiMrvDbq3s", "A folk song with a memorable melody and lyrics about the American landscape.", "Its simple, singable structure helped the song travel from performer to performer."],
      ["House of the Rising Sun", "Traditional American folk song · The Animals", "1964", "4-43lLKaqBQ", "A traditional folk song reimagined in a well-known electric folk-rock arrangement.", "Compare the folk-storytelling roots with the arrangement's amplified instruments and dramatic build."],
      ["Spring Indie Folk Playlist 2023", "Wildwood Radio · Epidemic Sound", "2023", "ME_9pa0HGHs", "An indie-folk playlist curated by Wildwood Radio featuring Epidemic Sound tracks.", "Listen for acoustic textures and song-based storytelling across the playlist."],
    ],
  },
  {
    category: "Funk", from: "#7b2d26", to: "#c9a227",
    tracks: [
      ["I Feel Good", "James Brown", "1964", "pTdihu-mp90", "A landmark funk performance powered by a punchy horn section and an instantly recognizable groove.", "Listen for the accents, syncopation, and tight call-and-response between the voice and band."],
      ["Celebration", "Kool & The Gang", "1980", "3GwjfUFyY6M", "A celebratory funk and disco classic driven by a buoyant groove and bright horn lines.", "Notice how the rhythm section and repeated hook invite listeners to move and sing along."],
      ["Superstition", "Stevie Wonder", "1972", "0CFuCYNx-1g", "A funk song recognized for its syncopated clavinet riff and punchy rhythm.", "Notice how a repeating instrumental motif becomes the center of the arrangement."],
      ["Happy Funk Music - Instrumental Party Mix", "Epidemic Funk", "n.d.", "55cd7X_LUWk", "An extended instrumental funk mix from the Epidemic Funk channel.", "Follow the bass, drums, and bright accents as the playlist moves between tracks."],
    ],
  },
  {
    category: "Hip-hop", from: "#4f4235", to: "#a89274",
    tracks: [
      ["Lose Yourself", "Eminem", "2002", "xFYQQPAOz7Y", "A rap performance built around a tense repeating guitar figure and determined delivery.", "Follow how rhythm, rhyme, and changes in intensity shape the storytelling."],
      ["HUMBLE.", "Kendrick Lamar", "2017", "tvTRZJ-4EyI", "A modern hip-hop track with a sparse beat and sharply articulated vocal rhythm.", "Listen to how space in the beat makes the vocal phrasing stand out."],
      ["California Love", "2Pac · Dr. Dre", "1995", "5wBTdfAkqGU", "A West Coast hip-hop track with a strong groove and an instantly recognizable synth hook.", "The repeating hook and beat give the verses a clear, memorable frame."],
      ["Best of Epidemic Hip-Hop", "Epidemic Hip-Hop", "n.d.", "5sZwHlbbMtM", "A multi-track hip-hop compilation from the Epidemic Hip-Hop channel.", "Compare how the vocal flows, beats, and production change throughout the mix."],
    ],
  },
  {
    category: "Jazz", from: "#173d39", to: "#35837a",
    tracks: [
      ["Take Five", "The Dave Brubeck Quartet", "1959", "vmDDOFXSgAs", "A jazz standard famous for its distinctive five-beat meter and saxophone melody.", "Count the uneven pulse and listen for the relaxed improvisation over it."],
      ["What a Wonderful World", "Louis Armstrong", "1967", "VqhCQZaH4Vs", "A warm vocal performance paired with a gentle orchestral arrangement.", "Armstrong's phrasing and tone are central to the character of this recording."],
      ["Classic Jazz - Epidemic Sound Playlist", "M & H Diary", "n.d.", "_E8rCxn8Lf8", "A classic-jazz playlist featuring Epidemic Sound music, curated by M & H Diary.", "Listen for improvisation, swing, and the interplay between soloists and ensemble."],
    ],
  },
  {
    category: "Meta Music", from: "#296a63", to: "#7fbcb3",
    tracks: [
      ["Thank You for the Music", "ABBA", "1977", "0dcbw4IEY5w", "A song celebrating music, singing, and the joy of performing.", "Use it as a listening prompt: notice how the lyrics make music itself the subject."],
      ["Don't Stop the Music", "Rihanna", "2007", "yd8jh9QYfEs", "A dance-pop song that celebrates staying on the dance floor and enjoying music.", "Listen for the repeated hook and how production details build the track's energy."],
      ["Music", "Madonna", "2000", "Sdz2oW0NMFk", "A dance-pop track that puts music and its social power at the center of the lyrics.", "Consider how the beat, repeated phrases, and lyrics reinforce the idea of music bringing people together."],
      ["Music (1976)", "John Miles · TopPop performance", "1976", "gb6XtyFNawM", "A rock song that places music itself at the center of the lyrics, presented as a TopPop performance.", "Notice how the lyrics turn music into the subject of the song, making it a clear example of Meta Music."],
    ],
  },
  {
    category: "Opera", from: "#5f4b0f", to: "#c9a227",
    tracks: [
      ["Queen of the Night Aria", "Wolfgang Amadeus Mozart · The Royal Opera", "1791", "YuBeBjqKSGQ", "A virtuosic coloratura aria from Mozart's opera The Magic Flute.", "Listen for the singer's high register, agility, and dramatic role in the story."],
      ["Nessun dorma", "Giacomo Puccini · Luciano Pavarotti", "1926", "cWc7vYjgnTs", "A celebrated tenor aria from Puccini's opera Turandot.", "Notice how the orchestra supports the vocal line as it builds toward a powerful climax."],
      ["Habanera", "Georges Bizet · Elina Garanca", "1875", "K2snTkaD64U", "The character Carmen introduces herself in this recognizable aria from Bizet's opera.", "The repeating rhythmic pattern helps establish the aria's distinctive character."],
    ],
  },
  {
    category: "Rock", from: "#7b2d26", to: "#a5831c",
    tracks: [
      ["Bohemian Rhapsody", "Queen", "1975", "fJ9rUzIMcZQ", "A rock song that moves through contrasting ballad, opera, and hard-rock sections.", "Hear how shifts in texture, dynamics, and style turn the song into a miniature musical journey."],
      ["Smells Like Teen Spirit", "Nirvana", "1991", "hTWKbfoikeg", "A grunge-rock song known for its quiet-loud dynamic contrast and driving guitar riff.", "Compare the restrained verses with the explosive choruses."],
      ["Hey Jude", "The Beatles", "1968", "A_MjCqQoLLA", "A rock ballad that grows from a simple piano-led opening into a communal singalong.", "Notice how repetition and a gradual build shape the song's long closing section."],
      ["Rock Mix - Epidemic Sound", "Geekos de Tablero", "n.d.", "9vfrRArALi8", "An extended rock playlist built around Epidemic Sound tracks.", "Compare guitar, rhythm, and vocal textures across the selection."],
    ],
  },
  {
    category: "Techno", from: "#173d39", to: "#7fbcb3",
    tracks: [
      ["Around the World", "Daft Punk", "1997", "K0HSD_i2DvA", "A repetitive electronic dance track built from layered synth and vocal patterns.", "Listen to how small changes in the repeating pattern keep the groove moving."],
      ["One More Time", "Daft Punk", "2000", "FGBhQbmPwH8", "A celebratory electronic dance track with a looping vocal hook and a steady pulse.", "The repeated phrases and gradual layering create a long, continuous dance groove."],
      ["Blue (Da Ba Dee)", "Eiffel 65", "1998", "zA52uNzx7Y4", "A bright electronic dance track driven by synth hooks and a repeated chorus.", "Notice how the synth timbre and repeated hook make the track instantly recognizable."],
      ["Epidemic Electronic Music Mix", "Epidemic Electronic", "n.d.", "V1nHExavz_Y", "An extended electronic music mix from the Epidemic Electronic channel.", "Listen for repeated electronic patterns and layered synthesizer textures."],
    ],
  },
  {
    category: "Trance", from: "#20544f", to: "#7fbcb3",
    tracks: [
      ["Sandstorm", "Darude", "1999", "y6120QOlsfU", "An instrumental electronic dance track characterized by a fast tempo and repeating synth patterns.", "Follow how a persistent rhythmic pulse and layered synths build intensity."],
      ["Children", "Robert Miles", "1995", "CC5ca6Hsb2Q", "A melodic trance instrumental with a piano theme and a steady dance pulse.", "Listen to the contrast between the calm piano motif and the driving electronic backing."],
      ["9 PM (Till I Come)", "ATB", "1998", "5A9OIIapSko", "A melodic electronic dance track with a repeating guitar-like synth hook.", "Notice how repetition and gradual layering create a hypnotic, forward-moving feel."],
      ["Top 10 Trance and Techno - Epidemic Sound", "Electronic Atmosphere", "n.d.", "cXOMBk2HlUA", "A trance-and-techno compilation from the Electronic Atmosphere channel.", "Notice how regular pulses and evolving synthesizer layers sustain a dance groove."],
    ],
  },
  {
    category: "Meta Music", from: "#296a63", to: "#7fbcb3",
    tracks: [
      ["Awit ng Kabataan", "Rivermaya", "n.d.", "CSX3qhX3iqQ", "An OPM song by Rivermaya included in the submitted Meta Music selection.", "Listen to the melody and arrangement alongside the other OPM selections in this collection."],
      ["Himig ng Pag-Ibig", "Asin", "n.d.", "prq_XwuGdSQ", "An OPM song by Asin included in the submitted Meta Music selection.", "Listen to the melody and arrangement alongside the other OPM selections in this collection."],
      ["Your Song", "Parokya ni Edgar", "n.d.", "", "An OPM song by Parokya ni Edgar included in the submitted Meta Music selection.", "Listen to the melody and arrangement alongside the other OPM selections in this collection.", "Your Song Parokya ni Edgar"],
      ["Kay Ganda ng Ating Musika", "Hajji Alejandro / Ryan Cayabyab", "n.d.", "", "An OPM song associated with Hajji Alejandro and Ryan Cayabyab, included in the submitted Meta Music selection.", "Listen to the melody and arrangement alongside the other OPM selections in this collection.", "Kay Ganda ng Ating Musika Hajji Alejandro Ryan Cayabyab"],
      ["Salamat", "Yeng Constantino", "n.d.", "", "An OPM song by Yeng Constantino included in the submitted Meta Music selection.", "Listen to the melody and arrangement alongside the other OPM selections in this collection.", "Salamat Yeng Constantino"],
    ],
  },
  {
    category: "Opera", from: "#5f4b0f", to: "#c9a227",
    tracks: [
      ["Awit ng Gabi ni Sisa", "Felipe Padilla de León · Noli Me Tangere", "n.d.", "DbhwWslt0H0", "An opera selection from Felipe Padilla de León's Noli Me Tangere.", "Listen for the expressive vocal writing and how it helps convey the opera's drama."],
      ["Kay Tamis ng Buhay", "Felipe Padilla de León · Noli Me Tangere", "n.d.", "", "An opera selection from Felipe Padilla de León's Noli Me Tangere.", "Listen for the expressive vocal writing and how it helps convey the opera's drama.", "Kay Tamis ng Buhay Noli Me Tangere Opera"],
      ["Lupang Pangako", "Felipe Padilla de León · Noli Me Tangere", "n.d.", "YhHaY1iUoZ0", "An opera selection from Felipe Padilla de León's Noli Me Tangere.", "Listen for the expressive vocal writing and how it helps convey the opera's drama."],
      ["Sampaguita", "Ladislao Bonus · Sangdugong Panaguinip", "n.d.", "", "An opera selection by Ladislao Bonus from Sangdugong Panaguinip.", "Listen for the expressive vocal writing and how it helps convey the opera's drama.", "Sampaguita Sangdugong Panaguinip opera"],
      ["Magbalik Ka Na Mahal", "Ryan Cayabyab / Kuh Ledesma · Rama Hari", "n.d.", "2hTDTKiBomY", "An opera selection from Ryan Cayabyab's Rama Hari, performed by Kuh Ledesma.", "Listen for the expressive vocal writing and how it helps convey the opera's drama."],
    ],
  },
  {
    category: "Funk", from: "#7b2d26", to: "#c9a227",
    tracks: [
      ["Los Voltaje", "Sayfalse, Yb Wasg'ood & Ariis", "n.d.", "gCESZzZ4Z38", "A funk track by Sayfalse, Yb Wasg'ood, and Ariis.", "Listen for the groove and how the rhythm section shapes the track's energy."],
      ["Nada Nada", "Jmilton & Mc Jhey", "n.d.", "2LvUweHHCDY", "A funk track by Jmilton and Mc Jhey.", "Listen for the groove and how the rhythm section shapes the track's energy."],
      ["Funk do Bounce", "Ariis", "n.d.", "kWW-jZ6H_LE", "A funk track by Ariis.", "Listen for the groove and how the rhythm section shapes the track's energy."],
      ["Foge", "Onhell & KARAN!", "n.d.", "LfUx7_xHh-Y", "A funk track by Onhell and KARAN!.", "Listen for the groove and how the rhythm section shapes the track's energy."],
      ["Aura", "Ogryzek", "n.d.", "CgXFHAEVJtA", "A funk track by Ogryzek.", "Listen for the groove and how the rhythm section shapes the track's energy."],
    ],
  },
  {
    category: "Folk", from: "#5f4b0f", to: "#a5831c",
    tracks: [
      ["Leaves", "Ben & Ben", "n.d.", "", "A song by Filipino band Ben & Ben, listed in the submitted Folk Music selections.", "Listen for the song-based storytelling and how the arrangement supports the vocal melody.", "Leaves Ben and Ben"],
    ],
  },
  {
    category: "Rock", from: "#7b2d26", to: "#a5831c",
    tracks: [
      ["Let It Be", "The Beatles", "n.d.", "", "A song by The Beatles, listed in the submitted Rock Music selections.", "Listen for how the melody, accompaniment, and vocal delivery shape the song.", "Let It Be The Beatles"],
    ],
  },
  {
    category: "Jazz", from: "#173d39", to: "#35837a",
    tracks: [
      ["You Are the Reason", "Calum Scott", "n.d.", "", "A song by Calum Scott, listed in the submitted Jazz selections.", "Listen for how the vocal melody and accompaniment shape the performance.", "You Are the Reason Calum Scott"],
    ],
  },
  {
    category: "Hip-hop", from: "#4f4235", to: "#a89274",
    tracks: [
      ["Yeah!", "Usher · Lil Jon · Ludacris", "n.d.", "", "A song by Usher featuring Lil Jon and Ludacris, listed in the submitted Hip-hop selections.", "Listen for how the beat and vocal rhythms work together throughout the track.", "Yeah Usher Lil Jon Ludacris"],
    ],
  },
  {
    category: "Trance", from: "#20544f", to: "#7fbcb3",
    tracks: [
      ["Turn It Up", "Armin van Buuren", "n.d.", "", "A track by Armin van Buuren, listed in the submitted Trance selections.", "Listen for the steady pulse and layered electronic sounds that drive the track.", "Turn It Up Armin van Buuren"],
    ],
  },
];

let nextWorkId = 10;
WORKS.push(
  ...ADDITIONAL_WORKS.flatMap(({ category, from, to, tracks }) =>
    tracks.map(([title, creator, year, videoId, desc, meaning, searchQuery]) => ({
      id: nextWorkId++,
      title,
      creator,
      year,
      category,
      from,
      to,
      ...(videoId ? { videoId } : { sourceUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery || `${title} ${creator}`)}` }),
      desc,
      meaning,
    })),
  ),
);

export const WORK_CATEGORIES = [
  "All",
  "Classical",
  "Folk",
  "Funk",
  "Hip-hop",
  "Jazz",
  "Meta Music",
  "Opera",
  "Rock",
  "Techno",
  "Trance",
];

export const GLOSSARY = [
  ["A cappella", "Singing with voices alone, without instruments playing along. A group can sing harmony a cappella by having different singers hold different notes at the same time.", "Voice"],
  ["Accelerando", "A direction to gradually speed up. The beats get closer together little by little, rather than jumping suddenly to a faster speed.", "Tempo"],
  ["Allegro", "A lively, fast tempo. It describes how quickly the beat moves, not how loud the musicians should play.", "Tempo"],
  ["Andante", "A moderate, walking pace. The music should feel steady and unhurried, like a comfortable walk.", "Tempo"],
  ["Moderato", "A moderate tempo: neither especially slow nor especially fast. The exact speed depends on the piece and the musicians.", "Tempo"],
  ["Presto", "A very fast tempo. The beat moves quickly, so musicians need to keep their notes clear and together.", "Tempo"],
  ["Rallentando", "A direction to gradually slow down. The beats spread farther apart over a short passage, often bringing a phrase to a calm ending.", "Tempo"],
  ["Crescendo", "A gradual increase in loudness. Musicians begin softly and grow stronger over several notes or measures; the tempo does not have to change.", "Dynamics"],
  ["Diminuendo", "A gradual decrease in loudness, also called decrescendo. The music gently fades over a passage instead of stopping suddenly.", "Dynamics"],
  ["Forte", "A marking that means to play or sing loudly. It changes the volume, not the pitch or speed of the notes.", "Dynamics"],
  ["Piano", "In music notation, piano means to play or sing softly. It is a dynamic marking, not an instruction to use the piano instrument.", "Dynamics"],
  ["Mezzo", "An Italian word meaning 'moderately' or 'medium'. For example, mezzo-forte means moderately loud: stronger than soft piano, but not as loud as forte.", "Dynamics"],
  ["Accents", "Marks that tell musicians to give particular notes extra emphasis. An accented note may sound louder or sharper than the notes around it.", "Rhythm"],
  ["Beat", "The steady pulse you can tap or clap along with in music. A song's beat might feel slow and relaxed or quick and energetic.", "Rhythm"],
  ["Bar / Measure", "A small group of beats in written music. Bar lines separate the groups so musicians can follow where they are in the piece.", "Rhythm"],
  ["Time signature", "The pair of numbers written at the start of a score. The top number tells how many beats are in each bar; the bottom number tells which note value counts as one beat.", "Rhythm"],
  ["Polyrhythm", "Two different rhythm patterns happening at the same time. For example, one drummer might group beats in threes while another keeps a pattern in twos.", "Rhythm"],
  ["Metronome", "A device that makes evenly spaced clicks to help musicians keep a steady tempo. Its speed is often set in beats per minute, or BPM.", "Rhythm"],
  ["Pitch", "How high or low a musical note sounds. A piano key on the left has a lower pitch than a key far to its right.", "Pitch & Harmony"],
  ["Interval", "The distance in pitch between two notes. Playing two nearby keys makes a small interval; notes farther apart make a larger one.", "Pitch & Harmony"],
  ["Octave", "The distance between one note and the next note with the same name above or below it. Those notes sound related, even though one is higher.", "Pitch & Harmony"],
  ["Chord", "Three or more different notes played together. A guitarist strumming several strings at once is playing a chord.", "Pitch & Harmony"],
  ["Triad", "A three-note chord built from a starting note, a third above it, and a fifth above it. Triads are a basic building block of many songs.", "Pitch & Harmony"],
  ["Arpeggio", "The notes of a chord played one after another instead of all together. The notes may travel upward, downward, or in both directions.", "Pitch & Harmony"],
  ["Harmony", "Two or more different pitches sounding together. A choir creates harmony when its singers perform separate notes that fit together.", "Pitch & Harmony"],
  ["Dissonance", "A combination of notes that sounds tense or unsettled. Composers often use dissonance to build suspense before moving to a more settled sound.", "Pitch & Harmony"],
  ["Major", "A type of scale or key with a particular pattern of intervals. Major music is often described as bright, but its mood can be joyful, serious, or anything the composer creates.", "Pitch & Harmony"],
  ["Minor", "A type of scale or key with a different pattern of intervals from major. Minor music can sound reflective or somber, though the mood depends on the whole performance.", "Pitch & Harmony"],
  ["Unison", "Two or more performers singing or playing the same pitch at the same time. Their sounds may blend, but they are following one shared musical line.", "Pitch & Harmony"],
  ["Legato", "A smooth way of playing or singing where notes connect with little or no gap. A violinist can draw the bow continuously across a legato phrase.", "Articulation"],
  ["Staccato", "A way of playing notes short and separate, with a small gap between them. A staccato passage can sound light, bouncy, or sharply marked.", "Articulation"],
  ["Glissando", "A continuous slide from one pitch to another. On a piano, a player can sweep a finger across nearby keys to create a glissando.", "Articulation"],
  ["Vibrato", "A small, quick wavering around a steady pitch. Singers and string players use vibrato to add warmth and expression to a sustained note.", "Articulation"],
  ["Slur", "A curved line over different notes in written music. It tells the performer to connect those notes smoothly, usually in one bow stroke or one breath.", "Articulation"],
  ["Canon", "A musical form where one part begins a melody and another part repeats it after a delay. The overlapping entries create a layered effect, like a round.", "Form"],
  ["Concerto", "A work that features a solo instrument with an accompanying orchestra. The soloist and orchestra take turns leading and supporting the musical ideas.", "Form"],
  ["Symphony", "A large work written for an orchestra, often divided into several movements. Each movement can have its own tempo and character while belonging to the same piece.", "Form"],
  ["Opera", "A staged story told mainly through singing, with instrumental music, characters, costumes, and scenery. The singers act as well as perform the music.", "Form"],
  ["Sonata form", "A common way to organize a musical movement: introduce the main ideas, develop them, then bring them back. The sections are called exposition, development, and recapitulation.", "Form"],
  ["Ostinato", "A short musical pattern that repeats many times. It can be a rhythm, a bass line, or a melody that continues underneath changing music.", "Form"],
  ["Motif", "A short, recognizable musical idea that a composer repeats or changes. Beethoven's famous four-note opening to Symphony No. 5 is one example.", "Form"],
  ["Libretto", "The words and stage directions for an opera. Singers use the libretto as the text for the story they perform.", "Form"],
  ["Conductor", "The musician who leads an ensemble. A conductor uses gestures to coordinate the beat, show when parts enter, and shape volume and phrasing.", "Performance"],
  ["Choir", "A group of singers performing together, often in sections such as soprano, alto, tenor, and bass. A choir may sing with instruments or a cappella.", "Performance"],
  ["Maestro", "A respectful title for a distinguished musician, especially a conductor or composer. It is a title, not a specific instrument or musical technique.", "Performance"],
  ["Musicology", "The study of music, including its history, styles, instruments, and role in different cultures. Musicologists use listening, research, and written sources to understand how music is made and used.", "Performance"],
].map(([term, def, cat]) => ({ term, def, cat }));
export const GLOSSARY_CATS = ["All", "Tempo", "Dynamics", "Rhythm", "Pitch & Harmony", "Articulation", "Form", "Performance", "Voice"];

export const FAQS = [
  ["What is The Art of Music?", "The Art of Music is a student-made interactive learning site for Art Appreciation, Group 8, covering Music from Module 8."],
  ["What is music, exactly?", "Fundamentally, music is a combination of sounds, and sound is vibration. Ferruccio Busoni called it \"sonorous air.\""],
  ["Which module lessons does the site cover?", "The origin and role of music (8.1), the elements of music (8.3), essentials of songwriting (8.4), music genres (8.5) and classification of instruments (8.6)."],
  ["How do the interactive activities work?", "Open the Interactive section and choose from the quiz, matching game, guess-the-clue game or the Sound Lab. Objective activities show feedback and correct answers."],
  ["Are comments and votes really saved?", "Yes. Guestbook posts, lyric entries, poll votes, feedback and contact messages are stored by the site's backend. Nothing is shown as sent unless it was actually saved."],
  ["Can I use this site on my phone?", "Yes — the layout, menu and activities are designed for phones, tablets and desktops."],
];

export const REFERENCES = [
  "Ramos, A. B. (2018). Art appreciation for the new general education curriculum (1st ed.). SMKC Printshoppe.",
  "Art Appreciation Module 8: Music. (n.d.). Course module provided by the instructor.",
  "Psychology Today. (2016, August). What is music, exactly? The Power of Music. https://www.psychologytoday.com/us/blog/the-power-music/201608/what-is-music-exactly/",
  "Norman's Music. (2014). Musical terms glossary: General. https://www.normans.co.uk/blog/2014/04/musical-terms-glossary-general/",
  "Wikimedia Commons. (2002). Ludwig van Beethoven: Symphony No. 5, I. Allegro con brio [Audio recording by Fulda Symphonic Orchestra, conducted by Simon Schindler]. Public domain. https://commons.wikimedia.org/wiki/File:Ludwig_van_Beethoven_-_Symphonie_5_c-moll_-_1._Allegro_con_brio.ogg",
  "Harrison, J. (Violinist), Turizziani, R. (Conductor), & Wichita State University Chamber Players. (2000). Vivaldi: The Four Seasons, Spring, I. Allegro [Audio recording]. CC BY-SA 4.0. https://commons.wikimedia.org/wiki/File:Vivaldi_-_Four_Seasons_1_Spring_mvt_1_Allegro_-_John_Harrison_violin.oga",
  "Pachelbel Canon in D major violin eXquisite version [Audio recording]. (2017). Internet Archive. Public Domain Mark 1.0. https://archive.org/details/PachelbelCanonInDMajorViolineXquisiteVersion",
];
export const IMAGE_CREDITS = [
  "All visuals on this site (logo, vinyl record, cover art, waveforms) are original CSS/SVG creations by The Art of Music team.",
  "Artwork 'covers' in the Showcase are original abstract designs; they are not the official album art of the works named.",
  "The Beethoven and Pachelbel gallery recordings are public domain; the Vivaldi recording is CC BY-SA 4.0. Performer, source, and license details are shown with each player.",
  "Copyrighted or separately arranged selections use YouTube recordings; their performer and channel are identified with the embed, and rights remain with their owners.",
  "Glossary photos are downloaded from Pexels and used under the Pexels License. Each photo is uniquely matched to one term and links to its Pexels source page.",
  "The Sound Lab synthesizer is original work that produces tones in your browser.",
  "Quotation: Busoni, F., as cited in the Art Appreciation Module 8 introduction.",
];

export const TEAM = [
  { name: "Member name to be added", role: "Researcher · Module content" },
  { name: "Member name to be added", role: "Writer · Articles & reflection" },
  { name: "Member name to be added", role: "Designer · Visual identity" },
  { name: "Member name to be added", role: "Developer · Interactive zone" },
  { name: "Member name to be added", role: "Curator · Gallery & credits" },
];