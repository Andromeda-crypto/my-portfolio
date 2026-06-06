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
    "I like projects where software has to deal with sensors, hardware behavior, numerical edge cases, and real constraints."
};

export const links = {
  github: "https://github.com/Andromeda-crypto",
  linkedin: "https://www.linkedin.com/in/om-anand-wozchek",
  resume:
    "https://www.dropbox.com/scl/fi/k8x1fz7anyucz48qgrjxz/resume.v1-Om-Anand.docx?rlkey=tnzxmdl7l3yrhu0wnxyt3dkw9&dl=0",
  email: "mailto:anandom.dev@gmail.com"
};

export const projects = [
  {
    title: "Autonomous Robot Navigation",
    type: "Robotics / C++",
    description:
      "A from-scratch C++ navigation system with custom physics, LIDAR simulation, occupancy mapping, RRT planning, path smoothing, and PID control.",
    tags: ["C++17", "RRT", "LIDAR", "Occupancy Grid", "PID", "SFML"],
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
      "A self-balancing robot built around ESP32 firmware, MPU6050 attitude estimation, motor control, PID tuning, power delivery, and telemetry.",
    tags: ["ESP32", "MPU6050", "C++", "PID", "Telemetry"],
    links: []
  },
  {
    title: "Options Pricing Engine",
    type: "Quant / Numerical Software",
    description:
      "A C++ derivatives pricing engine implementing Black-Scholes, Monte Carlo simulation, variance reduction, Greeks, and implied volatility solving.",
    tags: ["C++17", "Black-Scholes", "Monte Carlo", "Greeks", "IV Solver"],
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
      "A Counterfactual Regret Minimization solver for imperfect-information games, with regret matching, information sets, and strategy convergence.",
    tags: ["Python", "CFR", "Game Theory", "Strategy"],
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
    category: "ESP32 / Visualization",
    description:
      "A small reverse-engineering build using ESP32, MPU6050 attitude estimation, serial telemetry, Processing 4 rendering, and live motor/PID feedback.",
    tags: ["ESP32", "MPU6050", "Processing 4", "Telemetry"]
  },
  {
    title: "DXF to G-code Sandbox",
    category: "Geometry / Tooling",
    description:
      "A geometry-processing experiment for parsing CAD-like entities, converting them into paths, visualizing movement, and generating G-code.",
    tags: ["Python", "Geometry", "G-code", "Visualization"]
  },
  {
    title: "Sensor Fusion Playground",
    category: "State Estimation",
    description:
      "Small experiments around noisy measurements, filtering, belief updates, and state estimation behavior.",
    tags: ["Kalman Filter", "Bayes", "Python"]
  },
  {
    title: "ROS2 Bring-up Notes",
    category: "Robotics Middleware",
    description:
      "Practical setup notes and experiments with ROS2 Humble, packages, nodes, subscribers, and robotics middleware structure.",
    tags: ["ROS2", "Linux", "Robotics"]
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
      "ESP32, sensor bring-up, IMU pipelines, firmware structure, telemetry, debugging, and hardware integration."
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