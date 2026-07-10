export const profile = {
  name: "Om Anand",
  role: "Computer Science & Mathematics student",
  headline: "Om Anand",
  summary:
    "Robotics, embedded systems, controls, and algorithmic engineering.",
  location: "Pennsylvania State University",
  focus: "Robotics · Embedded Systems · Controls · Algorithms",
  currently:
    "Building across robotics, embedded systems, and technical research.",
  signature:
    "I build systems where software, hardware, sensing, and numerical methods have to work together under real-world constraints."
};

export const links = {
  github: "https://github.com/Andromeda-crypto",
  linkedin: "https://www.linkedin.com/in/om-anand-wozchek",
  resume:
    "https://www.dropbox.com/scl/fi/k8x1fz7anyucz48qgrjxz/resume.v1-Om-Anand.docx?rlkey=tnzxmdl7l3yrhu0wnxyt3dkw9&dl=0",
  email: "mailto:anandom.dev@gmail.com",
  chessCom: "https://www.chess.com/member/andro_meda1"
};

export const experience = [
  {
    company: "Indian Institute of Technology (BHU) Varanasi",
    role: "Research Intern",
    period: "June 2026 — Present",
    location: "Varanasi, India",
    description:
      "Working at the intersection of machine learning, IoT, and autonomous systems for smart agriculture.",
    highlights: [
      "Training and evaluating machine-learning models for perception-oriented agricultural applications.",
      "Integrating intelligent perception solutions into IoT-based agricultural systems.",
      "Researching UAV platforms and autonomous aerial systems for agriculture-focused deployment."
    ],
    link: "https://www.iitbhu.ac.in/"
  }
];

export const projects = [
  {
    title: "Autonomous Robot Navigation",
    type: "Autonomous Systems",
    description:
      "A from-scratch C++ navigation system bringing perception, mapping, motion planning, and control into a single simulation. Built to explore what changes when individual robotics algorithms have to operate as one connected pipeline.",
    origin:
      "I wanted to understand how perception, planning, and control behave when they have to work together in one system.",
    tags: [
      "C++17",
      "Robotics",
      "Motion Planning",
      "LIDAR",
      "Mapping"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Andromeda-crypto/Autonomous-Robot-Navigation"
      }
    ],
    media: null
  },
  {
    title: "BALBOT",
    type: "Embedded Control",
    description:
      "A two-wheeled self-balancing robot built around embedded C++ and closed-loop control. Attitude estimation, encoder feedback, motor actuation, and telemetry come together on physical hardware, where timing, noise, and mechanics become part of the problem.",
    origin:
      "I wanted to take control theory out of simulation and deal with what changes when the system becomes physical.",
    tags: [
      "Embedded Systems",
      "IMU",
      "Control Systems",
      "Firmware",
      "Telemetry"
    ],
    links: [],
    media: null
  },
  {
    title: "Options Pricing Engine",
    type: "Computational Finance",
    description:
      "A C++ derivatives pricing engine built to study financial models through implementation. Black–Scholes, Monte Carlo methods, variance reduction, Greeks, and implied volatility are treated as numerical systems to build, test, and reason about.",
    origin:
      "I built it to understand the models through implementation rather than only through their equations.",
    tags: [
      "C++17",
      "Quantitative Finance",
      "Monte Carlo",
      "Numerical Methods",
      "Derivatives"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Andromeda-crypto/options-pricing-engine"
      }
    ],
    media: null
  },
  {
    title: "Poker CFR Solver",
    type: "Game Theory",
    description:
      "An implementation of Counterfactual Regret Minimization for imperfect-information games. Built out of an interest in how strategies evolve when decisions must be made with incomplete information and against an adapting opponent.",
    origin:
      "Poker made decision-making under incomplete information interesting enough to implement and test.",
    tags: [
      "Python",
      "Game Theory",
      "CFR",
      "Decision Algorithms",
      "Optimization"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Andromeda-crypto/poker-cfr-solver"
      }
    ],
    media: null
  }
];

