import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import PortfolioTopTitle from "@/components/portfolio/PortfolioTopTitle";
import PortfolioGallery6 from "@/components/portfolio/PortfolioGallery6";
import CallToAction from "@/components/portfolio/CallToAction";
import PortfolioGallery1 from "@/components/portfolio/PortfolioGallery1";
import PortfolioGallery2 from "@/components/portfolio/PortfolioGallery2";
import PortfolioGallery3 from "@/components/portfolio/PortfolioGallery3";
import PortfolioGallery4 from "@/components/portfolio/PortfolioGallery4";
import PortfolioGallery5 from "@/components/portfolio/PortfolioGallery5";
import LatestProjects from "@/components/portfolio/LatestProjects";
import OtherProjectsTitle from "@/components/portfolio/OtherProjectsTitle";
export const metadata = {
  title: "Portofoliu || Web App Dynamicx",
};
const PortfolioV5 = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <PortfolioTopTitle />

      {/* <!-- 
        =============================================
        Latest Projects Section
        ============================================== 
        --> */}
      <LatestProjects />

      {/* <!-- 
        =============================================
        Other Projects Title Section
        ============================================== 
        --> */}
      <OtherProjectsTitle />

      {/* <!-- 
        =============================================
        Portfolio Gallery six
        ============================================== 
        --> */}
      <PortfolioGallery5 />

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      <CallToAction />

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default PortfolioV5;