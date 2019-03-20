import { createAtom } from "js-atom"
import { Bubble } from "components/presentational/bubble"
import * as User1Image from "assets/user1.jpg";
import * as User2Image from "assets/user2.png";

export type HomePage = { name: "HOME_PAGE"; value: 0 }
export type SecondPage = { name: "SECOND_PAGE"; value: 1 }
export type ThirdPage = { name: "THIRD_PAGE"; value: null }
export type FourthPage = { name: "FOURTH_PAGE"; value: 2 }
export type LoginPage = { name: 'LOGIN_PAGE'; value: null };

export type Page = HomePage | SecondPage | ThirdPage | FourthPage | LoginPage;

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
  campaigns: any,
  user: {
    id: string;
  };
  sampleUsers: Array<{
    name: string;
    id: string;
    avatar: string;
    age: number;
  }>;
}

const defaultState: State = {
  currentPage: { name: "HOME_PAGE", value: 0 },
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
      img: `https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`,
      name: "Health Coaching",
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor',
      date: new Date().toLocaleDateString(),
      value: `Mild`,
      img: `https://www.healthimaging.com/sites/default/files/styles/media_image/public/2018-08/istock-587mribrain.jpg?itok=eO2Ooa-2`
    }
  ],
  questionnaireFinished: false,
  questionnaire: [
    {
      id: 1,
      title: `How well do you eat?`,
      shortTitle: 'Eating',
      description: `On a scale of 1 to 10, how healthily do you think you eat?`,
      img: `https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`,
      value: null,
      unit: ''
    },
    {
      id: 2,
      title: `How often do you exercise?`,
      shortTitle: 'Exercise',
      description: `On a scale of 1 to 10, how often do you exercise?`,
      img: `https://images.unsplash.com/photo-1544216717-3bbf52512659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`,
      value: null,
      unit: ''
    },
    {
      id: 3,
      title: `How many hours of sun do you get each day?`,
      shortTitle: 'Sunlight',
      description: `On average, how many hours of sunlight do you get?`,
      img: `https://images.unsplash.com/photo-1532911557891-d12f6b98dddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`,
      value: null,
      unit: 'hrs'
    },
    {
      id: 4,
      title: `How often do you drink alcohol?`,
      shortTitle: 'Alcohol',
      description: `How many days ago did you last drink alcohol?`,
      img: `https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`,
      value: null,
      unit: 'days ago'
    },
    {
      id: 5,
      title: `How much fresh air do you get each day?`,
      shortTitle: 'Fresh air',
      description: `On a scale of 1 to 10, how much fresh air do you get?`,
      img: `https://images.unsplash.com/photo-1523514601430-01f104e3d6c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`,
      value: null,
      unit: ''
    },
    {
      id: 6,
      title: `How easily do you trust people?`,
      shortTitle: 'Trustness',
      description: `On a scale of 1 to 10, how easily do you trust people?`,
      img: `https://images.unsplash.com/photo-1436246745626-344c04303c72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`,
      value: null,
      unit: ''
    },
    {
      id: 7,
      title: `How well can you breathe?`,
      shortTitle: 'Breathe',
      description: `On a scale of 1 to 10, how well can you breathe?`,
      img: `https://images.unsplash.com/photo-1514852328948-cae2306a687e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`,
      value: null,
      unit: ''
    },
    {
      id: 8,
      title: `How many hours of the day are you awake for?`,
      shortTitle: 'Awake',
      description: `On a scale of 1 to 10, how many hours are you awake per day?`,
      img: `https://images.unsplash.com/photo-1517898717281-8e4385a41802?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80`,
      value: null,
      unit: 'hrs'
    }
  ],
  campaigns: [
    {
      img: `https://images.unsplash.com/photo-1429277005502-eed8e872fe52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`,
      name: "Selfies In The Sun",
      description:
        "If you’re feeling down, or anxious, Sunlight can help, Take a photo in the sun!.",
      button: {
        text: "Post on Instagram",
        url: "https://www.instagram.com/explore/tags/selfiesinthesun/"
      },
      tag: "#selfiesinthesun"
    },
    {
      img: `https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
      name: "FoodAndFriends",
      description:
        "Go out to lunch with your friends and family",
      button: {
        text: "Post on Instagram",
        url: "https://www.instagram.com/explore/tags/selfiesinthesun/"
      },
      tag: "#selfiesinthesun"
    }
  ],
  loading: true,
  sessionAttributes: {},
  user: {
    id: null,
  },
  sampleUsers: [
    {
      name: 'Jessa Maryanne',
      id: 'xd0ktRwSbthgZJOMKxBn44potD52',
      avatar: User1Image,
      age: 21,
    },
    {
      name: 'Mathew Gib',
      id: 'y48Udj8T5Pf7r402LX2qYqNUYmz2',
      avatar: User2Image,
      age: 59,
    },
  ],
}

export const store = createAtom(defaultState)
