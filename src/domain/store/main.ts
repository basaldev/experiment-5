import { createAtom } from "js-atom"
import { Bubble } from "components/presentational/bubble"

export type HomePage = { name: "HOME_PAGE" }
export type SecondPage = { name: "SECOND_PAGE" }
export type ThirdPage = { name: "THIRD_PAGE" }
export type FourthPage = { name: "FOURTH_PAGE" }

export type Page = HomePage | SecondPage | ThirdPage | FourthPage

export type Item = { name: string; url: string }

export type State = {
  currentPage: Page
  allItems: Array<Item>
  filteredItems: Array<Item>
  messages: Array<any>
  documents: Array<any>
  dianosis: Array<any>
  doctors: Array<any>
  scans: Array<any>
  questionnaire: Array<any>
  mySuggestions: Array<any>
  loading: boolean
  inputText: string
  questionnaireFinished: boolean
  sessionAttributes: any
}

const defaultState: State = {
  currentPage: { name: "HOME_PAGE" },
  allItems: [],
  filteredItems: [],
  messages: [
    {
      content: Bubble("Hi, How can I help you today?"),
      showSpeaker: true,
      direction: "row",
      speaker: "BOT"
    }
  ],
  inputText: "",
  documents: [
    {
      type: "data",
      img: `https://picsum.photos/200/300/?random`,
      title: "Image",
      cols: 3
    },
    {
      type: "document",
      img: `https://picsum.photos/500/200/?random`,
      title: "Image",
      cols: 1
    },
    {
      type: "document",
      img: `https://picsum.photos/430/470/?random`,
      title: "Image",
      cols: 2
    },
    {
      img: `https://picsum.photos/100/300/?random`,
      title: "Image",
      cols: 3
    },
    {
      type: "data",
      img: `https://picsum.photos/900/200/?random`,
      title: "Image",
      cols: 1
    },
    {
      img: `https://picsum.photos/450/454/?random`,
      title: "Image",
      cols: 2
    },
    {
      img: `https://picsum.photos/450/454/?random`,
      title: "Image",
      cols: 2
    }
  ],
  dianosis: [],
  mySuggestions: [
    {
      img: `https://s3-us-west-1.amazonaws.com/replika-landing-images/opengraph/default/ai-companion-who-cares-cover.png`,
      name: "Replika",
      description:
        "If you’re feeling down, or anxious, or just need someone to talk to, your Replika is here for you 24/7.",
      button: {
        text: "Install app",
        url: ""
      },
      tag: "loneliness"
    },
    {
      img: `http://www.patriciabannan.com/_site/img/og.png`,
      name: "Patricia Bannan, MS, RDN",
      description:
        "Our philosophy Having a healthy relationship with food is much more than the food itself. Simply counting calories or avoiding certain ele…",
      button: {
        text: "Apply Now",
        url: "http://www.patriciabannan.com/work-with-me/nutrition-coaching/"
      },
      tag: "nutrition"
    },
    {
      img: `https://images.unsplash.com/photo-1453785675141-67637e2d4b5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1636&q=80`,
      name: "Nature Sounds",
      description: "Relax with some soothing sounds from nature.",
      button: {
        text: "Get Nature Sounds",
        url: "https://soundcloud.com/nature-sounds"
      },
      tag: "music"
    },
    {
      img: `https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80`,
      name: "Vitamin D Supplements",
      description: "Vitamin D is good for you",
      button: {
        text: "Get Vit D Supplements",
        url: "https://www.amazon.com/s?k=vitamin+d+supplements&ref=nb_sb_noss_1"
      },
      tag: "vitamins"
    },
    {
      img: `https://images-na.ssl-images-amazon.com/images/I/71gyQZepQsL._SL1200_.jpg`,
      name: "Brain Wave Scanner",
      description: "Scanning your brain is fun!",
      button: {
        text: "Get Brain Wave Scanner",
        url:
          "https://www.amazon.com/NeuroSky-MindWave-Mobile-Brainwave-Starter/dp/B07CXN8NKX/ref=sr_1_1?keywords=brain+scanner&qid=1552980993&s=gateway&sr=8-1"
      },
      tag: "brain"
    }
  ],
  doctors: [
    {
      img: `https://images.unsplash.com/photo-1523350774557-359d2ca68f2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
      name: "Joseph Lister",
      specialisationId: 31,
      covered: true
    },
    {
      img: `https://images.unsplash.com/photo-1543165365-07232ed12fad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`,
      name: "Henry Gray",
      specialisationId: 95,
      covered: false
    },
    {
      img: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`,
      name: "Jonas Salk",
      specialisationId: 15,
      covered: false
    }
  ],
  scans: [
    {
      title: `Lastest Scan`,
      date: new Date().toLocaleDateString(),
      value: `Mild`,
      img: `https://images.unsplash.com/photo-1522849696084-818b29dfe210?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80`
    }
  ],
  questionnaireFinished: false,
  questionnaire: [
    {
      id: 1,
      title: `How well do you eat?`,
      description: `On a scale of 1 to 10, how healthily do you think you eat?`,
      value: null
    },
    {
      id: 2,
      title: `How often do you exercise?`,
      description: `On a scale of 1 to 10, how often do you exercise?`,
      value: null
    },
    {
      id: 3,
      title: `How many hours of sun do you get each day?`,
      description: `On average, how many hours of sunlight do you get?`,
      value: null
    },
    {
      id: 4,
      title: `How often do you drink alcohol?`,
      description: `How many days ago did you last drink alcohol?`,
      value: null
    },
    {
      id: 5,
      title: `How much fresh air do you get each day?`,
      description: `On a scale of 1 to 10, how much fresh air do you get?`,
      value: null
    },
    {
      id: 6,
      title: `How easily do you trust people?`,
      description: `On a scale of 1 to 10, how easily do you trust people?`,
      value: null
    },
    {
      id: 7,
      title: `How well can you breathe?`,
      description: `On a scale of 1 to 10, how well can you breathe?`,
      value: null
    },
    {
      id: 8,
      title: `How many hours of the day are you awake for?`,
      description: `On a scale of 1 to 10, how many hours are you awake per day?`,
      value: null
    }
  ],
  loading: true,
  sessionAttributes: {}
}

export const store = createAtom(defaultState)
