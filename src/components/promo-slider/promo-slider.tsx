import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/shadcn/ui/carousel.tsx";
import Promo from "@/components/promo-slider/components/promo.tsx";
import Autoplay from "embla-carousel-autoplay";

const PromoSlider = () => {
  return (
    <Carousel
      className="container mx-auto"
      plugins={[
        Autoplay({
          delay: 3500,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <Promo
            className="!bg-[#fff1b8] bg-[url('@/assets/promo/pizza.png')] bg-no-repeat bg-[right_-250px_top_-100px] bg-[length:830px]"
            title="Онлайн-сервис"
            subtitle="доставки еды на дом"
            text="Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком"
          />
        </CarouselItem>
        <CarouselItem>
          <Promo
            className="!bg-[#D6E4FF] bg-[url(@/assets/promo/kebab.png)] bg-no-repeat bg-[right_40px_top_45px] bg-[length:450px]"
            text="Закажите шашлыки в любом ресторане до 10 мая и получите скидку по промокоду OMAGAD"
            title="Шашлыки на майские"
            subtitle="со скидкой 35%"
          />
        </CarouselItem>
        <CarouselItem>
          <Promo
            className="!bg-[#FFF566] bg-[url(@/assets/promo/vegetables.png)] bg-no-repeat bg-[right_0px_top_0px] bg-[length:825px]"
            text="Блюдо из ресторана привезут вместе с двумя подарочными книгами по фронтенду"
            title="Скидка 20% на всю еду"
            subtitle="по промокоду LOVE.JS"
          />
        </CarouselItem>
        <CarouselItem>
          <Promo
            className="!bg-[#FFF1F0] bg-[url(@/assets/promo/sushi.png)] bg-no-repeat bg-[right_15px_top_10px] bg-[length:500px]"
            text="Скидки на сеты до 30 мая по промокоду DADADA"
            title="Сеты со скидкой до 30%"
            subtitle="в ресторанах"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
};

export default PromoSlider;
