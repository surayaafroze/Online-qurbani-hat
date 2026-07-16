import AllCows from "@/component/AllCows";
import Banner from "@/component/Banner";
import ExtraSection from "@/component/ExtraSection";
import ScrollReveal from "@/component/ScrollReveal";

export const metadata = {
  title: "Qurbani Hat-Home",
  
};

export default function Home() {
  return (
    <div>
    <main className="">
       <ScrollReveal yOffset={0} duration={0.8}>
         <Banner></Banner>
       </ScrollReveal>
       <AllCows></AllCows>
       <ScrollReveal>
         <ExtraSection></ExtraSection>
       </ScrollReveal>
    </main>
    
    </div>
  );
}
