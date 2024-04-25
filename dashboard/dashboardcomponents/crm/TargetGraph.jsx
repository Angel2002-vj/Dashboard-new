import React from 'react'
import Link from 'next/link'
import { Target } from '@/shared/data/dashboards/crmdata'

const TargetGraph = () => {
  return (
   <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
              <div className="box crm-highlight-card">
                <div className="box-body">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-[1.125rem] text-white mb-2">Your target is incomplete</div>
                      <span className="block text-[0.75rem] text-white"><span className="opacity-[0.7] me-1">You have
                        completed</span>
                        <span className="font-semibold text-warning">48%</span> <span className="opacity-[0.7]">of the given
                          target, you can also check your status</span>.</span>
                      <span className="block font-semibold mt-[0.125rem]"><Link className="text-white text-[0.813rem]"
                        href="#!"><u>Click
                          here</u></Link></span>
                    </div>
                    <div>
                      <div id="crm-main">
                        <Target />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default TargetGraph