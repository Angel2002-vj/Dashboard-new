'use client'
import React from 'react'
import { Dealsstatistics } from "@/shared/data/dashboards/crmdata"
import Link from 'next/link'
const DealStatisticTable = () => {
  return (
    <tbody>
    {Dealsstatistics.map((idx) => (
      <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
        <th scope="row" className="!ps-4 !pe-5"><input className="form-check-input" type="checkbox" defaultChecked={idx.checked === 'defaultChecked'}
           value="" aria-label="..." /></th>
        <td>
          <div className="flex items-center font-semibold">
            <span className="!me-2 inline-flex justify-center items-center">
              <img src={idx.src} alt="img"
                className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" />
            </span>{idx.name}
          </div>
        </td>
        <td>{idx.role}</td>
        <td>{idx.mail}</td>
        <td>
          <span
            className={`inline-flex text-${idx.color} !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-${idx.color}/10`}>{idx.location}</span>
        </td>
        <td>{idx.date}</td>
        <td>
          <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
            <Link aria-label="anchor" href="#!"
              className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                className="ri-download-2-line"></i></Link>
            <Link aria-label="anchor" href="#!"
              className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                className="ri-edit-line"></i></Link>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
  )
}

export default DealStatisticTable
