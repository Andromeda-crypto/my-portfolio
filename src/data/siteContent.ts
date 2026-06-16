export const profile = {
  name: "Om Anand",
  role: "Computer Science & Mathematics student",
  headline: "Om Anand",
  summary:
    "Robotics, embedded systems, controls, and algorithmic engineering.",
  location: "Penn State Harrisburg",
  focus: "Robotics · Embedded Systems · Controls · Algorithms",
  currently: "Building BALBOT, a two-wheeled self-balancing robot on ESP32.",
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

export const projects = [
  {
    title: "Autonomous Robot Navigation",
    type: "Robotics / C++",
    description:
      "A from-scratch autonomous navigation simulator built in C++ with custom rigid-body physics, LIDAR ray-casting, occupancy mapping, RRT planning, path smoothing, and PID control. The project focuses on how perception, planning, and control interact inside one working robotics pipeline.",
    tags: [
      "C++17",
      "Robotics",
      "Motion Planning",
      "LIDAR",
      "Mapping",
      "PID Control",
      "Simulation"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Andromeda-crypto/Autonomous-Robot-Navigation"
      }
    ]
  },
  {
    title: "BALBOT",
    type: "Embedded Controls",
    description:
      "A two-wheeled self-balancing robot built around embedded firmware, IMU-based attitude estimation, motor control, PID tuning, power delivery, and live telemetry. The project is focused on taking control theory into physical hardware where noise, wiring, timing, and mechanical behavior matter.",
    tags: [
      "Embedded Systems",
      "IoT",
      "IMU",
      "Control Systems",
      "Firmware",
      "Telemetry",
      "Hardware Integration"
    ],
    links: []
  },
  {
    title: "Options Pricing Engine",
    type: "Quant / Numerical Software",
    description:
      "A C++ derivatives pricing engine implementing Black-Scholes pricing, Monte Carlo simulation, variance reduction, Greeks, and implied volatility solving. The project emphasizes numerical stability, model implementation, and financial computation from first principles.",
    tags: [
      "C++17",
      "Quant Finance",
      "Numerical Methods",
      "Monte Carlo",
      "Black-Scholes",
      "Greeks",
      "Implied Volatility"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Andromeda-crypto/options-pricing-engine"
      }
    ]
  },
  {
    title: "Poker CFR Solver",
    type: "Algorithms / Game Theory",
    description:
      "A Counterfactual Regret Minimization solver for imperfect-information games, with information sets, regret matching, averaged strategies, and strategy convergence. The project explores how decision algorithms learn under hidden information and delayed feedback.",
    tags: [
      "Python",
      "Game Theory",
      "CFR",
      "Decision Algorithms",
      "Strategy Optimization",
      "Imperfect Information"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Andromeda-crypto/poker-cfr-solver"
      }
    ]
  }
];

export const research = [
  {
    title: "SLAM Implementation",
    description:
      "Reproducing a SLAM method with implementation notes, controlled tests, and logged metrics."
  },
  {
    title: "Probabilistic Robotics",
    description:
      "Bayesian belief tracking, Kalman filters, particle filters, occupancy grids, and exploration behavior."
  },
  {
    title: "Motion Planning",
    description:
      "Comparing search-based and sampling-based planners across path quality, runtime, and obstacle density."
  }
];

export const labItems = [
  {
    title: "Flight Attitude Dashboard",
    category: "IoT / IMU / Visualization",
    description:
      "A completed reverse-engineering experiment inspired by an aircraft attitude demo. I built an IoT telemetry loop using an ESP32-class microcontroller, IMU attitude estimation, serial data streaming, Processing 4 rendering, and motor/PID feedback visualization.",
    result:
      "The final prototype rendered a live 3D aircraft model from IMU pitch and roll data, displayed telemetry on a dashboard, and visualized motor control error in real time.",
    tags: [
      "IoT",
      "IMU",
      "Sensor Fusion",
      "Telemetry",
      "Processing 4",
      "PID Feedback",
      "Visualization"
    ],
    media: [
      {
        type: "video",
        src: "/media/lab/attitude-dashboard/demo.mp4",
        alt: "Demo video of the flight attitude dashboard responding to live IMU motion"
      },
      {
        type: "image",
        src: "/media/lab/attitude-dashboard/dashboard.png",
        alt: "Full Processing 4 telemetry dashboard for the IMU-driven flight attitude visualizer"
      },
      {
        type: "image",
        src: "/media/lab/attitude-dashboard/circuitry.jpg",
        alt: "Circuitry and wiring setup for the ESP32 and IMU flight attitude dashboard experiment"
      }
    ]
  }
];

export const cadStudies = [
  {
    title: "Motor Mount Practice",
    stage: "Beginner study",
    description:
      "A basic CAD exercise for understanding mounting geometry, hole placement, clearances, and how a motor could be positioned in a small mechanical assembly.",
    tags: ["CAD", "Motor Mount", "Mechanical Design", "Tutorial Practice"]
  },
  {
    title: "Standoff Point Practice",
    stage: "Beginner study",
    description:
      "A simple standoff-style part used to practice sketch constraints, extrusion, dimensions, and basic mechanical reference points for future robot frame design.",
    tags: ["CAD", "Standoff", "Part Modeling", "Tutorial Practice"]
  }
];

export const skills = [
  {
    title: "Robotics & Control",
    description:
      "Planning, mapping, LIDAR simulation, PID control, state estimation, and robotics architecture."
  },
  {
    title: "Embedded Systems",
    description:
      "IoT systems, sensor bring-up, IMU pipelines, firmware structure, telemetry, debugging, and hardware integration."
  },
  {
    title: "Algorithmic Engineering",
    description:
      "Data structures, graph algorithms, numerical methods, simulation, optimization, and from-scratch implementations."
  },
  {
    title: "Tools & Workflow",
    description:
      "C++, Python, Git, Linux, CMake, PlatformIO, VS Code, testing, debugging, and iterative development."
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
        "Football has been a big part of my life. I played fullback, and I enjoy the mix of positioning, recovery runs, one-on-one defending, and reading the game under pressure."
    },
    {
      title: "Chess",
      description:
        "I like chess because it slows the game down into calculation and patience. It is one of the few games where one careless decision can reshape the entire position."
    },
    {
      title: "Running",
      description:
        "Running helps me stay consistent and clear-headed. I like that progress is simple to measure and hard to fake."
    },
    {
      title: "Swimming",
      description:
        "Swimming is relaxing but still demanding. I enjoy the rhythm, breathing control, and the feeling of moving without impact."
    },
    {
      title: "Badminton",
      description:
        "Badminton is quick and reactive. I like the footwork, fast exchanges, and how small timing changes can decide a point."
    }
  ]
};