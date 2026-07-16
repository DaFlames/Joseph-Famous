/*
  CONTENT CONTROL CENTRE
  Replace text in this file to update every page that uses it. Keep the property
  names and commas as they are. Image paths point to assets/images/; replace a
  placeholder SVG by dropping in an image with the exact same filename or update
  the image value below to your new file (for example, "assets/images/project-1.jpg").
*/
const portfolioData = {
  name: "Joseph Famous",
  bio: "I am a performance-driven infrastructure engineer and cybersecurity student based in Lagos. I enjoy designing secure, reliable systems and helping teams turn technical complexity into dependable outcomes.",
  aspiration: "To grow as a security-minded infrastructure leader who designs resilient cloud and network systems, improves technical operations, and helps people work with confidence.",
  stats: [{ number: "200+", label: "Issues resolved monthly" }, { number: "3", label: "Floors networked" }, { number: "95%", label: "First-contact resolution" }],
  education: [
    { qualification: "BSc Cybersecurity", school: "Miva Open University", period: "2026 - Present", focus: "Network security, incident response & cryptographic defenses" },
    { qualification: "BSc Computer Engineering", school: "European University of Lefke", period: "2022 - 2026", focus: "Systems engineering, cloud topology & data communications" }
  ],
  skills: ["IT Infrastructure", "Google Cloud Platform", "Network Monitoring", "MikroTik / Winbox", "Systems Security", "Cloud Deployment", "Hardware Optimisation", "Technical Leadership"],
  interests: ["IT support & technology integration", "System & infrastructure optimisation", "Project & engineering coordination"],
  projects: [
    { title: "Multi-Floor Network Deployment", image: "assets/images/project-1.svg", alt: "Network deployment placeholder illustration", type: "Network Infrastructure · 2026", description: "Designed and installed a structured Cat6 network across a three-story residence, using a MikroTik gateway and a cost-conscious bridge of legacy Airtel and MTN hardware.", details: ["Configured a unified MikroTik bridge for high-speed delivery across all floors.", "Aligned subnets and disabled duplicate DHCP to prevent IP conflicts and double NAT."], link: "#", linkLabel: "Case study coming soon" },
    { title: "Cloud Security Lab", image: "assets/images/project-2.svg", alt: "Cloud security project placeholder illustration", type: "Placeholder project", description: "A reserved space for a future cloud-security lab, audit, or systems hardening project.", details: ["Replace this description with your next project.", "Update the image file in assets/images/project-2.svg or change its path here."], link: "#", linkLabel: "Add project link" },
    { title: "Academic Systems Dashboard", image: "assets/images/project-3.svg", alt: "Academic dashboard placeholder illustration", type: "Placeholder project", description: "A reserved space for a future web, automation, or academic management project.", details: ["Use this card to showcase a new practical project.", "Replace its image and add a live demo or repository link."], link: "#", linkLabel: "Add project link" }
  ]
};
