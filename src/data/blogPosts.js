import performanceMd from '../content/blogs/performance-boost.md?raw';
import modernizationMd from '../content/blogs/legacy-modernization.md?raw';

import heroPerformance from '../assets/blog_performance_hero.png';
import heroModernization from '../assets/blog_modernization_hero.png';

export const blogPosts = [
    {
        id: "performance-boost",
        title: "95% Performance Boost in PDF Generation",
        excerpt: "Optimizing document automation by integrating open-source monorepos.",
        date: "Feb 20, 2024",
        readTime: "5 min read",
        content: performanceMd,
        heroImage: heroPerformance
    },
    {
        id: "legacy-modernization",
        title: "Modernizing Legacy Systems with Next.js",
        excerpt: "A deep dive into migrating complex PHP apps to modern React frameworks.",
        date: "Jan 15, 2024",
        readTime: "8 min read",
        content: modernizationMd,
        heroImage: heroModernization
    }
];




