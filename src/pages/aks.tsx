import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
 import Aksshudh from "@/components/containers/project/Aksshudh";
import UxProcess from "@/components/containers/service-details/UxProcess";

function aks() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="AKS Shudham"
            navigation="AKS Shudham"
            parent="Projects"
            parentLink="our-projects"
          />
         <Aksshudh/>
          <UxProcess />
        </Layout>
      );
    };

export default aks
