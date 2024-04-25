import Seo from "../shared/data/layout-components/seo/seo"
import Filter from '../dashboardcomponents/crm/Filter'
import TargetGraph from '../dashboardcomponents/crm/TargetGraph'
import TopDeals from '../dashboardcomponents/crm/TopDeals'
import ProfitEarned from '../dashboardcomponents/crm/ProfitEarned'
import TotalCustomers from '../dashboardcomponents/crm/TotalCustomers'
import TotalRevenue from '../dashboardcomponents/crm/TotalRevenue'
import ConvertionRatio from '../dashboardcomponents/crm/ConversionRatio'
import TotalDeals from '../dashboardcomponents/crm/TotalDeals'
import RevenueAnalytics from '../dashboardcomponents/crm/RevenueAnalytics'
import DealStatistics from '../dashboardcomponents/crm/DealStatistics'
import LeadsBySource from '../dashboardcomponents/crm/LeadsBySource'
import DealsStatus from '../dashboardcomponents/crm/DealsStatus'
import RecentActivity from '../dashboardcomponents/crm/RecentActivity'
import React, { Fragment } from "react"
export default function Home() {
  return (
    <main >
      <div className="container-main w-full bg-red-300">
        <div className="heading">
          <h1 className="font-bold text-2xl text-center ">CRM</h1>
        </div>
        
       <Seo title={"Crm"} />
     <Filter/>
      {/* <div className="grid grid-cols-12 gap-x-6">
        <div className="xxl:col-span-9 xl:col-span-12  col-span-12">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-4 xl:col-span-4  col-span-12"> */}
             <TargetGraph/>

              <TopDeals/>

             <ProfitEarned/>
            </div>
            <div className="xxl:col-span-8  xl:col-span-8  col-span-12">
              <div className="grid grid-cols-12 gap-x-6">
                <TotalCustomers/>
                <TotalRevenue/>
                {/* === */}
                <ConvertionRatio/>
                {/* ========= */}
                <TotalDeals/>
                {/* ======== */}
                <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                <RevenueAnalytics/>
              </div>
              </div>
            </div>
            {/* === */}
            <DealStatistics/>
          {/* </div>
        </div> */}
        <div className="xxl:col-span-3 xl:col-span-12 col-span-12">
          <div className="grid grid-cols-12 gap-x-6">
           <LeadsBySource/>
            <DealsStatus/>
           <RecentActivity/>
          </div>
        </div>
      {/* </div> */}


     {/* </div> */}
    </main>
  );
}
