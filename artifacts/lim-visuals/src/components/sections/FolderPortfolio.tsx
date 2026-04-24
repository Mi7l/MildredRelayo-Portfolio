import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, X } from "lucide-react";

interface FolderItem {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const folders: FolderItem[] = [
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "User-centered design systems and interfaces",
    images: [
      "/portfolio-images/uiux-1.jpg",
      "/portfolio-images/uiux-2.jpg",
      "/portfolio-images/uiux-3.jpg",
    ],
  },
  {
    id: "ai-workflow",
    title: "AI Workflow/Systems",
    description: "Intelligent automation and system design",
    images: [
      "/portfolio-images/ai-workflow-1.jpg",
      "/portfolio-images/ai-workflow-2.jpg",
      "/portfolio-images/ai-workflow-3.jpg",
    ],
  },
  {
    id: "automations",
    title: "Automations",
    description: "Process optimization and efficiency",
    images: [
      "/portfolio-images/automations-1.jpg",
      "/portfolio-images/automations-2.jpg",
      "/portfolio-images/automations-3.jpg",
    ],
  },
];

export function FolderPortfolio() {
  const [openFolderId, setOpenFolderId] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openFolder = openFolderId ? folders.find((f) => f.id === openFolderId) : null;

  return (
    <div className="space-y-8">
      {/* Folder Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {folders.map((folder, index) => (
          <motion.button
            key={folder.id}
            onClick={() => setOpenFolderId(openFolderId === folder.id ? null : folder.id)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className={`relative group text-left transition-all duration-300 ${
              openFolderId === folder.id ? "sm:col-span-2 md:col-span-3" : ""
            }`}
          >
            <div
              className={`relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 ${
                openFolderId === folder.id
                  ? "bg-white/10 p-6 sm:p-8 md:p-10"
                  : "bg-white/5 p-6 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {/* Folder Icon and Title */}
              <div className="flex items-start gap-4">
                <div
                  className={`mt-1 transition-all duration-300 ${
                    openFolderId === folder.id ? "text-primary" : "text-white/60 group-hover:text-primary"
                  }`}
                >
                  <Folder className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-semibold text-white group-hover:text-primary transition-colors">
                    {folder.title}
                  </h4>
                  <p className={`text-sm transition-all duration-300 ${
                    openFolderId === folder.id ? "text-white/70 mt-2" : "text-white/50 mt-1"
                  }`}>
                    {folder.description}
                  </p>
                </div>
              </div>

              {/* Image Preview - Only show when folder is open */}
              <AnimatePresence>
                {openFolderId === folder.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 space-y-4"
                  >
                    {/* Main Image Display */}
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="relative group/image overflow-hidden rounded-xl bg-black/30 aspect-[16/10]"
                    >
                      <motion.img
                        key={selectedImageIndex}
                        src={folder.images[selectedImageIndex]}
                        alt={`${folder.title} - Image ${selectedImageIndex + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                      />
                      
                      {/* Hover overlay with navigation */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-between px-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImageIndex((prev) =>
                              prev === 0 ? folder.images.length - 1 : prev - 1
                            );
                          }}
                          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm"
                        >
                          <span className="text-white text-xl">‹</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImageIndex((prev) =>
                              prev === folder.images.length - 1 ? 0 : prev + 1
                            );
                          }}
                          className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm"
                        >
                          <span className="text-white text-xl">›</span>
                        </button>
                      </div>

                      {/* Image counter */}
                      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white/80">
                        {selectedImageIndex + 1} / {folder.images.length}
                      </div>
                    </motion.div>

                    {/* Thumbnail Gallery */}
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {folder.images.map((image, imgIndex) => (
                        <motion.button
                          key={imgIndex}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImageIndex(imgIndex);
                          }}
                          className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            selectedImageIndex === imgIndex
                              ? "border-primary"
                              : "border-white/20 hover:border-white/40"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
