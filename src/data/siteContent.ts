export const profile = {
  name: "Om Anand",
  role: "Computer Science & Mathematics student",
  headline: "Om Anand",
  summary:
    "Robotics, embedded systems, controls, and algorithmic engineering.",
  location: "Pennsylvania State University",
  focus: "Robotics · Embedded Systems · Controls · Algorithms",
  currently:
    "Building BALBOT, a two-wheeled self-balancing robot.",
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

/*
  Add verified professional roles here later.

  Example structure:

  {
    company: "Company name",
    role: "Role title",
    period: "May 2026 — August 2026",
    location: "City, Country",
    description: "One concise description.",
    highlights: [
      "Specific contribution.",
      "Specific contribution."
    ],
    link: "https://..."
  }
*/

export const experience: Array<{
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  link?: string;
}> = [];

export const projects = [
  {
    title: "Autonomous Robot Navigation",
    type: "Robotics / C++",
    description:
      "A from-scratch autonomous navigation simulator built in C++ with differential-drive physics, LIDAR ray casting, log-odds occupancy mapping, RRT path planning, path smoothing, and PID control. The project integrates perception, planning, and control within a single simulation architecture.",
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
    type: "Embedded Systems / Controls",
    description:
      "A two-wheeled self-balancing robot built around embedded C++ firmware, IMU-based attitude estimation, encoder feedback, PID control, motor actuation, power delivery, and live telemetry. The project brings control theory into hardware where timing, noise, mechanics, and electrical constraints directly affect behavior.",
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
    type: "Quantitative Finance / C++",
    description:
      "A C++ derivatives-pricing engine implementing Black–Scholes valuation, Monte Carlo simulation, antithetic and control-variate variance reduction, option Greeks, and implied-volatility solving. The implementation emphasizes numerical methods, testable model behavior, and financial computation from first principles.",
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
    type: "Algorithms / Game Theory",
    description:
      "A Counterfactual Regret Minimization solver for imperfect-information games, implementing information sets, regret matching, average-strategy tracking, and convergence analysis. The project examines how decision policies improve when players operate with incomplete information.",
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
    description:
      "A C++ implementation of FastSLAM 1.0 using particle-based robot-pose estimation, per-landmark extended Kalman filters, range-bearing observations, and systematic resampling.",
    tags: ["C++17", "SLAM", "Particle Filters", "EKF"]
  },
  {
    title: "Probabilistic Robotics",
    description:
      "Implementation work involving Bayesian state estimation, occupancy grids, particle filters, frontier exploration, and uncertainty-aware navigation.",
    tags: ["Bayesian Estimation", "Occupancy Grids", "Exploration"]
  },
  {
    title: "Motion Planning",
    description:
      "Practical comparison and implementation of graph-search and sampling-based planning methods, including A*, RRT, path smoothing, obstacle inflation, and frontier-goal selection.",
    tags: ["A*", "RRT", "Path Planning", "Simulation"]
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
    tags: ["CAD", "Part Modelling", "Motor Mount"]
  },
  {
    title: "Standoff Practice",
    stage: "Beginner study",
    description:
      "A small tutorial-led part used to practise constrained sketches, extrusion, dimensions, and simple mechanical reference geometry.",
    tags: ["CAD", "Standoff", "Mechanical Design"]
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
    current: ["The Confidence Game by Maria Konnikova"],
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
        "Football has been a major part of my life. I played fullback and enjoy the combination of positioning, recovery work, one-on-one defending, and decision-making under pressure."
    },
    {
      title: "Chess",
      description:
        "I enjoy chess for its emphasis on calculation, patience, pattern recognition, and the long-term consequences of small decisions."
    },
    {
      title: "Running",
      description:
        "Running gives me a straightforward way to build endurance, maintain consistency, and measure progress."
    },
    {
      title: "Swimming",
      description:
        "I enjoy the rhythm, breathing control, and low-impact conditioning that swimming provides."
    },
    {
      title: "Badminton",
      description:
        "I enjoy the speed, footwork, timing, and quick tactical adjustments involved in badminton."
    }
  ]
};