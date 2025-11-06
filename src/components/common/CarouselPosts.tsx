"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useTranslations } from "next-intl";

type Testimonial = {
  text: string;
  author: string;
  location: string;
  image?: string; // (선택) 나중에 쓸 이미지 슬롯
  rating?: number; // (선택) 별점 등
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 100000, min: 2000 },
    items: 3,
    partialVisibilityGutter: 100,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1100 },
    items: 2,
    partialVisibilityGutter: 100,
  },
  tablet: {
    breakpoint: { max: 1100, min: 500 },
    items: 1,
    partialVisibilityGutter: 200,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    partialVisibilityGutter: 15,
  },
};

// 커스텀 버튼 그룹: next/previous와 carouselState를 전달받음
function ButtonGroup({
  next,
  previous,
  carouselState,
}: {
  next?: () => void;
  previous?: () => void;
  carouselState?: any;
}) {
  const { currentSlide, totalItems, slidesToShow } = carouselState || {};
  const isFirst = currentSlide === 0;
  const isLast =
    typeof slidesToShow === "number" && typeof totalItems === "number"
      ? currentSlide >= totalItems - slidesToShow
      : false;

  return (
    // 상위 섹션 전체를 absolute가 아닌 flex로 구성
    <div className="absolute top-15 right-0 px-6 flex gap-3 sm:top-0">
      <button
        onClick={previous}
        className="size-10 rounded-full bg-white text-black flex items-center justify-center"
        aria-label="Previous"
        disabled={isFirst}
        style={{ opacity: isFirst ? 0.4 : 1 }}
      >
        <GrPrevious />
      </button>

      <button
        onClick={next}
        className="size-10 rounded-full bg-white text-black flex items-center justify-center  "
        aria-label="Next"
        disabled={isLast}
        style={{ opacity: isLast ? 0.4 : 1 }}
      >
        <GrNext />
      </button>
    </div>
  );
}

export default function CarouselPosts() {
  const t = useTranslations("HomePage");

  // 배열은 t.raw로 가져옵니다.
  const items = t.raw("testimonials.items") as Testimonial[];
  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite
        partialVisible
        itemClass="px-2"
        arrows={false} // 기본 화살표 숨김
        renderButtonGroupOutside // 버튼 그룹을 바깥에 렌더
        customButtonGroup={<ButtonGroup />} // 커스텀 버튼 그룹 주입
      >
        {items.map((it, i) => (
          <div
            key={i}
            className="lg:min-h-90 rounded-2xl bg-white justify-between p-6 h-full flex flex-col gap-10"
          >
            <p className="text-16-regular lg:text-18-regular">{it.text}</p>
            <div className="flex flex-col gap-3">
              <p className="text-16-bold lg:text-18-bold">{it.author}</p>
              <p className="text-14-regular lg:text-16-regular">
                {it.location}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
