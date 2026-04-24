# Portfolio Images Folder

This folder contains images for your interactive Folder Portfolio in the About section.

## How to Add Your Images

### Folder Structure:
```
portfolio-images/
├── uiux-1.jpg       (UI/UX Design - Image 1)
├── uiux-2.jpg       (UI/UX Design - Image 2)
├── uiux-3.jpg       (UI/UX Design - Image 3)
├── ai-workflow-1.jpg (AI Workflow/Systems - Image 1)
├── ai-workflow-2.jpg (AI Workflow/Systems - Image 2)
├── ai-workflow-3.jpg (AI Workflow/Systems - Image 3)
├── automations-1.jpg (Automations - Image 1)
├── automations-2.jpg (Automations - Image 2)
└── automations-3.jpg (Automations - Image 3)
```

## Image Requirements:
- **Format**: JPG, PNG, or WebP (recommended JPG for optimization)
- **Size**: 1600x1000px or similar 16:10 aspect ratio for best display
- **Quality**: High quality, well-lit images
- **File Size**: Keep under 500KB each for fast loading

## Steps to Add Your Images:

1. **Download/Save your portfolio images** to your computer
2. **Rename them** according to the structure above
3. **Upload them** to this folder:
   - Drag and drop into `artifacts/lim-visuals/public/portfolio-images/`
   - Or use your file manager

## If You Want Different Image Counts:

Edit `src/components/sections/FolderPortfolio.tsx` and update the `folders` array:

```typescript
const folders: FolderItem[] = [
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "User-centered design systems and interfaces",
    images: [
      "/portfolio-images/uiux-1.jpg",
      // Add or remove images here
    ],
  },
  // ... other folders
];
```

## Features:
✅ Click folder to expand and show images  
✅ Hover over image to see navigation arrows  
✅ Thumbnail gallery below main image  
✅ Image counter (1/3, 2/3, etc.)  
✅ Fully responsive on mobile/tablet/desktop  
✅ Smooth animations and transitions  

---

**Ready to add your images?** Just drop them in this folder and they'll automatically appear in your portfolio! 🎉
