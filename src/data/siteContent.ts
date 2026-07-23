export type ProjectPriority = "featured" | "secondary";
export type ProjectStatus = "active" | "complete";

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  origin?: string;
  note?: string | null;
  tags: string[];
  links: ProjectLink[];
  priority: ProjectPriority;
  status: ProjectStatus;
  outcomes: string[];
  pipeline: string[];
  media: ProjectMedia[] | null;
};

export const profile = {
  name: "Om Anand",
  role: "Robotics & Controls · CS & Mathematics",
  headline: "Om Anand",
  summary:
    "Building robots, control systems, and embedded software.",
  location: "Pennsylvania State University",
  focus: "Robotics · Embedded Systems · Controls · Algorithms",
  currently:
    "Research intern at IIT BHU — vision, edge perception, and UAV closed-loop targeting.",
  signature:
    "Still figuring out how software, hardware, sensing, and control work together."
};

export const capabilities = [
  "Closed-loop control",
  "Embedded firmware",
  "SLAM & navigation",
  "Sensor fusion",
  "Motion planning",
  "Numerical methods"
];

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
      "Computer vision, edge deployment, and closed-loop autonomy for agricultural perception and UAV targeting.",
    highlights: [
      "Built a dual-branch morphological consistency model in PyTorch that reduced background shortcut learning on a 12-class IP102 subset — 91.46% accuracy, Macro F₁ 0.8704 (p = 0.0357), ahead of fusion and ensemble baselines.",
      "Optimized an EfficientNet-B0 perception pipeline for edge platforms (Jetson / Raspberry Pi) to cut inference latency for real-time target identification.",
      "Connected visual state estimation to a ROS2 workspace as the tracking input for autonomous UAV precision targeting and motion planning."
    ],
    link: "https://www.iitbhu.ac.in/"
  }
];

export const about = {
  intro:
    "Student in CS & Mathematics at Penn State, working toward robotics, embedded systems, and closed-loop control.",
  body:
    "Most of my projects sit somewhere between firmware and autonomy — estimating state, closing loops, and seeing how the pieces behave once they have to run together. This summer I'm a research intern at IIT BHU on vision, edge deployment, and UAV targeting."
};

