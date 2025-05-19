'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Projects data based on the original website
const projectsData = [
  {
    id: 'nirs',
    title: 'Toward a NIRS Brain Computer Interface',
    tagline: 'Building a fast brain computer interface',
    description: 'We used machine learning to improve the reaction time for our near-infrared spectroscopy (NIRS) brain computer interface. We managed to get state of the art results to help make controlling your computer with your brain a reality. Worked with Tony Wu and Ilya Sherman.',
    image: '/images/projects/nirs.png',
    paperLink: '/papers/Towards a NIRS Brain Computer Interface.pdf'
  },
  {
    id: 'gesture',
    title: 'A HMM-Based Generative Model for Gesture Recognition',
    tagline: 'Building gesture recognition for the Kinect before the Kinect came standard with it',
    description: 'We built a gesture recognition system for the Microsoft Kinect as the first version used pose tracking instead of real gesture detection and recognition in its games. By using a probabilistic graphical model (an HMM) we were able to teach it to recognize 9 gestures (including the Mortal Kombat ones: high-kick, low-kick, high-punch, low-punch, and jump) with almost perfect accuracy using very little training data. Worked with David Philipson and Francisco Cai.',
    image: '/images/projects/A HMM-Based Generative Model for Gesture Recognition.png',
    paperLink: '/papers/A HMM-Based Generative Model for Gesture Recognition.pdf'
  },
  {
    id: 'autocut',
    title: 'Autocut - Extending GraphCut Segmentation',
    tagline: 'Building a program which can segment an image into its component pieces',
    description: 'Graph Cut segmentation currently (as of 2010) is the state of the art algorithm for segmenting an image into its different components. (This algorithm is used in Microsoft PowerPoint 2010) We implemented this algorithm in a few days and novelly extended it by automating the image segmentation process so that it no longer requires human input and yet produces high quality image segmentations. Worked with Evan Rosen.',
    image: '/images/projects/cs223c-2.png',
    paperLink: '/papers/Autocut Image Segmentation.pdf'
  },
  {
    id: 'object-detection',
    title: 'Object Detection Using a Deformable Parts Model',
    tagline: 'Building a system to detect objects (such as people) in images assuming that they change shape',
    description: 'Built a system that can precisely detect objects in an image even if it changes shape from image to image by using a Deformable Parts Model [Felzenszwalb et al \'11]. We highly optimized our system to achieve good performance even while running it on a machine severely limited compute power and minimal RAM by using novel extensions. Worked with Evan Rosen.',
    image: '/images/projects/cs223c-1.png',
    paperLink: '/papers/Object Detection Using a Deformable Parts Model.pdf'
  },
  {
    id: 'scene-classification',
    title: 'Scene Classification and Image Retrieval Using SPM and LLC',
    tagline: 'Building a program to classify what the main content of an image is(ex. beach, kitchen, etc...)',
    description: 'We epxlored the problem of image classification using a family of methods based on bag of words features and by using the Spatial Pyramid Matching (SPM) and Locality Contrained Linear Coding (LLC) (currently) state of the art techniques, we were able to build a system which achieved great performance on commodity machines. Engaging knowledge from data mining, we developed a novel method of using Locality sensitive hashing to find similar pictures in this corpus of images from the computer vision challenge. Worked with Evan Rosen.',
    image: '/images/projects/cs223c-3.png',
    paperLink: '/papers/Scene Classification and Image Retrieval Using SPM and LLC.pdf'
  },
  {
    id: 'language-models',
    title: 'Language Modeling for Scrambled Email Recovery',
    tagline: 'Unscrambling jumbled text through natural language processing',
    description: 'We used and explored different probabilistic language models for rebuilding scrambled email messages into human readable text. By using different smothing techniques (such as absolute discounting, Katz backoff, and Kenyser-Ney for unigram, bigram and trigram models) and highly optimizing our code in order to train on over 1,240,000 sentences of the data, we were able to achieve a 96.6% accuracy on the Enron email corpus. Worked with David Philipson.',
    image: '/images/projects/Results CS224n PA1.png',
    paperLink: '/papers/A HMM-Based Generative Model for Gesture Recognition.pdf'
  },
  {
    id: 'word-alignment',
    title: 'Experimenting with IBM Model 2 Style Word Aligners',
    tagline: 'Constructing a natural language processing model for matching words of sentences translated in two different languages',
    description: 'In this project, we build an aligment model which suggests probabilities for alignments of words between the same sentence in two different languages. In conjuntion with a language model, our model can serve to translate one language to another. Worked with David Philipson.',
    image: '/images/projects/cs224n-2.png',
    paperLink: '/papers/Experimenting with IBM Model 2 Style Word Aligners.pdf'
  },
  {
    id: 'entity-recognition',
    title: 'Named Entity Recognition and Structural Parsing',
    tagline: 'Building a model to identify things (ie. person, place, etc...) in a sentence and also understand the structure of the sentence',
    description: 'In this project, we explore a Maximum Entropy Markov Model (MEMM) for named entity recognition (the identification of entities - people, places, and things in the sentence). We then also learned the structure of a sentence with a Probabilistic Context Free Grammar. We heavily engineered specific features to detect the required named entities (the subject and objects in the sentence).). Worked with David Philipson.',
    image: '/images/projects/cs224n-3.png',
    paperLink: '/papers/Named Entity Recognition and Structural Parsing.pdf'
  },
  {
    id: 'coreference',
    title: 'Developing a Coreference Resolution System',
    tagline: 'Building a coreference resolution engine to determine the meaning of references in a sentence',
    description: 'We display the rule-based system we developed for the resolution task - determining the real world entity that each noun phrase refers to. We built our engine from several new state-of-the-art coreference resolution parser techniques and experimented with three different avenues for extending these techniques. Worked with David Philipson.',
    image: '/images/projects/cs224n-4.png',
    paperLink: '/papers/Now That you Mention It.pdf'
  },
  {
    id: 'network-analysis',
    title: 'Investigating the Corporate Ecosystem Though Stock Market Network Analysis',
    tagline: 'Building a network model to identify relations between companies',
    description: 'We used network analysis and built a model of the stock market based on the residual prices over a timespan. Using various network algorithms we found that there were different clusters of companies which correlated to eachother and had a predicatable real world relevance pattern. Worked with Tony Wu and Salik Syed.',
    image: '/images/projects/network analysis.png',
    paperLink: '/papers/Analyzing the Corporate Ecosystem.pdf'
  },
  {
    id: 'scrappy',
    title: 'Scrappy - Simple, Accessible, Powerful Web Scraping',
    tagline: 'Building a dead simple Firefox Extension to enable anyone to easily scrape the content they want from the web',
    description: 'Currently you have to have a deep knowledge of computer science to automate the gathering of structured data from the Internet. A few commercial solutions exist for thousands of dollars which give you some capabilities if you are willing to put in hundreds of hours to understand their complex systems. We built a dead simple firefox extension that a 10 year old can use to obtain structured data from the web in only 1-2 minutes. It is currently implemented as a Firefox extension for maximum accessibility. Worked with Amir Ghazvinian and Sean Holbert.',
    image: '/images/projects/scrappy.jpg',
    paperLink: '/papers/Scrappy - Simple Web Scraping.pdf'
  },
  {
    id: 'newtrition',
    title: 'Newtrition - Food Data Explorer',
    tagline: 'Building an interactive visualization that helps you actually understand what you eat',
    description: 'Newtrition is an interactive visualization that allows you to compare different types and quantities of food and explore their nutritional value. We wanted to give insight into what you eat at common places (such as Burger King or McDonalds) which do not necessarily have nutrition facts available on the wrapper. The result is a simple and highly eye-opening system which enables you to make conscious decisions about your lifestyle and food choices. Worked with Matt Bush and Sean Holbert.',
    image: '/images/projects/newtrition.png',
    paperLink: '/papers/Newtrition - Visualizing Nutrition Data.pdf'
  },
  {
    id: 'mst',
    title: 'Blazing Fast Minimum Spanning Tree Solver',
    tagline: 'Building a program to solve the Minimum Spanning Tree challenge very quickly',
    description: 'For the algorithms contest in which we were to write a program to find the minimum spanning tree of a graph, in whatever language and using any algorithm that we deemed as best for solving the problem as quickly as possible for a range of inputs. I used C++ and explored several algorithms including Borukva\'s, the Karger Klein and Tarjan randomized linear time algorithm and Chazelles non-randomized comparison algorithm.',
    image: '/images/projects/Minimum Spanning Tree.png'
  },
  {
    id: 'wii',
    title: 'Using Computer Vision to Automatically Play Wii',
    tagline: 'Using computer vision to build a program that can play the Mii game for Nintendo Wii',
    description: 'We created and engineered several different computer vision methods to write a program to play the different types of levels in the Nintendo Wii game \'Mii\', in which the player has to indentify different animated characters which are performing different actions. We used several types of feature detectors and object classifiers and heavily feature engineered our algorithms for accomplishing each of the various challeneges we were presented with. Worked with Prasanna Vasudevan.',
    image: '/images/projects/wii.jpg'
  },
  {
    id: 'object-detection-2',
    title: 'Feature Utilizing Object Detection',
    tagline: 'Building a computer vision system to detect staplers, cups, scissors and other objects in a video',
    description: 'We built an object detection algorithm that uses Haar Features and boosted decsion trees to detect, identify, classify, and mark office supplies in a video. Using various forms of custom feature engineering and also SIFT, we were able to quite accurately classify objects and graphically annotate their position in the video. Worked with Matt Bush and Riddhi Mittal.',
    image: '/images/projects/cs221.png',
    paperLink: '/papers/Computer Vision Object Detection.pdf'
  },
  {
    id: 'game-player',
    title: 'Building a Generalized Game Player',
    tagline: 'Building a generalized game playing program that can play everything from tic-tac-toe to chess!',
    description: 'We built a game playing program using a combination of diverse probabilistic and logical stategies and techniques. We harnessed cutting edge methods such as a Proposition Network Solver (logical) and Markov Chain Monte Carlo depth charges (probabilistic). Worked with Joe Marrama and Salik Syed.',
    image: '/images/projects/Breadth First Search.png',
    paperLink: '/papers/Towards a NIRS Brain Computer Interface.pdf'
  },
  {
    id: 'motion-planner',
    title: 'Robotic Motion Planner',
    tagline: 'Built a program that computes and maps out a path for a robot to take over a complicated terrain',
    description: 'For my freshmen introductory seminar on Robotic Motion Planning, I built a motion planner which simulates a robot moving and attempting to get around terrain to a destination. The robot is able to plan out the best path and course of action and then travels to its destination.',
    image: '/images/projects/Robot Motion Planning.png'
  },
  {
    id: 'walking-wizard',
    title: 'Walking Wizard for Sillicon Valley Engineers',
    tagline: 'Helping engineers live a healthy life',
    description: 'We develped, created, and designed hackwalkrepeat.com for Sillicon Valley engineers to discover how to incorporate a little walking into their day and live a healthy lifstyle. We focused a lot on buildng a good user interface to appeal to our target audience; play around with it and let us know what you think! Worked with Maurizio Caligaris and Maria Molfina.',
    image: '/images/projects/cs377t.png',
    externalLink: 'http://www.hackwalkrepeat.com'
  },
  {
    id: 'pintos',
    title: 'Architecting the PintOS Operating System',
    tagline: 'Building an operating system',
    description: 'Implemented a thread scheduler, the ability to run programs written by users, virtual memory, and the filesystem for the pintOS operating system. This was part of CS140 Operating Systems, a difficult rite of passage in the Stanford CS systems track curriculum. Worked with David Tran.',
    image: '/images/projects/cs140.png'
  }
]

