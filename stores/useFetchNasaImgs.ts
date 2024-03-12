interface ThumbnailInfo {
    thumbnail: string;
    nasa_id: string;
    title: string;
    date_created: string;
    description: string;
    keywords: string;
  }
  
  export const useFetchedImgsStore = defineStore("fetchedImages", {

    state: () => ({
        nasaExampleImgs: [
        {
            "thumbnail": "https://images-assets.nasa.gov/image/PIA13112/PIA13112~thumb.jpg",
            "nasa_id": "PIA13112",
            "title": "Heart and Soul",
            "date_created": "2010-05-24T17:20:01Z",
            "description": "NASA Wide-field Infrared Survey Explorer has captured a huge mosaic of two bubbling clouds in space, known as the Heart and Soul nebulae.",
            "keywords": [
                "Wide-field Infrared Survey Explorer WISE"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/PIA13240/PIA13240~thumb.jpg",
            "nasa_id": "PIA13240",
            "title": "Dragon Lair",
            "date_created": "2010-07-07T17:30:01Z",
            "description": "This visible-light view from from NASA Spitzer Space Telescope highlights the bright M17 nebula, as well as the glowing hot gas filling the bubble to its left. ",
            "keywords": [
                "Spitzer Space Telescope"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000383/GSFC_20171208_Archive_e000383~thumb.jpg",
            "nasa_id": "GSFC_20171208_Archive_e000383",
            "title": "Hubble Sees a Star ‘Inflating’ a Giant Bubble",
            "date_created": "2017-12-08T00:00:00Z",
            "description": "For the 26th birthday of NASA’s Hubble Space Telescope, astronomers are highlighting a Hubble image of an enormous bubble being blown into space by a super-hot, massive star. The Hubble image of the Bubble Nebula, or NGC 7635, was chosen to mark the 26th anniversary of the launch of Hubble into Earth orbit by the STS-31 space shuttle crew on April 24, 1990  “As Hubble makes its 26th revolution around our home star, the sun, we celebrate the event with a spectacular image of a dynamic and exciting interaction of a young star with its environment. The view of the Bubble Nebula, crafted from WFC-3 images, reminds us that Hubble gives us a front row seat to the awe inspiring universe we live in,” said John Grunsfeld, Hubble astronaut and associate administrator of NASA’s Science Mission Directorate at NASA Headquarters, in Washington, D.C.    The Bubble Nebula is seven light-years across—about one-and-a-half times the distance from our sun to its nearest stellar neighbor, Alpha Centauri, and resides 7,100 light-years from Earth in the constellation Cassiopeia.  The seething star forming this nebula is 45 times more massive than our sun. Gas on the star gets so hot that it escapes away into space as a “stellar wind” moving at over four million miles per hour. This outflow sweeps up the cold, interstellar gas in front of it, forming the outer edge of the bubble much like a snowplow piles up snow in front of it as it moves forward.  As the surface of the bubble's shell expands outward, it slams into dense regions of cold gas on one side of the bubble. This asymmetry makes the star appear dramatically off-center from the bubble, with its location in the 10 o’clock position in the Hubble view.  Dense pillars of cool hydrogen gas laced with dust appear at the upper left of the picture, and more “fingers” can be seen nearly face-on, behind the translucent bubble.  The gases heated to varying temperatures emit different colors: oxygen is hot enough to emit blue light in the bubble near the star, while the cooler pillars are yellow from the combined light of hydrogen and nitrogen. The pillars are similar to the iconic columns in the “Pillars of Creation” Eagle Nebula. As seen with the structures in the Eagle Nebula, the Bubble Nebula pillars are being illuminated by the strong ultraviolet radiation from the brilliant star inside the bubble.  The Bubble Nebula was discovered in 1787 by William Herschel, a prominent British astronomer. It is being formed by a proto-typical Wolf-Rayet star, BD +60º2522, an extremely bright, massive, and short-lived star that has lost most of its outer hydrogen and is now fusing helium into heavier elements. The star is about four million years old, and in 10 million to 20 million years, it will likely detonate as a supernova.  Hubble’s Wide Field Camera-3 imaged the nebula in visible light with unprecedented clarity in February 2016. The colors correspond to blue for oxygen, green for hydrogen, and red for nitrogen. This information will help astronomers understand the geometry and dynamics of this complex system.  The Bubble Nebula is one of only a handful of astronomical objects that have been observed with several different instruments onboard Hubble. Hubble also imaged it with the Wide Field Planetary Camera (WFPC) in September 1992, and with Wide Field Planetary Camera-2 (WFPC2) in April 1999.  The Hubble Space Telescope is a project of international cooperation between NASA and the European Space Agency. NASA's Goddard Space Flight Center in Greenbelt, Maryland, manages the telescope. The Space Telescope Science Institute (STScI) in Baltimore, Maryland, conducts Hubble science operations. STScI is operated for NASA by the Association of Universities for Research in Astronomy in Washington, D.C.  Credit: NASA, ESA, and the Hubble Heritage Team (STScI/AURA)",
            "keywords": [
                "Hubble Sees a Star ‘Inflating’ a Giant Bubble",
                "star",
                "space",
                "nasa",
                "hubble",
                "nasagoddard"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000382/GSFC_20171208_Archive_e000382~thumb.jpg",
            "nasa_id": "GSFC_20171208_Archive_e000382",
            "title": "Hubble Sees a Star ‘Inflating’ a Giant Bubble",
            "date_created": "2017-12-08T00:00:00Z",
            "description": "For the 26th birthday of NASA’s Hubble Space Telescope, astronomers are highlighting a Hubble image of an enormous bubble being blown into space by a super-hot, massive star. The Hubble image of the Bubble Nebula, or NGC 7635, was chosen to mark the 26th anniversary of the launch of Hubble into Earth orbit by the STS-31 space shuttle crew on April 24, 1990  “As Hubble makes its 26th revolution around our home star, the sun, we celebrate the event with a spectacular image of a dynamic and exciting interaction of a young star with its environment. The view of the Bubble Nebula, crafted from WFC-3 images, reminds us that Hubble gives us a front row seat to the awe inspiring universe we live in,” said John Grunsfeld, Hubble astronaut and associate administrator of NASA’s Science Mission Directorate at NASA Headquarters, in Washington, D.C.    The Bubble Nebula is seven light-years across—about one-and-a-half times the distance from our sun to its nearest stellar neighbor, Alpha Centauri, and resides 7,100 light-years from Earth in the constellation Cassiopeia.  The seething star forming this nebula is 45 times more massive than our sun. Gas on the star gets so hot that it escapes away into space as a “stellar wind” moving at over four million miles per hour. This outflow sweeps up the cold, interstellar gas in front of it, forming the outer edge of the bubble much like a snowplow piles up snow in front of it as it moves forward.  As the surface of the bubble's shell expands outward, it slams into dense regions of cold gas on one side of the bubble. This asymmetry makes the star appear dramatically off-center from the bubble, with its location in the 10 o’clock position in the Hubble view.  Dense pillars of cool hydrogen gas laced with dust appear at the upper left of the picture, and more “fingers” can be seen nearly face-on, behind the translucent bubble.  The gases heated to varying temperatures emit different colors: oxygen is hot enough to emit blue light in the bubble near the star, while the cooler pillars are yellow from the combined light of hydrogen and nitrogen. The pillars are similar to the iconic columns in the “Pillars of Creation” Eagle Nebula. As seen with the structures in the Eagle Nebula, the Bubble Nebula pillars are being illuminated by the strong ultraviolet radiation from the brilliant star inside the bubble.  The Bubble Nebula was discovered in 1787 by William Herschel, a prominent British astronomer. It is being formed by a proto-typical Wolf-Rayet star, BD +60º2522, an extremely bright, massive, and short-lived star that has lost most of its outer hydrogen and is now fusing helium into heavier elements. The star is about four million years old, and in 10 million to 20 million years, it will likely detonate as a supernova.  Hubble’s Wide Field Camera-3 imaged the nebula in visible light with unprecedented clarity in February 2016. The colors correspond to blue for oxygen, green for hydrogen, and red for nitrogen. This information will help astronomers understand the geometry and dynamics of this complex system.  The Bubble Nebula is one of only a handful of astronomical objects that have been observed with several different instruments onboard Hubble. Hubble also imaged it with the Wide Field Planetary Camera (WFPC) in September 1992, and with Wide Field Planetary Camera-2 (WFPC2) in April 1999.  The Hubble Space Telescope is a project of international cooperation between NASA and the European Space Agency. NASA's Goddard Space Flight Center in Greenbelt, Maryland, manages the telescope. The Space Telescope Science Institute (STScI) in Baltimore, Maryland, conducts Hubble science operations. STScI is operated for NASA by the Association of Universities for Research in Astronomy in Washington, D.C.  Credit: NASA, ESA, and the Hubble Heritage Team (STScI/AURA)",
            "keywords": [
                "Hubble Sees a Star ‘Inflating’ a Giant Bubble",
                "star",
                "space",
                "nasa",
                "hubble",
                "nasagoddard"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002039/GSFC_20171208_Archive_e002039~thumb.jpg",
            "nasa_id": "GSFC_20171208_Archive_e002039",
            "title": "Hubble Captures Bubbles And Baby Stars",
            "date_created": "2017-12-08T00:00:00Z",
            "description": "Image release June 22, 2010  A spectacular new NASA/ESA Hubble Space Telescope image — one of the largest ever released of a star-forming region — highlights N11, part of a complex network of gas clouds and star clusters within our neighbouring galaxy, the Large Magellanic Cloud. This region of energetic star formation is one of the most active in the nearby Universe.  The Large Magellanic Cloud contains many bright bubbles of glowing gas. One of the largest and most spectacular has the name LHA 120-N 11, from its listing in a catalogue compiled by the American astronomer and astronaut Karl Henize in 1956, and is informally known as N11. Close up, the billowing pink clouds of glowing gas make N11 resemble a puffy swirl of fairground candy floss. From further away, its distinctive overall shape led some observers to nickname it the Bean Nebula. The dramatic and colourful features visible in the nebula are the telltale signs of star formation. N11 is a well-studied region that extends over 1000 light-years. It is the second largest star-forming region within the Large Magellanic Cloud and has produced some of the most massive stars known.    It is the process of star formation that gives N11 its distinctive look. Three successive generations of stars, each of which formed further away from the centre of the nebula than the last, have created shells of gas and dust. These shells were blown away from the newborn stars in the turmoil of their energetic birth and early life, creating the ring shapes so prominent in this image.  Beans are not the only terrestrial shapes to be found in this spectacular high resolution image from the NASA/ESA Hubble Space Telescope. In the upper left is the red bloom of nebula LHA 120-N 11A. Its rose-like petals of gas and dust are illuminated from within, thanks to the radiation from the massive hot stars at its centre. N11A is relatively compact and dense and is the site of the most recent burst of star development in the region.  Other star clusters abound in N11, including NGC 1761 at the bottom of the image, which is a group of massive hot young stars busily pouring intense ultraviolet radiation out into space. Although it is much smaller than our own galaxy, the Large Magellanic Cloud is a very vigorous region of star formation. Studying these stellar nurseries helps astronomers understand a lot more about how stars are born and their ultimate development and lifespan.  Both the Large Magellanic Cloud and its small companion, the Small Magellanic Cloud, are easily seen with the unaided eye and have always been familiar to people living in the southern hemisphere. The credit for bringing these galaxies to the attention of Europeans is usually given to Portuguese explorer Fernando de Magellan and his crew, who viewed it on their 1519 sea voyage. However, the Persian astronomer Abd Al-Rahman Al Sufi and the Italian explorer Amerigo Vespucci recorded the Large Magellanic Cloud in 964 and 1503 respectively.  Credit: NASA, ESA and Jesús Maíz Apellániz (Instituto de Astrofísica de Andalucía, Spain)  To learn more about Hubble go to: <a href=\"http://www.nasa.gov/mission_pages/hubble/main/index.html\" rel=\"nofollow\">www.nasa.gov/mission_pages/hubble/main/index.html</a>  <b><a href=\"http://www.nasa.gov/centers/goddard/home/index.html\" rel=\"nofollow\">NASA Goddard Space Flight Center</a></b>  is home to the nation's largest organization of combined scientists, engineers and technologists that build spacecraft, instruments and new technology to study the Earth, the sun, our solar system, and the universe.",
            "keywords": [
                "Hubble Captures Bubbles And Baby Stars",
                "star",
                "satellite",
                "nasa",
                "nebula",
                "hubble",
                "lightyears",
                "hubblespacetelescope",
                "n11",
                "goddardspaceflightcenter",
                "starformation"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/hubble-finds-a-little-gem_20185002499_o/hubble-finds-a-little-gem_20185002499_o~thumb.jpg",
            "nasa_id": "hubble-finds-a-little-gem_20185002499_o",
            "title": "Little gem",
            "date_created": "2015-08-03T00:00:00Z",
            "description": "This colourful bubble is a planetary nebula called NGC 6818, also known as the Little Gem Nebula. It is located in the constellation of Sagittarius (The Archer), roughly 6000 light-years away from us. The rich glow of the cloud is just over half a light-year across — humongous compared to its tiny central star — but still a little gem on a cosmic scale. When stars like the Sun enter retirement, they shed their outer layers into space to create glowing clouds of gas called planetary nebulae. This ejection of mass is uneven, and planetary nebulae can have very complex shapes. NGC 6818 shows knotty filament-like structures and distinct layers of material, with a bright and enclosed central bubble surrounded by a larger, more diffuse cloud. Scientists believe that the stellar wind from the central star propels the outflowing material, sculpting the elongated shape of NGC 6818. As this fast wind smashes through the slower-moving cloud it creates particularly bright blowouts at the bubble’s outer layers. Hubble previously imaged this nebula back in 1997 with its Wide Field Planetary Camera 2, using a mix of filters that highlighted emission from ionised oxygen and hydrogen (opo9811h). This image, while from the same camera, uses different filters to reveal a different view of the nebula. A version of the image was submitted to the Hubble’s Hidden Treasures image processing competition by contestant Judy Schmidt.",
            "keywords": [
                "Little Gem Nebula",
                "NGC 6818"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000409/GSFC_20171208_Archive_e000409~thumb.jpg",
            "nasa_id": "GSFC_20171208_Archive_e000409",
            "title": "Hubble's Blue Bubble",
            "date_created": "2017-12-08T00:00:00Z",
            "description": " A large blue bubble with a bright star in the center on a black background filled with stars  Sparkling at the center of this beautiful NASA/ESA Hubble Space Telescope image is a Wolf–Rayet star known as WR 31a, located about 30,000 light-years away in the constellation of Carina (The Keel).  The distinctive blue bubble appearing to encircle WR 31a is a Wolf–Rayet nebula — an interstellar cloud of dust, hydrogen, helium and other gases. Created when speedy stellar winds interact with the outer layers of hydrogen ejected by Wolf–Rayet stars, these nebulae are frequently ring-shaped or spherical. The bubble — estimated to have formed around 20,000 years ago — is expanding at a rate of around 220,000 kilometers (136,700 miles) per hour!  Unfortunately, the lifecycle of a Wolf–Rayet star is only a few hundred thousand years — the blink of an eye in cosmic terms. Despite beginning life with a mass at least 20 times that of the sun, Wolf–Rayet stars typically lose half their mass in less than 100,000 years. And WR 31a is no exception to this case. It will, therefore, eventually end its life as a spectacular supernova, and the stellar material expelled from its explosion will later nourish a new generation of stars and planets.  Image credi: ESA/Hubble &amp; NASA, Acknowledgement: Judy Schmidt",
            "keywords": [
                "Hubble's Blue Bubble",
                "wr31a"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/PIA22568/PIA22568~thumb.jpg",
            "nasa_id": "PIA22568",
            "title": "Cat's Paw Image 1",
            "date_created": "2018-10-23T00:00:00Z",
            "description": "The Cat's Paw Nebula, imaged here by NASA's Spitzer Space Telescope, lies inside the Milky Way Galaxy and is located in the constellation Scorpius. Its distance from Earth is estimated to be between 1.3 kiloparsecs (about 4,200 light years) to 1.7 kiloparsecs (about 5,500 light years).  The bright, cloudlike band running left to right across the image shows the presence of gas and dust that can collapse to form new stars. The black filaments running through the nebula are particularly dense regions of gas and dust. The entire star-forming region is thought to be between 24 and 27 parsecs (80-90 light years) across. The stars that form inside the nebula heat up the pressurized gas surrounding them, such that the gas may expand and form \"bubbles\", which appear red in this image. Asymmetric bubbles may \"burst,\" creating U-shaped features.  The green areas show regions where radiation from hot stars collided with large molecules and small dust grains called \"polycyclic aromatic hydocarbons\" (PAHs), causing them to fluoresce.  This image was compiled using data from two Spitzer instruments, the Infrared Array Camera (IRAC) and the Multiband Imaging Photometer (MIPS). The colors correspond with wavelengths of 3.6 microns (blue), 4.5 microns (cyan), 8 microns (green) and 24 microns (red).  https://photojournal.jpl.nasa.gov/catalog/PIA22568",
            "keywords": [
                "Spitzer Space Telescope"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/0302063/0302063~thumb.jpg",
            "nasa_id": "0302063",
            "title": "History of Hubble Space Telescope (HST)",
            "date_created": "1999-05-29T00:00:00Z",
            "description": "In this sturning image provided by the Hubble Space Telescope (HST), the Omega Nebula (M17) resembles the fury of a raging sea, showing a bubbly ocean of glowing hydrogen gas and small amounts of other elements such as oxygen and sulfur. The nebula, also known as the Swan Nebula, is a hotbed of newly born stars residing 5,500 light-years away in the constellation Sagittarius. The wavelike patterns of gas have been sculpted and illuminated by a torrent of ultraviolet radiation from the young massive stars, which lie outside the picture to the upper left. The ultraviolet radiation is carving and heating the surfaces of cold hydrogen gas clouds. The warmed surfaces glow orange and red in this photograph. The green represents an even hotter gas that masks background structures. Various gases represented with color are: sulfur, represented in red; hydrogen, green; and oxygen blue.",
            "keywords": [
                "Hubble Space Telescope",
                "HST",
                "Omega",
                "Nebula",
                "M17",
                "Swan Nebula"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000657/GSFC_20171208_Archive_e000657~thumb.jpg",
            "nasa_id": "GSFC_20171208_Archive_e000657",
            "title": "Hubble Finds a Little Gem",
            "date_created": "2015-08-07T13:31:43Z",
            "description": "This colorful bubble is a planetary nebula called NGC 6818, also known as the Little Gem Nebula. It is located in the constellation of Sagittarius (The Archer), roughly 6,000 light-years away from us. The rich glow of the cloud is just over half a light-year across — humongous compared to its tiny central star — but still a little gem on a cosmic scale.  When stars like the sun enter &quot;retirement,&quot; they shed their outer layers into space to create glowing clouds of gas called planetary nebulae. This ejection of mass is uneven, and planetary nebulae can have very complex shapes. NGC 6818 shows knotty filament-like structures and distinct layers of material, with a bright and enclosed central bubble surrounded by a larger, more diffuse cloud.  Scientists believe that the stellar wind from the central star propels the outflowing material, sculpting the elongated shape of NGC 6818. As this fast wind smashes through the slower-moving cloud it creates particularly bright blowouts at the bubble’s outer layers.  Hubble previously imaged this nebula back in 1997 with its Wide Field Planetary Camera 2, using a mix of filters that highlighted emission from ionized oxygen and hydrogen. This image, while from the same camera, uses different filters to reveal a different view of the nebula.    Image credit: ESA/Hubble &amp; NASA, Acknowledgement: Judy Schmidt  <b><a href=\"http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html\" rel=\"nofollow\">NASA image use policy.</a></b>  <b><a href=\"http://www.nasa.gov/centers/goddard/home/index.html\" rel=\"nofollow\">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href=\"http://twitter.com/NASAGoddardPix\" rel=\"nofollow\">Twitter</a></b>  <b>Like us on <a href=\"http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd\" rel=\"nofollow\">Facebook</a></b>  <b>Find us on <a href=\"http://instagrid.me/nasagoddard/?vm=grid\" rel=\"nofollow\">Instagram</a></b>",
            "keywords": [
                "Hubble Finds a Little Gem"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/hubbles-blue-bubble_24908262259_o/hubbles-blue-bubble_24908262259_o~thumb.jpg",
            "nasa_id": "hubbles-blue-bubble_24908262259_o",
            "title": "Blue bubble in Carina",
            "date_created": "2016-02-22T00:00:00Z",
            "description": "Sparkling at the centre of this beautiful NASA/ESA Hubble Space Telescope image is a Wolf–Rayet star known as WR 31a, located about 30 000 light-years away in the constellation of Carina (The Keel). The distinctive blue bubble appearing to encircle WR 31a, and its uncatalogued stellar sidekick, is a Wolf–Rayet nebula — an interstellar cloud of dust, hydrogen, helium and other gases. Created when speedy stellar winds interact with the outer layers of hydrogen ejected by Wolf–Rayet stars, these nebulae are frequently ring-shaped or spherical. The bubble — estimated to have formed around 20 000 years ago — is expanding at a rate of around 220 000 kilometres per hour! Unfortunately, the lifecycle of a Wolf–Rayet star is only a few hundred thousand years — the blink of an eye in cosmic terms. Despite beginning life with a mass at least 20 times that of the Sun, Wolf–Rayet stars typically lose half their mass in less than 100 000 years. And WR 31a is no exception to this case. It will, therefore, eventually end its life as a spectacular supernova, and the stellar material expelled from its explosion will later nourish a new generation of stars and planets.",
            "keywords": [
                "WR 31a"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/carina_nebula/carina_nebula~thumb.jpg",
            "nasa_id": "carina_nebula",
            "title": "James Webb Space Telescope NIRCam Image of the “Cosmic Cliffs” in Carina Nebula",
            "date_created": "2022-07-12T11:00:00Z",
            "description": "What looks much like craggy mountains on a moonlit evening is actually the edge of a nearby, young, star-forming region NGC 3324 in the Carina Nebula. Captured in infrared light by the Near-Infrared Camera (NIRCam) on NASA’s James Webb Space Telescope, this image reveals previously obscured areas of star birth.  Called the Cosmic Cliffs, the region is actually the edge of a gigantic, gaseous cavity within NGC 3324, roughly 7,600 light-years away. The cavernous area has been carved from the nebula by the intense ultraviolet radiation and stellar winds from extremely massive, hot, young stars located in the center of the bubble, above the area shown in this image. The high-energy radiation from these stars is sculpting the nebula’s wall by slowly eroding it away.    NIRCam – with its crisp resolution and unparalleled sensitivity – unveils hundreds of previously hidden stars, and even numerous background galaxies. Several prominent features in this image are described below.  • The “steam” that appears to rise from the celestial “mountains” is actually hot, ionized gas and hot dust streaming away from the nebula due to intense, ultraviolet radiation.   • Dramatic pillars rise above the glowing wall of gas, resisting the blistering ultraviolet radiation from the young stars.  • Bubbles and cavities are being blown by the intense radiation and stellar winds of newborn stars.  • Protostellar jets and outflows, which appear in gold, shoot from dust-enshrouded, nascent stars.  • A “blow-out” erupts at the top-center of the ridge, spewing gas and dust into the interstellar medium.   • An unusual “arch” appears, looking like a bent-over cylinder.  This period of very early star formation is difficult to capture because, for an individual star, it lasts only about 50,000 to 100,000 years – but Webb’s extreme sensitivity and exquisite spatial resolution have chronicled this rare event.  Located roughly 7,600 light-years away, NGC 3324 was first catalogued by James Dunlop in 1826. Visible from the Southern Hemisphere, it is located at the northwest corner of the Carina Nebula (NGC 3372), which resides in the constellation Carina. The Carina Nebula is home to the Keyhole Nebula and the active, unstable supergiant star called Eta Carinae.   NIRCam was built by a team at the University of Arizona and Lockheed Martin’s Advanced Technology Center.",
            "keywords": [
                "NGC 3324",
                "Carina Nebula"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/PIA18164/PIA18164~thumb.jpg",
            "nasa_id": "PIA18164",
            "title": "Iridescent Glory of Nearby Helix Nebula",
            "date_created": "2014-04-04T00:00:00Z",
            "description": "This composite picture is a seamless blend of ultra-sharp NASA Hubble Space Telescope (HST) images combined with the wide view of the Mosaic Camera on the National Science Foundation's 0.9-meter telescope at Kitt Peak National Observatory, part of the National Optical Astronomy Observatory, near Tucson, Ariz. Astronomers at the Space Telescope Science Institute assembled these images into a mosaic. The mosaic was then blended with a wider photograph taken by the Mosaic Camera. The image shows a fine web of filamentary \"bicycle-spoke\" features embedded in the colorful red and blue gas ring, which is one of the nearest planetary nebulae to Earth.      Because the nebula is nearby, it appears as nearly one-half the diameter of the full Moon. This required HST astronomers to take several exposures with the Advanced Camera for Surveys to capture most of the Helix. HST views were then blended with a wider photo taken by the Mosaic Camera. The portrait offers a dizzying look down what is actually a trillion-mile-long tunnel of glowing gases. The fluorescing tube is pointed nearly directly at Earth, so it looks more like a bubble than a cylinder. A forest of thousands of comet-like filaments, embedded along the inner rim of the nebula, points back toward the central star, which is a small, super-hot white dwarf.      The tentacles formed when a hot \"stellar wind\" of gas plowed into colder shells of dust and gas ejected previously by the doomed star. Ground-based telescopes have seen these comet-like filaments for decades, but never before in such detail. The filaments may actually lie in a disk encircling the hot star, like a collar. The radiant tie-die colors correspond to glowing oxygen (blue) and hydrogen and nitrogen (red).      Valuable Hubble observing time became available during the November 2002 Leonid meteor storm. To protect the spacecraft, including HST's precise mirror, controllers turned the aft end into the direction of the meteor stream for about half a day. Fortunately, the Helix Nebula was almost exactly in the opposite direction of the meteor stream, so Hubble used nine orbits to photograph the nebula while it waited out the storm. To capture the sprawling nebula, Hubble had to take nine separate snapshots.      Planetary nebulae like the Helix are sculpted late in a Sun-like star's life by a torrential gush of gases escaping from the dying star. They have nothing to do with planet formation, but got their name because they look like planetary disks when viewed through a small telescope. With higher magnification, the classic \"donut-hole\" in the middle of a planetary nebula can be resolved. Based on the nebula's distance of 650 light-years, its angular size corresponds to a huge ring with a diameter of nearly 3 light-years. That's approximately three-quarters of the distance between our Sun and the nearest star.      The Helix Nebula is a popular target of amateur astronomers and can be seen with binoculars as a ghostly, greenish cloud in the constellation Aquarius. Larger amateur telescopes can resolve the ring-shaped nebula, but only the largest ground-based telescopes can resolve the radial streaks. After careful analysis, astronomers concluded the nebula really isn't a bubble, but is a cylinder that happens to be pointed toward Earth.   http://photojournal.jpl.nasa.gov/catalog/PIA18164",
            "keywords": [
                "Helix Hebula",
                "Hubble Space Telescope"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/PIA23402/PIA23402~thumb.jpg",
            "nasa_id": "PIA23402",
            "title": "Spitzer Spots Bubbles and Bow Shocks",
            "date_created": "2019-09-30T00:00:00Z",
            "description": "This infrared image from NASA's Spitzer Space Telescope shows a cloud of gas and dust full of bubbles, which are inflated by wind and radiation from massive young stars. Each bubble is filled with hundreds to thousands of stars, which form from dense clouds of gas and dust.  The bubbles are estimated to be 10 to 30 light-years across, based on what astronomers know about them and other cosmic bubbles. However, determining the exact sizes of individual bubbles can be difficult, because their distance from Earth is challenging to measure and objects appear smaller the farther away they are.  Flows of particles called stellar winds emitted by the stars, as well as the pressure of the light those winds produce, can push the surrounding material outward, sometimes creating a distinct perimeter.  In Figure 1, the yellow circles and ovals outline more than 30 bubbles.  This active region of star formation is located inside the Milky Way galaxy, in the constellation Aquila (also known as the Eagle). Black veins running throughout the cloud are regions of especially dense cold dust and gas where even more new stars are likely to form.  The colors in this image represent different wavelengths of infrared light. Blue represents a wavelength of light primarily emitted by stars; dust and organic molecules called hydrocarbons appear green, and warm dust that's been heated by stars appears red.  Also visible are four bow shocks — red arcs of warm dust formed as winds from fast-moving stars push aside dust grains scattered sparsely through most of the nebula. The locations of the bow shocks are indicated by squares in Figure 1. Figure 2 shows zoomed-in views of the four bow shocks.  The bubbles and bow shocks in this image were identified as part of The Milky Way Project, a citizen science initiative on Zooniverse.org that seeks to map star formation throughout the galaxy. Participating citizen scientists looked through images from Spitzer's public data archive and identified as many bubbles as they could. More than 78,000 unique user accounts contributed. Astronomers running this program recently published a catalog of the bubble candidates that multiple citizen scientists had identified. The full Milky Way Project catalogs, which list a total of 2,600 bubbles and 599 bow shocks, are described in a paper published recently in Monthly Notices of the Royal Astronomical Society.  Animation available at https://photojournal.jpl.nasa.gov/catalog/PIA23402",
            "keywords": [
                "Spitzer Space Telescope"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002086/GSFC_20171208_Archive_e002086~thumb.jpg",
            "nasa_id": "GSFC_20171208_Archive_e002086",
            "title": "Dying Star Shrouded by a Blanket of Hailstones Forms the Bug Nebula",
            "date_created": "2017-12-08T00:00:00Z",
            "description": "Release Date: May 3, 2004  A Dying Star Shrouded by a Blanket of Hailstones Forms the Bug Nebula (NGC 6302)  The Bug Nebula, NGC 6302, is one of the brightest and most extreme planetary nebulae known. The fiery, dying star at its center is shrouded by a blanket of icy hailstones. This NASA Hubble Wide Field Plantery Camera 2 image shows impressive walls of compressed gas, laced with trailing strands and bubbling outflows. Object Names: NGC 6302, Bug Nebula Image Type: Astronomical  Credit: NASA, ESA and A.Zijlstra (UMIST, Manchester, UK)  To learn more about this image go to:  <a href=\"http://hubblesite.org/gallery/album/nebula/pr2004046a/\" rel=\"nofollow\">hubblesite.org/gallery/album/nebula/pr2004046a/</a>   <b><a href=\"http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html\" rel=\"nofollow\">NASA image use policy.</a></b>  <b><a href=\"http://www.nasa.gov/centers/goddard/home/index.html\" rel=\"nofollow\">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href=\"http://twitter.com/NASAGoddardPix\" rel=\"nofollow\">Twitter</a></b>  <b>Like us on <a href=\"http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd\" rel=\"nofollow\">Facebook</a></b>  <b>Find us on <a href=\"http://instagram.com/nasagoddard?vm=grid\" rel=\"nofollow\">Instagram</a></b>",
            "keywords": [
                "Dying Star Shrouded by a Blanket of Hailstones Forms the Bug Nebula",
                "star",
                "space",
                "nasa",
                "galaxy",
                "nebula",
                "goddard",
                "gsfc",
                "dyingstar",
                "goddardspaceflightcenter",
                "ngc6302",
                "bugnebula"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/PIA05266/PIA05266~thumb.jpg",
            "nasa_id": "PIA05266",
            "title": "Spitzer Telescope Sends Rose for Valentine Day",
            "date_created": "2004-02-12T19:59:55Z",
            "description": "A cluster of newborn stars herald their birth in this interstellar Valentine Day commemorative picture obtained with NASA Spitzer Space Telescope. These bright young stars are found in a rosebud-shaped and rose-colored nebulosity known as NGC 7129. The star cluster and its associated nebula are located at a distance of 3300 light-years in the constellation Cepheus.  A recent census of the cluster reveals the presence of 130 young stars. The stars formed from a massive cloud of gas and dust that contains enough raw materials to create a thousand Sun-like stars. In a process that astronomers still poorly understand, fragments of this molecular cloud became so cold and dense that they collapsed into stars. Most stars in our Milky Way galaxy are thought to form in such clusters.  The Spitzer Space Telescope image was obtained with an infrared array camera that is sensitive to invisible infrared light at wavelengths that are about ten times longer than visible light. In this four-color composite, emission at 3.6 microns is depicted in blue, 4.5 microns in green, 5.8 microns in orange, and 8.0 microns in red. The image covers a region that is about one quarter the size of the full moon.  As in any nursery, mayhem reigns. Within the astronomically brief period of a million years, the stars have managed to blow a large, irregular bubble in the molecular cloud that once enveloped them like a cocoon. The rosy pink hue is produced by glowing dust grains on the surface of the bubble being heated by the intense light from the embedded young stars. Upon absorbing ultraviolet and visible-light photons produced by the stars, the surrounding dust grains are heated and re-emit the energy at the longer infrared wavelengths observed by Spitzer. The reddish colors trace the distribution of molecular material thought to be rich in hydrocarbons.  The cold molecular cloud outside the bubble is mostly invisible in these images. However, three very young stars near the center of the image are sending jets of supersonic gas into the cloud. The impact of these jets heats molecules of carbon monoxide in the cloud, producing the intricate green nebulosity that forms the stem of the rosebud.  Not all stars are formed in clusters. Away from the main nebula and its young cluster are two smaller nebulae, to the left and bottom of the central 'rosebud,'each containing a stellar nursery with only a few young stars.  Astronomers believe that our own Sun may have formed billions of years ago in a cluster similar to NGC 7129. Once the radiation from new cluster stars destroys the surrounding placental material, the stars begin to slowly drift apart.  http://photojournal.jpl.nasa.gov/catalog/PIA05266",
            "keywords": [
                "Cepheus",
                "Spitzer Space Telescope",
                "NGC 7129"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/PIA22567/PIA22567~thumb.jpg",
            "nasa_id": "PIA22567",
            "title": "Cat's Paw Image 2",
            "date_created": "2018-10-23T00:00:00Z",
            "description": "The Cat's Paw Nebula, imaged here by NASA's Spitzer Space Telescope, is a star-forming region inside the Milky Way Galaxy and is located in the constellation Scorpius. Its distance from Earth is estimated to be between 1.3 kiloparsecs (about 4,200 light years) to 1.7 kiloparsecs (about 5,500 light years).  The image was taken as part of the Galactic Legacy Infrared Midplane Survey Extraordinaire (GLIMPSE), a survey of the Milky Way Galaxy. It was taken using Spitzer's Infrared Array Camera (IRAC). The colors correspond with wavelengths of 3.6 microns (blue), 4.5 microns (green), and 8 microns (red).  The bright, cloudlike band running left to right across the image shows the presence of gas and dust that can collapse to form new stars. The black filaments running through the nebula are particularly dense regions of gas and dust. The entire star-forming region is thought to be between 24 and 27 parsecs (80-90 light years) across. New stars may heat up the pressurized gas surrounding them causing the gas to expand and form \"bubbles.\"  https://photojournal.jpl.nasa.gov/catalog/PIA22567",
            "keywords": [
                "Spitzer Space Telescope"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/PIA23121/PIA23121~thumb.jpg",
            "nasa_id": "PIA23121",
            "title": "Space Butterfly",
            "date_created": "2019-03-27T00:00:00Z",
            "description": "What looks like a red butterfly in space is in reality a nursery for hundreds of baby stars, revealed in this infrared image from NASA's Spitzer Space Telescope. Officially named W40, the butterfly is a nebula - a giant cloud of gas and dust in space where new stars may form. The butterfly's two \"wings\" are giant bubbles of hot, interstellar gas blowing from the hottest, most massive stars in this region.  The material that forms W40's wings was ejected from a dense cluster of stars that lies between the wings in the image. The hottest, most massive of these stars, W40 IRS 1a, lies near the center of the star cluster.  W40 is about 1,400 light-years from the Sun, about the same distance as the well-known Orion nebula, although the two are almost 180 degrees apart in the sky. They are two of the nearest regions in which massive stars - with masses upwards of 10 times that of the Sun - have been observed to be forming.  The W40 star-forming region was observed as part of a Spitzer Legacy Survey, and the resulting mosaic image was published as part of the MYStIX (Massive Young stellar clusters Study in Infrared and X-rays) survey of young stellar objects.  The Spitzer picture is composed of four images taken with the telescope's Infrared Array Camera (IRAC) in different wavelengths of infrared light: 3.6, 4.5, 5.8 and 8.0 µm (shown as blue, green, orange and red). Organic molecules made of carbon and hydrogen, called polycyclic aromatic hydrocarbons (PAHs), are excited by interstellar radiation and become luminescent at wavelengths near 8.0 microns, giving the nebula its reddish features. Stars are brighter at the shorter wavelengths, giving them a blue tint. Some of the youngest stars are surrounded by dusty disks of material, which glow with a yellow or red hue.  https://photojournal.jpl.nasa.gov/catalog/PIA23121",
            "keywords": [
                "Spitzer Space Telescope"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002155/GSFC_20171208_Archive_e002155~thumb.jpg",
            "nasa_id": "GSFC_20171208_Archive_e002155",
            "title": "Cat's Eye Nebula",
            "date_created": "2017-12-08T00:00:00Z",
            "description": "The Cat's Eye Nebula, one of the first planetary nebulae discovered, also has one of the most complex forms known to this kind of nebula. Eleven rings, or shells, of gas make up the Cat's Eye.  The full beauty of the Cat's Eye Nebula is revealed in this detailed view from NASA's Hubble Space Telescope. The image from Hubble's Advanced Camera for Surveys (ACS) shows a bull's eye pattern of eleven or even more concentric rings, or shells, around the Cat's Eye. Each 'ring' is actually the edge of a spherical bubble seen projected onto the sky -- that's why it appears bright along its outer edge.   Observations suggest the star ejected its mass in a series of pulses at 1,500-year intervals. These convulsions created dust shells, each of which contain as much mass as all of the planets in our solar system combined (still only one percent of the Sun's mass). These concentric shells make a layered, onion-skin structure around the dying star. The view from Hubble is like seeing an onion cut in half, where each skin layer is discernible.  The bull's-eye patterns seen around planetary nebulae come as a surprise to astronomers because they had no expectation that episodes of mass loss at the end of stellar lives would repeat every 1,500 years. Several explanations have been proposed, including cycles of magnetic activity somewhat similar to our own Sun's sunspot cycle, the action of companion stars orbiting around the dying star, and stellar pulsations. Another school of thought is that the material is ejected smoothly from the star, and the rings are created later on due to formation of waves in the outflowing material.    Credit: NASA, ESA, HEIC, and The Hubble Heritage Team (STScI/AURA) Acknowledgment: R. Corradi (Isaac Newton Group of Telescopes, Spain) and Z. Tsvetanov (NASA)  The Hubble Space Telescope is a project of international cooperation between NASA and the European Space Agency. NASA's Goddard Space Flight Center manages the telescope. The Space Telescope Science Institute conducts Hubble science operations.  Goddard is responsible for HST project management, including mission and science operations, servicing missions, and all associated development activities.  To learn more about the Hubble Space Telescope go here:  <a href=\"http://www.nasa.gov/mission_pages/hubble/main/index.html\" rel=\"nofollow\">www.nasa.gov/mission_pages/hubble/main/index.html</a>  <b><a href=\"http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html\" rel=\"nofollow\">NASA image use policy.</a></b>  <b><a href=\"http://www.nasa.gov/centers/goddard/home/index.html\" rel=\"nofollow\">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href=\"http://twitter.com/NASAGoddardPix\" rel=\"nofollow\">Twitter</a></b>  <b>Like us on <a href=\"http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd\" rel=\"nofollow\">Facebook</a></b>  <b>Find us on <a href=\"http://instagram.com/nasagoddard?vm=grid\" rel=\"nofollow\">Instagram</a></b>",
            "keywords": [
                "Cat's Eye Nebula",
                "space",
                "nasa",
                "telescope",
                "galaxy",
                "nebula",
                "catseye",
                "goddard",
                "hubble",
                "catseyenebula",
                "hst",
                "hubblespacetelescope",
                "goddardspaceflightcenter"
            ]
        },
        {
            "thumbnail": "https://images-assets.nasa.gov/image/PIA05517/PIA05517~thumb.jpg",
            "nasa_id": "PIA05517",
            "title": "Star Formation in Henize 206",
            "date_created": "2004-03-08T17:14:55Z",
            "description": "This image from NASA Spitzer Space Telescope, shows the wispy filamentary structure of Henize 206, is a four-color composite mosaic created by combining data from an infrared array camera IRAC.  The LMC is a small satellite galaxy gravitationally bound to our own Milky Way. Yet the gravitational effects are tearing the companion to shreds in a long-playing drama of 'intergalactic cannibalism.' These disruptions lead to a recurring cycle of star birth and star death.  Astronomers are particularly interested in the LMC because its fractional content of heavy metals is two to five times lower than is seen in our solar neighborhood. [In this context, 'heavy elements' refer to those elements not present in the primordial universe. Such elements as carbon, oxygen and others are produced by nucleosynthesis and are ejected into the interstellar medium via mass loss by stars, including supernova explosions.] As such, the LMC provides a nearby cosmic laboratory that may resemble the distant universe in its chemical composition.  The primary Spitzer image, showing the wispy filamentary structure of Henize 206, is a four-color composite mosaic created by combining data from an infrared array camera (IRAC) at near-infrared wavelengths and the mid-infrared data from a multiband imaging photometer (MIPS). Blue represents invisible infrared light at wavelengths of 3.6 and 4.5 microns. Note that most of the stars in the field of view radiate primarily at these short infrared wavelengths. Cyan denotes emission at 5.8 microns, green depicts the 8.0 micron light, and red is used to trace the thermal emission from dust at 24 microns. The separate instrument images are included as insets to the main composite.  An inclined ring of emission dominates the central and upper regions of the image. This delineates a bubble of hot, x-ray emitting gas that was blown into space when a massive star died in a supernova explosion millions of years ago. The shock waves from that explosion impacted a cloud of nearby hydrogen gas, compressed it, and started a new generation of star formation. The death of one star led to the birth of many new stars. This is particularly evident in the MIPS inset, where the 24-micron emission peaks correspond to newly formed stars. The ultraviolet and visible-light photons from the new stars are absorbed by surrounding dust and re-radiated at longer infrared wavelengths, where it is detected by Spitzer.  This emission nebula was cataloged by Karl Henize (HEN-eyes) while spending 1948-1951 in South Africa doing research for his Ph.D. dissertation at the University of Michigan. Henize later became a NASA astronaut and, at age 59, became the oldest rookie to fly on the Space Shuttle during an eight-day flight of the Challenger in 1985. He died just short of his 67th birthday in 1993 while attempting to climb the north face of Mount Everest, the world's highest peak.   http://photojournal.jpl.nasa.gov/catalog/PIA05517",
            "keywords": [
                "Spitzer Space Telescope"
            ]
        }
    ]
})


  
  });
  