export interface GalleryItem {
  id: string;
  category: "wedding" | "dishes" | "religious" | "corporate" | "setup" | "videos";
  title: string;
  description: string;
  url: string;
  videoUrl?: string;
}

const imageModules = import.meta.glob("./assets/gallery/images/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const videoModules = import.meta.glob("./assets/gallery/videos/*.mp4", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const sortedImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url);

const sortedVideos = Object.entries(videoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url);

const imageCategories: GalleryItem["category"][] = [
  "wedding",
  "dishes",
  "religious",
  "setup",
  "corporate",
];

const categoryLabels: Record<GalleryItem["category"], string> = {
  wedding: "Wedding Feast",
  dishes: "Signature Dishes",
  religious: "Sattvic Pooja Setup",
  setup: "Event Setup",
  corporate: "Corporate Buffet",
  videos: "Event Reel",
};

export const GALLERY_IMAGES: GalleryItem[] = sortedImages.map((url, index) => {
  const category = imageCategories[index % imageCategories.length];
  return {
    id: `img-${index + 1}`,
    category,
    title: `SS Catering — ${categoryLabels[category]}`,
    description: "Authentic photos from our Coimbatore wedding, pooja, and corporate catering events.",
    url,
  };
});

const videoTitles = [
  "Traditional Kitchen & Cooking Reel",
  "Wedding Catering Event Highlights",
  "SS Catering Behind the Scenes",
];

export const GALLERY_VIDEOS: GalleryItem[] = sortedVideos.map((videoUrl, index) => ({
  id: `vid-${index + 1}`,
  category: "videos",
  title: videoTitles[index] ?? `SS Catering Event Video ${index + 1}`,
  description: "Watch our team prepare traditional Brahmin cuisine and set up grand event spreads.",
  url: sortedImages[index % sortedImages.length],
  videoUrl,
}));

export const GALLERY_ITEMS: GalleryItem[] = [...GALLERY_VIDEOS, ...GALLERY_IMAGES];

export const HERO_IMAGE = sortedImages[0];
export const FEATURE_IMAGE = sortedImages[Math.min(10, sortedImages.length - 1)];
export const BANNER_IMAGE = sortedImages[Math.min(20, sortedImages.length - 1)];
export const META_IMAGE = sortedImages[0];