export default function Projects() {
  return (
    <section className="section bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-2">Stuff I've done</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Mostly for classes.
          </p>
          
          {/* Projects list */}
          <div className="space-y-20">
            {projectsData.map((project, index) => (
              <div key={project.id} id={project.id} className="project">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Project image */}
                  <div className="lg:col-span-4">
                    <div className="relative w-full rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="object-contain w-full"
                        priority={index === 0}
                        unoptimized={true}
                      />
                    </div>
                  </div>
                  
                  {/* Project content */}
                  <div className="lg:col-span-8">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <h2 className="text-3xl font-bold mb-1">{project.title}</h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{project.tagline}</p>
                      
                      <div className="text-gray-800 dark:text-gray-300 mb-4">
                        {project.description}
                        {project.paperLink && (
                          <span className="ml-1">
                            <Link 
                              href={project.paperLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                            >
                              Paper
                            </Link>
                          </span>
                        )}
                        {project.externalLink && (
                          <span className="ml-1">
                            <Link 
                              href={project.externalLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                            >
                              {project.externalLink.replace('http://www.', '')}
                            </Link>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer message */}
          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold mb-4">I will add more of my projects soon...</h2>
            <h2 className="text-2xl font-bold">
              Wanna check out stuff that <Link href="/life" className="text-primary-600 dark:text-primary-400 hover:underline">I</Link> <Link href="/fun" className="text-primary-600 dark:text-primary-400 hover:underline">built for fun?</Link>
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 