import React from 'react'
import {
    Earned,
  } from "@/shared/data/dashboards/crmdata"
import Link from 'next/link'

const ProfitEarned = () => {
  return (
    <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
    <div className="box">
      <div className="box-header justify-between">
        <div className="box-title">Profit Earned</div>
        <div className="hs-dropdown ti-dropdown">
          <Link href="#!" className="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50"
            aria-expanded="false">
            View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
          </Link>
          <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
              href="#!">Today</Link></li>
            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
              href="#!">This Week</Link></li>
            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
              href="#!">Last Week</Link></li>
          </ul>
        </div>
      </div>
      <div className="box-body !py-0 !ps-0">
        <div id="crm-profits-earned">
          <Earned />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfitEarned