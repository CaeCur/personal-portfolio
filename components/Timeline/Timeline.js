import { useState, useRef, useEffect } from "react";
import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimelineStyles";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { TimelineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimelineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);

  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimelineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) *
          TimelineData.length
      );

      setActiveItem(index);
    }
  };

  // snap to beginning of timeline when page is resized to prevent bug where content hidden when sizing up
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle main>About Me</SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo omnis corrupti non iure,
        ducimus et doloribus commodi voluptatem, molestias eum harum quaerat labore facere culpa!
        Soluta culpa reiciendis voluptatem ad!
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimelineData.map((item, i) => (
            <CarouselMobileScrollNode key={i} final={i === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={i}
                id={`carousel__item-${i}`}
                active={activeItem}
                onClick={(e) => handleClick(e, i)}
              >
                <CarouselItemTitle>
                  {item.year}
                  {/* SVG for timeline graphic */}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="0.79478" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                  {/* END SVG */}
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimelineData.map((item, i) => (
          <CarouselButton
            key={i}
            index={i}
            active={activeItem}
            onClick={(e) => handleClick(e, i)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
