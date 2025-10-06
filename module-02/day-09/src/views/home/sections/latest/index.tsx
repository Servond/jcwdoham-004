"use client";

import { useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { IArticle } from "@/interfaces/article.interface";
import { getNewestArticles } from "@/services/article";

import LatestSectionSkeleton from "./components/skeleton";
import LatestSectionCard from "./components/card";

export default function LatestSection() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<IArticle[]>([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getNewestArticles();

      setArticles(data);
    } catch (err: any) {
      console.log(err);
      enqueueSnackbar(err.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  w-full ">
      {isLoading ? (
        <LatestSectionSkeleton />
      ) : (
        <div className="flex flex-col gap-12 text-left items-center justify-center w-full">
          <h1 className="text-3xl font-bold flex self-start  ">
            Latest Article
          </h1>
          <Carousel className="w-full">
            <CarouselContent>
              {articles.map((article, idx) => (
                <CarouselItem key={idx} className="md:basis-1/4 basis">
                  <LatestSectionCard
                    title={article.title}
                    slug={article.slug}
                    image_path={article.image_path}
                    description={article.description}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <button className="border-none md:h-[35px] md:w-[150px] rounded-md bg-gray-100 hover:bg-gray-200 hover:cursor-pointer text-green-500">
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
