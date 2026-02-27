// Custom lightweight frontmatter parser to avoid Node.js 'Buffer' dependency
const parseFrontmatter = (fileContent) => {
    const regex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
    const match = fileContent.match(regex);

    if (!match) {
        return { data: {}, content: fileContent };
    }

    const frontmatterBlock = match[1];
    const content = match[2];
    const data = {};

    frontmatterBlock.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > -1) {
            const key = line.slice(0, colonIndex).trim();
            const value = line.slice(colonIndex + 1).trim();
            // Remove optional quotes
            data[key] = value.replace(/^['"](.*)['"]$/, '$1');
        }
    });

    return { data, content };
};

// Use Vite's import.meta.glob to find all markdown files in the blog-content directory
const blogFiles = import.meta.glob('/src/blog-content/*.md', { query: '?raw', eager: true });

export const getAllBlogs = () => {
    const blogs = Object.keys(blogFiles).map((path) => {
        const rawContent = blogFiles[path].default || blogFiles[path];
        const { data, content: body } = parseFrontmatter(rawContent);

        // Extract ID from filename
        const id = path.split('/').pop().replace('.md', '');

        return {
            id,
            ...data,
            content: body,
        };
    });

    // Sort by date descending
    return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getBlogById = (id) => {
    const blogs = getAllBlogs();
    return blogs.find((blog) => blog.id === id);
};
