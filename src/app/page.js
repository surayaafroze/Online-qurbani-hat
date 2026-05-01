import AllCows from "@/component/AllCows";
import Banner from "@/component/Banner";
import ExtraSection from "@/component/ExtraSection";



export default function Home() {
  return (
    <div>
    <main className="">
       <Banner></Banner>
     <AllCows></AllCows>
     <ExtraSection></ExtraSection>
    </main>
    
    </div>
  );
}