export const research = [
  {
    title: "FastSLAM 1.0",
    status: "Implemented",
    description:
      "A from-scratch C++ implementation of FastSLAM 1.0, combining particle-based robot-pose estimation with independent landmark extended Kalman filters. The implementation includes range-bearing observations, particle weighting, landmark updates, and systematic resampling.",
    tags: [
      "C++17",
      "SLAM",
      "Particle Filters",
      "EKF"
    ]
  },
  {
    title: "FastSLAM 2.0",
    status: "In Progress",
    description:
      "An implementation of FastSLAM 2.0 focused on incorporating the latest observation into the particle proposal distribution. The work is currently centred on understanding the paper, structuring the algorithm, and translating the updated proposal step into a reliable implementation.",
    tags: [
      "C++17",
      "SLAM",
      "Particle Filters",
      "Research Implementation"
    ]
  }
];

export const labItems = [
  {
    title: "Flight Attitude Dashboard",
    category: "IoT / IMU / Visualization",
    description:
      "A completed reverse-engineering experiment combining an embedded telemetry loop, IMU attitude estimation, serial communication, Processing 4 rendering, and live control-feedback visualization.",
    result:
      "The final prototype rendered a live three-dimensional aircraft model from pitch and roll measurements, displayed sensor telemetry, and visualized motor-control error in real time.",
    tags: [
      "IoT",
      "IMU",
      "Sensor Fusion",
      "Telemetry",
      "Processing 4"
    ],
    media: [
      {
        type: "video",
        src: "/media/lab/attitude-dashboard/demo.mp4",
        alt: "Flight attitude dashboard responding to live IMU movement"
      },
      {
        type: "image",
        src: "/media/lab/attitude-dashboard/dashboard.png",
        alt: "Full Processing 4 flight attitude dashboard"
      },
      {
        type: "image",
        src: "/media/lab/attitude-dashboard/circuitry.jpg",
        alt: "Embedded circuitry and wiring used for the attitude dashboard"
      }
    ]
  }
];

export const cadStudies = [
  {
    title: "Motor Mount Practice",
    stage: "Beginner study",
    description:
      "A tutorial-led exercise used to practise sketch constraints, mounting geometry, hole placement, dimensions, and basic mechanical clearances.",
    tags: [
      "CAD",
      "Part Modelling",
      "Motor Mount"
    ]
  },
  {
    title: "Standoff Practice",
    stage: "Beginner study",
    description:
      "A small tutorial-led part used to practise constrained sketches, extrusion, dimensions, and simple mechanical reference geometry.",
    tags: [
      "CAD",
      "Standoff",
      "Mechanical Design"
    ]
  }
];

export const skills = [
  {
    title: "Robotics & Control",
    description:
      "Planning, mapping, simulation, PID control, state estimation, and robotics architecture."
  },
  {
    title: "Embedded Systems",
    description:
      "Sensor bring-up, IMU pipelines, firmware structure, telemetry, debugging, and hardware integration."
  },
  {
    title: "Algorithmic Engineering",
    description:
      "Graph algorithms, numerical methods, simulation, optimisation, and implementation from first principles."
  },
  {
    title: "Tools & Workflow",
    description:
      "C++, Python, Git, Linux, CMake, PlatformIO, testing, debugging, and iterative development."
  }
];

export const interests = {
  reading: {
    current: [
      "The Confidence Game by Maria Konnikova"
    ],
    favorites: [
      "Man’s Search for Meaning by Viktor Frankl",
      "Meditations by Marcus Aurelius",
      "The Alchemist by Paulo Coelho",
      "Foundation by Isaac Asimov"
    ]
  },
  sports: [
    {
      title: "Football",
      description:
        "I played primarily as a fullback and competed at state and national level. Football has been a serious part of my life, and I still enjoy the positioning, recovery work, and decisions made away from the ball."
    },
    {
      title: "Chess",
      description:
        "I play casually and enjoy positions that reward calculation, patience, and long-term planning."
    },
    {
      title: "Running",
      description:
        "I run regularly and enjoy having a straightforward way to work on endurance and consistency."
    },
    {
      title: "Swimming",
      description:
        "Something I enjoy for the rhythm of it, the breathing control, and the fact that it feels completely different from running."
    },
    {
      title: "Badminton",
      description:
        "Mostly for the speed of the game, the footwork, and how quickly a point can change."
    }
  ]
};