export const faqRegistry = {
  general: [
    {
      question: "What exactly is the D4 Community?",
      answer:
        "D4 is an inclusive, open-source community built around the four pillars of modern software development: Discite (Learn), Develop, Debug, and Deploy. Our goal is to create a continuous learning and building ecosystem for developers of all skill levels.",
    },
    {
      question: "What is the core concept behind D4?",
      answer:
        "D4 represents an infinite development loop - Discite → Develop → Debug → Deploy. This cycle mirrors real-world software development, where learning, building, fixing, and deploying never truly stop.",
    },
    {
      question: "What does the D4 Community do?",
      answer:
        "We organize meetups, workshops, hackathons, and expert talks. Our focus is on collaboration, hands-on learning, and promoting free knowledge sharing through community-driven and open initiatives.",
    },
    {
      question: "How can I contribute to D4 projects?",
      answer:
        "D4 is fully open-source. You can contribute by collaborating with the community, participating in events, sharing knowledge, or proposing new ideas and initiatives that align with our mission.",
    },
    {
      question: "Are there any membership fees?",
      answer:
        "No. D4 Community is completely free. We strongly believe that access to learning, collaboration, and growth opportunities should never be restricted by cost.",
    },
    {
      question: "Do you host physical or virtual events?",
      answer:
        "We mainly organize physical, in-person events to encourage real-world collaboration and networking. Alongside this, we also host virtual events to keep the community globally accessible.",
    },
    {
      question: "What kind of help can I expect from the community?",
      answer:
        "If you need specific help, guidance, or direction, the community can help connect you with the right people. Whether it's technical, conceptual, or collaborative support, we focus on finding the right person rather than limiting help to a specific domain.",
    },
    {
      question: "How can you help us?",
      answer:
        "As a non-profit, community-driven initiative, there are several ways you can help D4 grow and thrive:\n\n1. Venue Support: If you have access to physical spaces suitable for workshops, meetups, or hackathons, your venue can become a hub for our community events.\n\n2. Mentor or Volunteer Support: Experienced developers, educators, or enthusiasts can volunteer as mentors, guides, or event volunteers.\n\n3. Team Collaboration: You can join our organizing team to help plan, coordinate, and manage events, projects, and community initiatives.\n\n4. Promoting Events: Share our events with your network, on social media, or in professional groups to help us reach a wider audience.\n\n5. Monetary Support: Financial contributions help us cover essential costs like hosting events, buying resources, or providing minimal stipends for volunteers.",
    },
    {
      question: "Can I start my own project under the D4 umbrella?",
      answer:
        "Yes. If your idea aligns with D4's vision of learning, collaboration, and free knowledge sharing, you can propose it to the community. Approved ideas receive visibility, collaboration opportunities, and community support.",
    },
  ],

  events: [
    // Add event-specific FAQs here as your events page grows
  ],

  about: [
    // Add about-page-specific FAQs here
  ],
} as const;

export type FAQPageType = keyof typeof faqRegistry;