"use client";

import CourseCard from "@/components/cards/courseCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { courses, filterCourses } from "@/constants";
import useTranslate from "@/hooks/use-translate";
import { cn } from "@/lib/utils";
import { useState } from "react";

function FeaturedCourses() {
  const [filter, setFilter] = useState("all");
  const t = useTranslate();

  return (
    <div className="container mx-auto max-w-6xl py-12">
      <div className="flex items-center justify-between max-md:flex-col max-md:items-start">
        <div className="flex flex-col space-y-1">
          <h1 className="font-space-grotesk text-3xl font-bold">
            {t("exploreCourses")}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t("exploreCoursesDescription")}
          </p>
        </div>

        <div className="grid grid-cols-4 items-center max-md:w-full gap-1 self-end max-md:mt-4 max-md:rounded-full max-md:bg-primary-foreground max-md:p-2">
          {filterCourses.map((item) => (
            <Button
              key={item.name}
              variant={filter === item.name ? "outline" : "ghost"}
              className={cn(
                "rounded-full font-medium w-full max-md:bg-secondary",
                filter === item.name && "text-primary"
              )}
              onClick={() => setFilter(item.name)}
            >
              {t(item.label)}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col space-y-4 md:hidden">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
      <Carousel
        opts={{ align: "start" }}
        className="mt-6 hidden w-full md:flex"
      >
        <CarouselContent className="w-full">
          {courses.map((course) => (
            <CarouselItem
              key={course.title}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <CourseCard course={course} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default FeaturedCourses;