export const upcoming = [
  {
    title: "Quadruple Inverted Pendulum on a Cart",
    status: "Next",
    description:
      "A real-hardware controls build on a motorized linear rail — joint encoders, nonlinear dynamics, state estimation, and LQR/LQG, with a path toward MPC. Intended as the next flagship dynamics-and-controls project.",
    tags: [
      "Controls",
      "LQR / LQG",
      "State Estimation",
      "Nonlinear Dynamics",
      "Hardware"
    ]
  },
  {
    title: "Autonomous Drone Precision Landing",
    status: "Deferred",
    description:
      "AprilTag pose estimation and visual servoing for autonomous landing and docking. V1 on a DJI Tello prototype, then V2 on a custom Pixhawk platform after returning to campus. Deferred for summer cost and hardware constraints — not abandoned.",
    tags: [
      "Visual Servoing",
      "AprilTag",
      "UAV",
      "Pose Estimation",
      "Pixhawk"
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "balbot",
    title: "BALBOT",
    type: "Embedded Control",
    description:
      "A two-wheeled self-balancing robot built around embedded C++ and closed-loop control. Attitude estimation, encoder feedback, motor actuation, and telemetry come together on physical hardware, where timing, noise, and mechanics become part of the problem.",
    origin:
      "I was curious what balancing looks like once the equations leave the page — when the IMU is noisy, the motors lag, and the frame is something you designed yourself.",
    tags: [
      "Embedded Systems",
      "IMU",
      "Control Systems",
      "Firmware",
      "Telemetry",
      "CAD"
    ],
    links: [
      {
        label: "Explore project",
        href: "/projects/balbot"
      },
      {
        label: "View source",
        href: "https://github.com/Andromeda-crypto/BALBOT"
      }
    ],
    priority: "featured",
    status: "active",
    outcomes: [
      "Designed the mechanical assembly in CAD and built a physical prototype that balances on hardware.",
      "Implemented attitude estimation and closed-loop PID control from scratch in embedded C++, wiring IMU and encoder feedback into motor actuation.",
      "Tuned the controller against real sensor noise, latency, and mechanical coupling until the robot held a stable balance."
    ],
    pipeline: ["Estimate", "Control", "Actuate", "Telemetry"],
    media: null
  },
  {
    slug: "autonomous-robot-navigation",
    title: "Autonomous Robot Navigation",
    type: "Autonomous Systems",
    description:
      "A from-scratch C++ navigation system bringing perception, mapping, motion planning, and control into a single simulation. Built to explore what changes when robotics algorithms have to operate as one connected pipeline.",
    origin:
      "I wanted to see what happens when perception, planning, and control share one loop instead of living in separate demos.",
    tags: ["C++17", "Robotics", "Motion Planning", "LIDAR", "Mapping"],
    links: [
      {
        label: "Explore project",
        href: "/projects/autonomous-robot-navigation"
      },
      {
        label: "View source",
        href: "https://github.com/Andromeda-crypto/Autonomous-Robot-Navigation"
      }
    ],
    priority: "featured",
    status: "active",
    outcomes: [
      "Built a connected C++ pipeline for LIDAR sensing, occupancy mapping, motion planning, and control in one simulation loop.",
      "Implemented path planning and closed-loop tracking so planning outputs drive continuous robot motion, not isolated demos.",
      "Structured the stack so perception, map updates, and control can be swapped or stress-tested independently."
    ],
    pipeline: ["Sense", "Map", "Plan", "Control"],
    media: [
      {
        type: "video",
        src: "/media/projects/autonomous-robot-navigation/Robot-Navigation-Demo.mp4",
        alt: "Autonomous robot navigating diagonally across the simulator while updating LIDAR readings and following an RRT-planned path",
        caption: "Closed-loop navigation"
      },
      {
        type: "image",
        src: "/media/projects/autonomous-robot-navigation/navigation-path.png",
        alt: "Robot simulator showing a long planned route between the robot and its navigation target",
        caption: "RRT path and target"
      },
      {
        type: "image",
        src: "/media/projects/autonomous-robot-navigation/lidar-navigation.png",
        alt: "Robot approaching a target while its simulated LIDAR scans the surrounding obstacle field",
        caption: "LIDAR-guided motion"
      }
    ]
  },
  {
    slug: "options-pricing-engine",
    title: "Options Pricing Engine",
    type: "Computational Finance",
    description:
      "A C++ derivatives pricing engine built to study financial models through implementation. Black–Scholes, Monte Carlo methods, variance reduction, Greeks, and implied volatility are treated as numerical systems to build, test, and reason about.",
    origin:
      "I learn quantitative models fastest by building them — pricing, simulation, and Greeks as code I can test.",
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
    priority: "secondary",
    status: "complete",
    outcomes: [
      "Implemented Black–Scholes and Monte Carlo pricing with variance-reduction techniques in C++.",
      "Computed Greeks and implied volatility as numerical checks against analytical baselines.",
      "Organized the engine so models, simulation, and Greeks share a common evaluation path."
    ],
    pipeline: ["Model", "Simulate", "Price", "Greeks"],
    media: null
  },
  {
    slug: "poker-cfr-solver",
    title: "Poker CFR Solver",
    type: "Game Theory",
    description:
      "An implementation of Counterfactual Regret Minimization for imperfect-information games. Built out of an interest in how strategies evolve when decisions must be made with incomplete information and against an adapting opponent.",
    origin:
      "I was curious how a strategy settles when every decision is made with incomplete information.",
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
    priority: "secondary",
    status: "complete",
    outcomes: [
      "Implemented Counterfactual Regret Minimization for imperfect-information game trees.",
      "Tracked regret accumulation and strategy updates across iterations to converge toward equilibrium play.",
      "Used poker as a testbed for decision-making under incomplete information and adaptive opponents."
    ],
    pipeline: ["State", "Regret", "Update", "Strategy"],
    media: null
  }
];

export const featuredProjects = projects.filter(
  (project) => project.priority === "featured"
);

export const secondaryProjects = projects.filter(
  (project) => project.priority === "secondary"
);

export const research = [
  {
    title: "FastSLAM 1.0",
    status: "Implemented",
    description:
      "A from-scratch C++ implementation of FastSLAM 1.0, combining particle-based robot-pose estimation with independent landmark extended Kalman filters. The implementation includes range-bearing observations, particle weighting, landmark updates, and systematic resampling.",
    tags: ["C++17", "SLAM", "Particle Filters", "EKF"]
  },
  {
    title: "FastSLAM 2.0",
    status: "In Progress",
    description:
      "An implementation of FastSLAM 2.0 focused on incorporating the latest observation into the particle proposal distribution. The work is currently centred on understanding the paper, structuring the algorithm, and translating the updated proposal step into a reliable implementation.",
    tags: ["C++17", "SLAM", "Particle Filters", "Research Implementation"]
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
    tags: ["IoT", "IMU", "Sensor Fusion", "Telemetry", "Processing 4"],
    media: [
      {
        type: "video" as const,
        src: "/media/lab/attitude-dashboard/demo.mp4",
        alt: "Flight attitude dashboard responding to live IMU movement"
      },
      {
        type: "image" as const,
        src: "/media/lab/attitude-dashboard/dashboard.png",
        alt: "Full Processing 4 flight attitude dashboard"
      },
      {
        type: "image" as const,
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
    tags: ["CAD", "Part Modelling", "Motor Mount"],
    pipeline: ["Sketch", "Extrude", "Mount", "Clearance"]
  },
  {
    title: "Standoff Practice",
    stage: "Beginner study",
    description:
      "A small tutorial-led part used to practise constrained sketches, extrusion, dimensions, and simple mechanical reference geometry.",
    tags: ["CAD", "Standoff", "Mechanical Design"],
    pipeline: ["Sketch", "Constraint", "Extrude", "Dimension"]
  }
];

export const stack = [
  {
    title: "Languages",
    items: ["C++17", "Python", "Embedded C++"]
  },
  {
    title: "Robotics & Controls",
    items: [
      "Motion planning",
      "SLAM / FastSLAM",
      "PID & closed-loop control",
      "State estimation",
      "LIDAR mapping"
    ]
  },
  {
    title: "Embedded Systems",
    items: [
      "IMU pipelines",
      "Sensor fusion",
      "Firmware structure",
      "Serial telemetry",
      "Hardware bring-up"
    ]
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "Linux", "CMake", "PlatformIO", "Debugging & testing"]
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