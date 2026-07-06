"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { photos, photoTourRooms } from "@/lib/data";
import { Icon } from "../icons";

export function PhotoTour({
  onClose,
  onOpenPhoto,
}: {
  onClose: () => void;
  onOpenPhoto: (index: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  const indexOf = (src: string) => photos.findIndex((p) => p.src === src);

  const scrollToRoom = (name: string) => {
    const el = document.getElementById(
      `tour-${name.replace(/\s+/g, "-").toLowerCase()}`
    );
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="abb-fade-in fixed inset-0 z-50 bg-white"
    >
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-white">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
          <button
            ref={closeRef}
            onClick={onClose}
            className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full text-abb-fg transition-colors hover:bg-neutral-100"
            aria-label="Close photo tour"
          >
            <Icon.Close size={16} />
          </button>
          <div className="flex items-center gap-1">
            <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-abb-fg underline-offset-2 transition-colors hover:bg-neutral-100">
              <Icon.Share size={16} /> Share
            </button>
            <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-abb-fg transition-colors hover:bg-neutral-100">
              <Icon.Heart size={16} /> Save
            </button>
          </div>
        </div>
      </div>

      {/* Scroll area */}
      <div ref={scrollRef} className="h-[calc(100vh-64px)] overflow-y-auto">
        {/* Category tiles */}
        <div className="mx-auto max-w-[1000px] px-6 pb-10 pt-4">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-4">
            {photoTourRooms.map((room) => (
              <button
                key={room.name}
                onClick={() => scrollToRoom(room.name)}
                className="group text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={room.photos[0].src}
                    alt={room.name}
                    fill
                    sizes="240px"
                    className="abb-photo object-cover"
                  />
                </div>
                <p className="mt-1.5 text-sm font-medium text-abb-fg">
                  {room.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Room sections */}
        <div className="mx-auto max-w-[1000px] px-6 pb-24">
          {photoTourRooms.map((room) => (
            <section
              key={room.name}
              id={`tour-${room.name.replace(/\s+/g, "-").toLowerCase()}`}
              className="scroll-mt-20 border-t border-abb-border-light py-10 first:border-t-0"
            >
              <div className="grid gap-6 md:grid-cols-[240px_1fr]">
                <div>
                  <h2 className="text-[22px] font-semibold text-abb-fg">
                    {room.name}
                  </h2>
                  {room.caption && (
                    <p className="mt-1 text-sm text-abb-muted">{room.caption}</p>
                  )}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {room.photos.map((photo, i) => (
                    <button
                      key={photo.src}
                      onClick={() => onOpenPhoto(indexOf(photo.src))}
                      className={`group relative aspect-[3/2] overflow-hidden rounded-xl ${
                        room.photos.length === 1 ? "sm:col-span-2" : ""
                      }`}
                      aria-label={`Open ${photo.alt}`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="abb-photo object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
