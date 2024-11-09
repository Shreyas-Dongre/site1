import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shreyas Dongre",
  initials: "SD",
  location: "Mumbai, India, IST",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  about:
    "Engineer focused on building products with extra attention to detail",
  summary:
    "I hold a degree in Engineering with a specialization in Artificial Intelligence. I am a creative, organized, curious, and goal-driven tech enthusiast who enjoys learning new things and demonstrates a strong work ethic. I believe in teamwork and finding creative yet efficient solutions. My goal is to gain practical, hands-on experience in the industry while contributing to the development of society, my organization, and myself as an engineer.",
  avatarUrl: "https://github.com/user-attachments/assets/4ccd6964-42ed-404c-9a45-08ae572a2fe9",
  personalWebsiteUrl: "https://shreyas-dongre1.github.io",
  contact: {
    email: "shreyas.dongre0104@gmail.com",
    tel: "+917738296515",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Shreyas-Dongre",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shreyas-dongre-sa25/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/C0r0na_Chan",
        icon: XIcon,
      },
    ],
  },
  
  work: [
    {
      company: "Microsoft",
      link: "https://microsoft.com",
      badges: ["Bengaluru, IN"],
      title: "Associate AI Engineer",
      logo: ConsultlyLogo,
      start: "May 2024",
      end: null,
      description:
        "Created a custom prompt engineering pipeline, utilizing active learning and few-shot techniques to improve large language model performance, and implemented a new evaluation metric combining perplexity, ROUGE scores, and human feedback.",
    },
    {
      company: "Actofit",
      link: "https://actofit.com",
      badges: ["Mumbai, IN"],
      title: "ML & CV Research Intern",
      logo: ParabolLogo,
      start: "Dec 2023",
      end: "May 2024",
      description:
        "Developed an rPPG face scan system to extract pulse waves from 30-second face videos, for near accurate predictions of various vital parameters such as BP, asthma, hemoglobin, HbA1c, etc. \nDesigned and trained a sit-rise test model that assessed sitting and standing movements, utilizing 2D image capture to segment the floor in 3D for dynamic scoring.",
    },
    {
      company: "CERN",
      link: "https://cern.ch",
      badges: ["CERN - Geneva, CH"],
      title: "Student Intern",
      logo: ClevertechLogo,
      start: "June 2023",
      end: "August 2023",
      description:
        "Applied machine learning techniques to optimize neutrino-nucleus interaction simulations for the DUNE far detector, focusing on uncertainty quantification and bias reduction. \nImplemented advanced reweighting algorithms using Python and TensorFlow to transpose results across different physics models, significantly enhancing computational efficiency in large-scale particle physics simulations.",
    },
    {
      company: "Indian Space Research Organisation (ISRO)",
      link: "https://isro.gov.in",
      badges: ["Bengaluru, IN"],
      title: "AI R&D Intern",
      logo: JojoMobileLogo,
      start: "May 2022",
      end: "Aug 2022",
      description:
        "Worked on formulating a resource-efficient, real-time UAV detection algorithm, ensuring robust performance in diverse environments through data cleaning and extensive field testing. \nWorked to push the tracking accuracy by fine-tuning DeepSORT and designing a trajectory extraction algorithm, improving UAV-object differentiation.",
    },
    {
      company: "TensorTour",
      link: "https://www.tensortour.com",
      badges: ["Remote"],
      title: "CV Research Intern",
      logo: NSNLogo,
      start: "July 2021",
      end: "October 2021",
      description: "Contributed to the design and implementation of a unified neural network architecture capable of handling multiple tasks across various modalities (visual, audio, text, and 3D). \nDeveloped an innovative multi-modal deep learning pipeline for depth estimation using RGB images, binaural echoes, and estimated material properties. Researched and submitted three novel fusion techniques to integrate audio-visual data, exploring the potential of echolocation-inspired approaches in computer vision tasks. This work was recognized and accepted at The IEEE/CVF Computer Vision and Pattern Recognition Conference.",
    },
  ],
  education: [
    {
      school: "NMIMS University",
      degree: "Bachelor of Technology in Artificial Intelligence",
      start: "2020",
      end: "2024",
    },
  ],
  Recognitions: [
    {
      company: "NASA",
      link: "https://drive.google.com/file/d/1P6yTs9kDEfLpklsQ58a-aiM8aelHwDck/view?usp=sharing",
      badges: ["Remote"],
      title: "Security Researcher",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
        "Received a formal appreciation and recognition from National Aeronautics and Space Administration for identifying and reporting a critical bug and backdoors on their official website and subdomains.",
    },
  ],  
  Research: [
    {
      title: "Dongre et al. DeLT Net: Unveiling Sponsor Segments in YouTube Videos with DistilBert, LSTM, and DeiT fusion models, (2023)",
      techStack: [
        "BERT",
        "ViT",
        "PyTorch",
        "LSTM",
        "NumPy",
      ],
      description:
        "Developed a multi modal language-independent deep learning model to recognize and skip sponsored segments in YouTube videos with 98\% accuracy. [Published IEEE - IIT Delhi]",
      logo: ParabolLogo,
      link: {
        label: "DeLT Net Paper",
        href: "https://ieeexplore.ieee.org/document/10308354",
      },
    },
    {
      title: "Dongre et al. Elevating fingerprint matching with a unified dHash, SIFT, and LSH model, (2023)",
      techStack: [
        "Locality Sensitive Hashing",
        "Image Hashing",
        "Keypoint Matching",
        "NumPy",
        "SIFT",
      ],
      description:
        "Implemented a highly accurate and fast fingerprint-matching system using advanced Image hashing, CV and LSH algorithms and achieving 99\% accuracy and 99.9\% F1 score with robust performance against flagship biometric benchmarking datasets. [Published IEEE - CVMI ]",
      logo: EvercastLogo,
      link: {
        label: "Paper",
        href: "https://ieeexplore.ieee.org/abstract/document/10458758",
      },
    },
    {
      title: "Dongre et al. Guiding the Student’s Learning Curve - Augmenting Knowledge Distillation with Insights from GradCAM, (2023)",
      techStack: [
        "CNN",
        "W&B",
        "TensorFlow",
        "JAX",
        "Attention",
        "Transformers",
      ],
      description: "Work on investigating the effects of using GradCAM representations of Teacher models as direct inputs to Student models for quicker convergence. [Published IEEE - BITS]",
      logo: ConsultlyLogo,
      link: {
        label: "GradCAM Paper",
        href: "https://ieeexplore.ieee.org/abstract/document/10458758",
      },
    },
    {
      title: "Dongre et al. RetViT - Retentive Vision Transformers}, (2024)",
      techStack: ["PyTorch", "W&B", "Retention", "Vision Transformers"],
      description:
        "Developed a novel retention-based model architecture for Vision achieving 91.57\% accuracy on ImageNet-1k with just 6M params, surpassing larger models in efficiency and performance. [Published IEEE]",
      logo: MonitoLogo,
      link: {
        label: "RetViT Paper",
        href: "https://drive.google.com/file/d/1gsMtQEnnllAzyJ6QxTg4JIokpGMcy8TI/view?usp=sharing",
      },
    },
  ],  
  projects: [
    {
      title: "Developing Kornia, an Open-source Differentiable Computer Vision Library",
      techStack: [
        "PyTorch",
        "JAX",
        "Tensorflow",
        "Keras",
        "NumPy",
      ],
      description:
        "The goal of project was to migrate Kornia using Keras-core as a backend to support multiple backends focusing on PyTorch, Jax and NumPy and become the reference library for computer vision and robotics practitioners to build their applications for both research and production.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/kornia/kornia",
      },
    },
    {
      title: "RL based DQN for Game playing and Testing",
      techStack: [
        "Reinforcement Learning",
        "DQN",
        "Games",
        "LSTMs",
        "CNNs",
      ],
      description:
        "Optimizing Gameplaying through an Advanced DQN-Based Reinforcement Learning Approach with CNN-LSTM Adaptations.",
      logo: EvercastLogo,
      link: {
        label: "DQN",
        href: "https://github.com",
      },
    },
    {
      title: "Android SelfCare Application",
      techStack: [
        "Android",
        "Android Studio",
        "Kotlin",
        "Firebase",
      ],
      description: "An app with login module, cascade of fitness related videos and relaxation music, how to's and benefits of yoga poses and scribble.",
      logo: ConsultlyLogo,
      link: {
        label: "Android App",
        href: "https://github.com",
      },
    },
    
  ],
  skills: [ 
    "AWS",
    "GCP",
    "Matplotlib",
    "NumPy",
    "Pandas",
    "OpenCV",
    "Keras",
    "Root",
    "TensorFlow",
    "PyTorch",
    "HuggingFace",
    "Jupyter",
    "Scikit-Learn",
    "Docker",
    "AutoCAD",
    "Git",
    "Wireshark",
    "WandB",
    "3DS MAX",
    "Blender",
    "Bash",
    "JAX",
    "Android Studio",
    "Azure",
    "Windows",
    "Heroku",
    "MacOS",
    "SQL",
    "Unity",
    "Linux",
    "MLX",
    "Unreal Engine",
    "Qt",
    "Kornia",
    "Socket Programming",
    "Flask"
  ],
} as const;
