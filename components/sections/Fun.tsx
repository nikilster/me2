'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css"

// Fix for images with spaces in filenames
const getImagePath = (path: string) => {
  // Ensure all paths start with a slash
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  return path;
};

// Fun projects data based on the previous website
const funProjects = [
  {
    id: 'downtolunch',
    title: 'Down To Lunch',
    subtitle: 'Press one button to get lunch with friends',
    description: `The story of how a Sunday afternoon project became the #1 Social App on the App Store! 🎉

Joe Lau and I moved to San Francisco and we missed our friends because we were working all of the time. We thought it would be awesome if we could press a button and hang out with our friends.  We had a couple hours free on a Sunday so we decided to build an app to do that.  We shared a link to the beta on facebook and 8 hours later at a party, a girl who we had never met had heard of it. 24 hours later a ton of our friends were using it and 48 hours later people around the world were on DTL and getting lunch with their friends.

In January 2016, Down To Lunch spontaneously exploded across the country - the map to the left shows just 20% of the new users that joined during that time.  It was the craziest month of our lives so far, working insane hours and having crazy awesome incredible things happen every single day.

The next several months were the craziest of our entire lives.  As DTL continued to grow and be used by college students around the world, we marathon coding sessions to keep the servers up, went a week at a time without seeing the outside world, and broke Apple's iMessage infrastructure because we started getting 5000 text messages a day. (After emailing the CEO of Apple and talking to his executive help staff, we discovered we were some of the top iMessage users in the world! 😂) More stories to come!`,
    linkText: 'Down To Lunch (imdtl.com)',
    link: 'http://imDTL.com',
    images: [
      '/images/fun/dtl-jan-growth.gif',
      '/images/fun/dtl-phone.png',
      '/images/fun/dtl-user-convo.jpg',
      '/images/fun/dtl-user-convo-2.jpg'
    ],
    extraLinks: [
      {
        text: 'Read the stories here!',
        url: 'http://bit.ly/imdtlstorynikilsterwebsite'
      },
      {
        text: 'I WANNA JOIN TEAM DTL',
        url: 'mailto:downtolunch@gmail.com?subject=Hey! I\'m wanna be part of the Team DTL Family!&body=Hey Team DTL!!'
      }
    ]
  },
  {
    id: 'checkintomyflight',
    title: 'Check In To My Flight',
    subtitle: 'Automatically check in to your Southwest flight. Get an A boarding pass. Win.',
    description: `Check In To My Flight automatically gets you the best possible boarding pass for your southwest airlines flight. I was visiting my sister at school and had an hour before we went out to a party so I decided to write myself a small program to check me in to my flights so I wouldn't have to remember to do so (I actually don't care where I sit :). Southwest made me shut it down; read about the adventure.`,
    linkText: 'Check In To My Flight (checkintomyflight.com)',
    link: 'http://www.checkintomyflight.com',
    images: [
      '/images/fun/check in to my flight.png',
      '/images/fun/check in to my flight business.png',
      '/images/fun/check in to my flight nbc online travel.png',
      '/images/fun/check in to my flight palo alto.png'
    ],
    extraLinks: [
      {
        text: 'Some',
        url: 'stories.html'
      },
      {
        text: 'stories',
        url: 'http://www.nbcbayarea.com/news/local/Lawsuit-Wont-Slow-Down-Standford-Grad-175709161.html'
      },
      {
        text: 'were',
        url: 'http://www.mercurynews.com/mike-cassidy/ci_21940098/cassidy-southwest-airlines-crushes-nikal-viswanathans-easy-check'
      },
      {
        text: 'told',
        url: 'http://www.nbcnews.com/travel/travelkit/southwest-airlines-shuts-down-automatic-check-site-1C6681666'
      }
    ]
  },
  {
    id: 'fountainhop',
    title: 'Fountainhop',
    subtitle: 'College events platform',
    description: `During the Winter Break of my senior year (09-10), I created fountainhop to help me and my friends discover what events were going on around Stanford's campus. That quarter, Fountainhop enabled thousands of students find hundreds and hundreds of amazing events. Fountainhop was officially used by Stanford Dining, Stanford Undergraduate Advising and Research, Stanford Convocation, Admit Weekend, Parents Weekend, Housing, numerous other Stanford organizations, and hundreds of student groups on campus.

That summer, working with Salik Syed, Zavain Dar, and Stellios Leventis, we added geolocation features (both on mobile and the browser) to create a way for students around the country to see what was going on around their campus and where their friends were in real time. Fountainhop helped thousands of students around the country discover what was going on at their campus and was used at Harvard, Yale, Princeton, Berkeley, Stanford and many other colleges around the country.`,
    linkText: 'Fountainhop',
    link: '',
    images: [
      '/images/fun/fountainhop.png',
      '/images/fun/Fountainhop Phone List.png',
      '/images/fun/fountainhop phone map.png',
      '/images/fun/fountainhop ar.png'
    ]
  },
  {
    id: 'life',
    title: 'Life',
    subtitle: 'Your Life Coach',
    description: `Life tracks the time you spend on different activities and helps you achieve your goals. Life started as a tool that I built for myself to track how much time I was spending on different activities. This was eye opening to me and radically improved how I spent my time so I wanted to share the benefits with everyone.`,
    linkText: 'Life',
    link: 'mailto:nikilster@gmail.com?subject=Hey Nikil! Can I try out the life analytics platform?',
    images: [
      '/images/fun/life main.png',
      '/images/fun/life timer 2.png',
      '/images/fun/life analytics 3.png',
      '/images/fun/life phone.png'
    ]
  },
  {
    id: 'homie',
    title: 'Homie',
    subtitle: 'The future of the smarthome',
    description: `Homie knows when you walk into your house, shouts out a warm welcome ("WELCOME HOME NIKIL"), turns on the dance party lights, and blasts your favorite pump up song so you can enter in style!! Had been talking with some friends about how awesome it would be to have a song blast when you walk into your house so Joe Lau, Andrew Shaw, and I hacked this together in a few hours on a Sunday - enjoy!`,
    linkText: 'Homie',
    link: 'http://bit.ly/nikilsterwebsitehomielink',
    images: [
      '/images/fun/homie.png'
    ]
  },
  {
    id: 'magicwand',
    title: 'Magic Wand',
    subtitle: 'Now you can be Dumbledore',
    description: `Magic Wand lets you control your lights with a flick of your wrist! I was trying to automate my lights to force myself to go to bed by 10pm everyday and ended up making this in 20 minutes instead (Inspired by 'arry Potter).`,
    linkText: 'Magic Wand',
    link: 'http://bit.ly/nikilsterwebsitemagicwandlink',
    images: [
      '/images/fun/magicwand.png'
    ]
  },
  {
    id: 'stuffmyfriendssay',
    title: 'Stuff My Friends Say',
    subtitle: 'Capture the funny moments in life',
    description: `Stuff My Friends Say is an online quote board that captures the funny stuff that your friends say and generally the joyous hilarity of hanging out. Each person has their page of quotes and you can add to and browse quotes for any of your friends. Inspired by funny stuff that Salik says.`,
    linkText: 'Stuff My Friends Say (www.stuffmyfriendssay.com)',
    link: 'http://www.stuffmyfriendssay.com',
    images: [
      '/images/fun/smfs salik.png',
      '/images/fun/smfs alison.png',
      '/images/fun/smfs pasha.png',
      '/images/fun/smfs alison 2.png'
    ]
  },
  {
    id: 'morninglaughsclub',
    title: 'Morning Laughs Club',
    subtitle: 'Start every morning off with a laugh',
    description: `Morning Laughs Club texts you a short standup comedy clip each morning to start your day off with a laugh!

Joe and I would go to the gym and come back and watch standup comedy and absolutely loved it so we thought it would be awesome start each morning with a laugh. Some of our favorites: Trevor Noah, Michael Che, and Aziz. Enjoy :)`,
    linkText: 'Morning Laughs Club (morninglaughsclub.com)',
    link: 'http://bit.ly/nikilsterwebsitemorninglaughsclublinkworking',
    images: [
      '/images/fun/morning-laughs-club.png'
    ]
  },
  {
    id: 'voteforyourbeliefs',
    title: 'Vote For Your Beliefs',
    subtitle: 'Showing you what the 2012 candidates believe',
    description: `Vote For Your Beliefs shows you what you can't find anywhere else - a very clear, informative breakdown of what each of the 2012 US Republican candidates believe in.

I was shocked to learn that how much money a candidate spent was the determining factor in who voted for them rather than what the candidates believed in and I realized that a big contributing factor to this was that no one actually knew what the candidates believed in and there was no simple way to find this out.

I felt like there HAD to be some good way of simply finding out and learning what the candidates believed in and that if it didn't exist, I needed to create one. So the idea was hatched over winter break and Vote For Your Beliefs was born. I worked with Shelly Ni to make this.`,
    linkText: 'Vote For Your Beliefs (voteforyourbeliefs.com)',
    link: 'http://www.voteforyourbeliefs.com',
    images: [
      '/images/fun/vote for your beliefs 1.png',
      '/images/fun/vote for your beliefs 2.png',
      '/images/fun/vote for your beliefs 3.png'
    ]
  },
  {
    id: 'ratemyfridge',
    title: 'Rate My Fridge',
    subtitle: 'Real-time inventory and social influence for our health',
    description: `My rommamte Joe Lau and I had been building things to automate our house. We thought it would be cool to have our friends be able to see what was in our fridge in real-time and give us advice on what to eat! We built a iphone scanner app and connected it to the database of foods and so we could scan in real-time what was in our fridge and it automatically posted to a website where our friends could comment on it. The advice was hilarious and amazing - read it for yourself... and give us a rating!`,
    linkText: 'Rate My Fridge (ratemyfridge.com)',
    link: 'http://ratemyfridge.com',
    images: [
      '/images/fun/rate-my-fridge.png',
      '/images/fun/rate-my-fridge-friend-comments-1.png',
      '/images/fun/rate-my-fridge-friend-comments-2.png',
      '/images/fun/rate-my-fridge-friend-comments-3.png'
    ]
  },
  {
    id: 'slideshareanalytics',
    title: 'Slideshare Analytics',
    subtitle: 'Beautiful content dashboards',
    description: `For one of my classes at Stanford, we posted all of our presentations on Slideshare and had to track how many views we had on each of them as part of our grade. The professor told us that we needed to use a google spreadsheet to do this and as we had 4 minutes of class left (while he was explaining how to make the spreadsheet) I figured that I could probably rig something up that did this automatically. So I pulled out my computer, looked up how to use the api and wrote a script that pulled the data from Slideshare, which I showed to the professor after class (~10 minutes later); I built Slideshare Analytics one evening that week.`,
    linkText: 'Slideshare Analytics (slideshareanalytics.com)',
    link: 'http://www.slideshareanalytics.com',
    images: [
      '/images/fun/slideshare bjfogg.png',
      '/images/fun/slideshare nikilster.png',
      '/images/fun/slideshare group cs377t 1.png',
      '/images/fun/slideshare group cs377t 2.png'
    ]
  },
  {
    id: 'wealthdashboard',
    title: 'Wealth Dashboard',
    subtitle: 'The best way to visualize your wealth',
    description: `Wealth Dashboard is a heads up visualization of all of your personal wealth. I created this because I started using Mint.com to manage my money and realized that I wanted a very simple and beautiful way to see my personal finances. I thought Mint.com was too complicated (even though I had heard it was the simplest and cleanest UI) so I built what I wanted.

This was created around the observation that the successful people I know focus on what they have and what they want. Applying this principle to wealth, the dashboard shows you how much you own and how it is growing over time instead of just displaying a list of your past purchases like most sites do.

It turned out to be much harder than I initially thought to build this because Mint does not have an API and it was very difficult to access the data that I wanted. Finally after building some tricky ways to finagle the data, I came up with this dashboard.

To use it:
1. Open Chrome
2. Install the Wealth Dashboard
3. Go to Mint.com and log in
4. Enjoy :)`,
    linkText: 'Wealth Dashboard',
    link: 'https://chrome.google.com/webstore/detail/wealth-dashboard/cghbofnmlhjphodbiagknegoljaboada',
    images: [
      '/images/fun/wealth dashboard.png'
    ]
  },
  {
    id: 'therealsfmap',
    title: 'The Real SF Map',
    subtitle: 'See where your friends work and live',
    description: `My sophomore summer when I was living in Seattle and interning at Microsoft, I really wanted to see which of my friends were from Seattle so I could hang out with them. I always thought that someone should make a map of where everyone lives so when you visit a new city or even in your own city you are just able to see who's around you - there have been several times in my life when I discovered by accident a year later that friends lived a few blocks from me. Joe Lau and I finally built this and it fostered many hangouts with friends who I didn't even realize lived nearby - try it out and see where your friends work!`,
    linkText: 'The Real SF Map (therealsfmap.com)',
    link: 'http://therealsfmap.com',
    images: [
      '/images/fun/the-real-sf-map.png',
      '/images/fun/the-real-sf-map-2.png',
      '/images/fun/the-real-sf-map-3.png',
      '/images/fun/the-real-sf-map-4.png'
    ]
  },
  {
    id: 'facesofharbaugh',
    title: 'Faces of Harbaugh',
    subtitle: 'HOLDING??!@ WHAT THE @#$@#)($*$)$!',
    description: `No explanation needed.

Jim Harbaugh - Stanford Football Coach, 2007-2011, San Francisco 49ers 2011+.

Required watching before viewing the site:
1. Zoolander
2. Gangnam Style
3. Harry Potter
4. Wedding Crashers
5. Anchorman
6. Star Wars

Suggested supplemental material:
1. Call Me Maybe
2. Elf
3. Inception
4. Britney Spears

Enjoy!`,
    linkText: 'Faces of Harbaugh (facesofharbaugh.com)',
    link: 'http://www.facesofharbaugh.com',
    images: [
      '/images/fun/faces of harbaugh force.png',
      '/images/fun/faces of harbaugh hey I just met you.png',
      '/images/fun/faces of harbaugh oh no he didn\'t.png',
      '/images/fun/faces of harbaugh gangnam.png'
    ]
  },
  {
    id: 'facesofshaw',
    title: 'Faces of Shaw',
    subtitle: 'Football is serious business',
    description: `Faces of Shaw chronicles the many faces of Stanford Football Coach David Shaw. As he shows you in this montage of his many facial expressions on the football field, he has a very expressive palate and Derek Zoolander would be proud to see that David Shaw has more than just "one look". Enjoy :)`,
    linkText: 'Faces of Shaw (facesofshaw.com)',
    link: 'http://www.facesofshaw.com',
    images: [
      '/images/fun/faces of shaw touchdown.png',
      '/images/fun/faces of shaw 4th and 1.png',
      '/images/fun/faces of shaw win.png',
      '/images/fun/faces of shaw first down.png'
    ]
  },
  {
    id: 'howtobluesteel',
    title: 'How To Blue Steel',
    subtitle: 'The essential life skill',
    description: `I created How To Blue Steel to help educate all of the aspiring male models around the world perfect the most important skill in life - namely Blue Steeling. This is actually an essential life skill for everyone, not just the really really ridiculously good looking people. Enjoy :)`,
    linkText: 'How To Blue Steel (howtobluesteel.com)',
    link: 'http://www.howtobluesteel.com',
    images: [
      '/images/fun/how to blue steel.png'
    ]
  },
  {
    id: 'buffering',
    title: 'Buffering',
    subtitle: '',
    description: `Utilizing a breakthrough in HTML 5 packet tranfser protocol frame rate, I was able to create a new buffering technology which increases performance by at least 8.75x. Real world tests of the technology infused into physical apparel have exceeded laboratory performance and produced astounding results!

Just 1 week of wearing the new technology interwoven into fabric has transformed our users' lives, see for yourself from the test subjects:

Russ Nickel, Film Student
"I wore the shirt for 3 workouts this week and increased my bench press by 150 lbs! Walking down the hallway at college, I was swarmed by girls trying to rip off my clothes and could barely escape. It was like I was in an AXE commercial. (I could have directed a much better commercial though)"

Angad Singh, Stanford Junior
"I wore the shirt when I was coding one night and built a new asynchronous threaded event driven javascript client-server framework for fetching generic AJAX requests with high throughput on a NoSQL sharded schema. It's basically the next node.js and I didn't even use Twitter Bootstrap or LaunchRock for the promo page! In addition I wrote it in 30 minutes at a frat party while taking a break from my English paper."

David Philipson, Palantir Starcraft Team
"I wore the shirt during my Starcraft match with a Heart of the Swarm Grandmaster and was able to overcome a 4 Gate with only 2 zerglings while I simultaneously expanded to 6 bases and killed with him ONLY drones all while writing a game in Scala on my other monitor! This new buffering technology literally doubled my APMs and micro skills; oh and just FYI, that guy was Korean."

All early tests seem to indicate that this technology is revolutionary and will have major cross industry impact -we are in the middle of raising an angel round and are currently oversubscribed but if you can send us a check in the next couple days we might consider it.`,
    linkText: 'Buffering',
    link: 'mailto:nikilster@gmail.com?subject=Hook me up with a shirt!',
    images: [
      '/images/fun/buffering yellow.png'
    ],
    extraLinks: [
      {
        text: 'Join the private alpha',
        url: 'mailto:nikilster@gmail.com?subject=Hook me up with a shirt!'
      }
    ]
  },
  {
    id: 'fireshark',
    title: 'Fireshark',
    subtitle: 'Discover what other people are doing on your internet',
    description: `Fireshark lets you see what everyone else around you is doing on the internet. Think of it like a news feed per person that shows you what they are searching for on google, what youtube videos they are watching and if they are on an unsecure connection what their name is and what they are looking at on Facebook.

Won 1st prize at the Stanford hackathon in October 2011. Worked with Daniel Posch, Feross Aboukhadijeh, and John Hisey.`,
    linkText: 'Fireshark',
    link: '',
    images: [
      '/images/fun/fireshark.png'
    ]
  },
  {
    id: 'visualize',
    title: 'Visualize',
    subtitle: 'Achieve your every goal',
    description: `Visualize is a goals tracking application that helps you achieve your dreams. Visualize is extremely intuitive to use and has several features which have been carefully designed to help you maintain your willpower, such as: video motivation, an encouragment notifier, and useful statistics that keep you motivated.`,
    linkText: 'Visualize',
    link: '',
    images: [
      '/images/fun/visualize main.png',
      '/images/fun/visualize activity.png',
      '/images/fun/visualize options.png'
    ]
  },
  {
    id: 'birthdaycalendar',
    title: 'Birthday Calendar',
    subtitle: 'Export your friends birthdays from Facebook to your calendar',
    description: `Birthday Calender helps you remember your friends birthdays from your calendar. You can now see everyone's birthdays and not have to check facebook for them (I didn't use facebook at all when I made it but always used my email and calendar).`,
    linkText: 'Birthday Calendar',
    link: '',
    images: [
      '/images/fun/birthday calendar page 1.png',
      '/images/fun/birthday calendar main.png',
      '/images/fun/birthday calendar page 2.png',
      '/images/fun/birthday calendar screenshot.png'
    ]
  },
  {
    id: 'learnit',
    title: 'LearnIt',
    subtitle: 'The collaborative education platform',
    description: `LearnIt is an online collaborative education platform which enables students to help each other with the questions they may have during the learning process. Unlike traditional forums or collaboration sites, LearnIt is centered around a of dynamic structuring of ideas and concepts, enabling students to find the relevant material to help them with their questions even if the previous information on the topic is not part of the same class or year.

We built this to help solve the problem I had, which was: Often when I had a question while working on the homework or studying, other people would have the same question (confirmed later by talking to my friends) but there was no good way to get the answer or to find out who else was strugling with the same question / knew the answer and help unless I went to office hours, emailed or texted all of my friends, or emailed the TA (who recieved the same email from numerous students).

LearnIt elegantly enables students to overcome this barrier and collaborate online. I built LearnIt with Binyam Teklu, Roger Liao, and Sunil Khanal.`,
    linkText: 'LearnIt',
    link: '',
    images: []
  }
]

