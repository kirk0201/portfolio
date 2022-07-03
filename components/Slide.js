import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Autoplay,
  Scrollbar,
  Navigation,
} from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function Slide(props) {
  SwiperCore.use([Pagination, Autoplay, Scrollbar, Navigation]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
      {Object.values(props).map((img, i) => (
        <SwiperSlide key={i}>
          <Image src={img} width={600} height={500}></Image>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
