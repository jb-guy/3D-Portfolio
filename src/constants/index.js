export const myProjects = [
  {
    id: 1,
    title: "Interactive Web Experience for Bouts du Monde",
    description:
      "Visual interactive story promoting the magazine and blog \"Bouts du Monde\".",
    subDescription: [
      "An interactive visual story designed to promote the Bouts du Monde magazine and blog.",
      "Developed in close collaboration with the communication and design teams, the project integrates smooth animations, dynamic transitions, and multiple narrative paths to enhance user engagement.",
      "Built using modern web technologies, the site leverages modular components for performance and maintainability, and features custom animation sequences to support the storytelling flow.",
      "Awarded 1st Place at HybLab 2020, recognizing excellence in creative and innovative web development."
    ],
    href: "https://apps.hyblab.fr/story2020/bouts-du-monde/",
    logo: "",
    image: "/assets/projects/boutdumonde.png",
    tags: [
      {
        id: 1,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "JQuery",
        path: "/assets/logos/jquery.svg",
      },
      {
        id: 3,
        name: "WebGL",
        path: "/assets/logos/webgl.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Heart Simulation Administration Platform",
    description:
      "EPLab is a distributed system for managing and orchestrating multiple heart simulation environments.",
    subDescription: [
      "It supports multi-tenant operation, where each client runs independent heart simulation instances with configurable parameters and real-time control.",
      "The platform leverages a Kafka-based event-driven architecture for reliable, scalable data streaming and synchronization across services.",
      "Data transfer between clients and the backend is handled via WebSockets, ensuring low-latency communication for live simulation updates.",
      "Designed for extensibility, EPLab provides a foundation for real-time data analytics, performance monitoring, and advanced visualization pipelines in future iterations."
    ],
    href: "https://eplab.ihu-liryc.fr/",
    logo: "",
    image: "/assets/projects/eplab.png",
    tags: [
      {
        id: 1,
        name: "Vue.js",
        path: "/assets/logos/vue.svg",
      },
      {
        id: 2,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
      {
        id: 3,
        name: "FastAPI",
        path: "/assets/logos/FastAPI.svg",
      },
      {
        id: 4,
        name: "Websocket",
        path: "/assets/logos/websocket.svg",
      },
      {
        id: 5,
        name: "Kafka",
        path: "/assets/logos/kafka.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Heart Simulation Navigation Tool",
    description:
      "SimNav provides an interactive 3D visualization environment for cardiac simulations.",
    subDescription: [
      "The platform features a dynamic heart model with manipulable anatomical components, allowing detailed spatial exploration.",
      "A multi-layer control panel supports complex user interactions and parameter adjustments during runtime.",
      "Real-time bidirectional communication with the simulation backend is achieved via WebSocket protocol, ensuring low-latency updates and synchronized state management."
    ],
    href: "https://simnav.ihu-liryc.fr/",
    logo: "",
    image: "/assets/projects/simnav.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Three.js",
        path: "/assets/logos/threejs.svg",
      },
      {
        id: 4,
        name: "Websocket",
        path: "/assets/logos/websocket.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Real-time Signal Visualization Tool",
    description:
      "SimView is a high-performance platform for real-time visualization and analysis of signals.",
    subDescription: [
      "It supports complex interactions with single or multiple data streams and is designed for scalability and extensibility.",
      "Real-time Data Ingestion: Streams data over WebSocket with minimal latency",
      "GPU-Accelerated Processing: Performs filtering, transformations, and computations on-the-fly using GPU parallelization.",
      "Customizable Visualization: Flexible UI components allow tailored signal representations and multi-signal dashboards.",
      "SimView is ideal for research, monitoring, and engineering workflows requiring high-fidelity, low-latency signal analysis."
    ],
    href: "https://simview.ihu-liryc.fr/",
    logo: "",
    image: "/assets/projects/simview.png",
    tags: [
      {
        id: 1,
        name: "Vue.js",
        path: "/assets/logos/vue.svg",
      },
      {
        id: 2,
        name: "Vuetify",
        path: "/assets/logos/vuetify.svg",
      },
      {
        id: 3,
        name: "WebGL",
        path: "/assets/logos/webgl.svg",
      },
      {
        id: 4,
        name: "Websocket",
        path: "/assets/logos/websocket.svg",
      },
    ],
  }
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Fullstack VR developed",
    job: "Defense and Innovation",
    employer:"Thales Group",
    date: "2021",
    contents: [
      "Designed and implemented a 3D VR environment to showcase projects developed by the Thales Nantes agency.",
      "Developed as part of an internal contest, fully accessible via web browsers with no downloads required.",
      "Built a dynamic web administration interface allowing non-technical users to add, remove, or update projects seamlessly.",
      "Engineered complex 3D interactions and multiple design layouts to create an immersive user experience.",
      "Leveraged modern web technologies to ensure cross-platform compatibility and high performance, optimizing both rendering and user interaction."
    ],
  },
  {
    title: "Fullstack Engineer",
    job: "Medical Research Projects",
    employer:"Bordeaux University",
    date: "2022-2025",
    contents: [
      "Developed robust and reliable applications for medical research, with a specialization in cardiovascular studies.",
      "Designed and implemented an integration and self-deploying pipeline, supporting both development and production environments.",
      "Introduced and formalized agile development processes within the team, improving efficiency and collaboration.",
      "Built secure, real-time APIs with bridges and reverse proxies to ensure seamless data flow and system reliability."
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];