export default function Fun() {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const openImageLightbox = (projectIndex: number, imageIndex: number) => {
    setCurrentProjectIndex(projectIndex);
    setLightboxIndex(imageIndex);
    setOpenLightbox(true);
  };

  return (
    <section className="section bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-2">I build stuff for fun</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Here are a few of the things I've built.
          </p>
          
          {/* Fun projects */}
          <div className="space-y-24">
            {funProjects.map((project, projectIndex) => (
              <div key={project.id} id={project.id} className="project">
                <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
                  <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 pb-4">{project.subtitle}</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Project images */}
                  <div className="lg:col-span-7">
                    <ul className="space-y-4">
                      {/* Main image - only show if there are images */}
                      {project.images.length > 0 ? (
                        <li className="cursor-pointer block w-full rounded-md overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm" 
                           onClick={() => openImageLightbox(projectIndex, 0)}>
                          <div className="relative w-full aspect-[16/10] md:aspect-auto md:h-[400px]">
                            <Image
                              src={getImagePath(project.images[0])}
                              alt={`${project.title} main image`}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              priority={projectIndex === 0}
                              unoptimized={true}
                            />
                          </div>
                        </li>
                      ) : null}
                      
                      {/* Thumbnail images - only if there are more than 1 image */}
                      {project.images.length > 1 && (
                        <li className="grid grid-cols-3 gap-2 md:gap-4">
                          {project.id === 'downtolunch' ? (
                            // Special layout for DTL (matching the example image)
                            <>
                              <div className="col-span-1 cursor-pointer" onClick={() => openImageLightbox(projectIndex, 1)}>
                                <div className="relative w-full aspect-square rounded-md overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
                                  <Image
                                    src={getImagePath(project.images[1])}
                                    alt={`${project.title} phone view`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 33vw, 16vw"
                                    unoptimized={true}
                                  />
                                </div>
                              </div>
                              <div className="col-span-1 cursor-pointer" onClick={() => openImageLightbox(projectIndex, 2)}>
                                <div className="relative w-full aspect-square rounded-md overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
                                  <Image
                                    src={getImagePath(project.images[2])}
                                    alt={`${project.title} conversation 1`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 33vw, 16vw"
                                    unoptimized={true}
                                  />
                                </div>
                              </div>
                              <div className="col-span-1 cursor-pointer" onClick={() => openImageLightbox(projectIndex, 3)}>
                                <div className="relative w-full aspect-square rounded-md overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
                                  <Image
                                    src={getImagePath(project.images[3])}
                                    alt={`${project.title} conversation 2`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 33vw, 16vw"
                                    unoptimized={true}
                                  />
                                </div>
                              </div>
                            </>
                          ) : (
                            // Default layout for other projects
                            project.images.slice(1).map((image, index) => (
                              <div 
                                key={index} 
                                className="cursor-pointer"
                                onClick={() => openImageLightbox(projectIndex, index + 1)}
                              >
                                <div className="relative w-full aspect-square rounded-md overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
                                  <Image
                                    src={getImagePath(image)}
                                    alt={`${project.title} image ${index + 2}`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 33vw, 16vw"
                                    unoptimized={true}
                                  />
                                </div>
                              </div>
                            ))
                          )}
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Project description */}
                  <div className="lg:col-span-5">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      {project.link && (
                        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 font-medium hover:underline block mb-4">
                          {project.linkText}
                        </Link>
                      )}
                      
                      {/* Insert the project link into the first paragraph if needed */}
                      {project.description.split('\n\n').map((paragraph, index) => {
                        if (index === 0 && project.link && project.id !== 'downtolunch') {
                          // Don't modify the first paragraph if it already contains the project name
                          return (
                            <p key={index} className="text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">
                              {paragraph}
                            </p>
                          );
                        } else {
                          return (
                            <p key={index} className="text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">
                              {paragraph}
                            </p>
                          );
                        }
                      })}

                      {/* Extra links section */}
                      {project.extraLinks && project.extraLinks.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {project.extraLinks.map((link, index) => (
                            <span key={index}>
                              {index > 0 && !link.url.includes('mailto') && ' '}
                              <Link 
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`${link.url.includes('mailto') ? 'block mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-center' : 'text-primary-600 dark:text-primary-400 hover:underline'}`}
                              >
                                {link.text}
                              </Link>
                              {index < project.extraLinks.length - 1 && !link.url.includes('mailto') && !project.extraLinks[index + 1].url.includes('mailto') && '.'}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox for image viewing - updated for better compatibility */}
      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        index={lightboxIndex}
        slides={funProjects[currentProjectIndex]?.images.map(src => ({ src: getImagePath(src) }))}
      />
    </section>
  )
} 