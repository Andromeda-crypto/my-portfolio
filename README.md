# Om Anand — Engineering Portfolio

Personal portfolio for Om Anand: robotics, embedded systems, controls, and algorithmic engineering.

**Live:** [https://om-anand.vercel.app](https://om-anand.vercel.app)

## Stack

- [Astro](https://astro.build/) (static output)
- Custom CSS design tokens (carbon / signal-red industrial theme)
- Vanilla TypeScript for kinetic hero + scroll reveals

## Development

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Content

All site copy and structured data live in [`src/data/siteContent.ts`](src/data/siteContent.ts).

### Adding project media

1. Place assets under `public/media/projects/<slug>/`
2. Set the project’s `media` field in `siteContent.ts`:

```ts
media: {
  type: "image", // or "video"
  src: "/media/projects/autonomous-navigation/demo.png",
  alt: "Navigation stack running in simulation"
}
```

Until media is ready, featured projects render a technical diagram slot (pipeline stages) instead of an empty placeholder.

## Structure

```
src/
  data/siteContent.ts     # Content source of truth
  components/home/        # Homepage sections
  components/layout/      # Header, footer, section intro
  components/project/     # Project feature + media slot
  components/motion/      # Hero physics + scroll animations
  pages/                  # /, /lab/, /interests/
  styles/                 # tokens, base, layout, components, motion
```
