import React from 'react'
import Link from 'next/link'
const RecentActivity = () => {
    return (
        <div className="xxl:col-span-12 xl:col-span-6  col-span-12">
            <div className="box">
                <div className="box-header justify-between">
                    <div className="box-title">
                        Recent Activity
                    </div>
                    <div className="hs-dropdown ti-dropdown">
                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
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
                <div className="box-body">
                    <div>
                        <ul className="list-none mb-0 crm-recent-activity">
                            <li className="crm-recent-activity-content">
                                <div className="flex items-start">
                                    <div className="me-4">
                                        <span
                                            className="w-[1.25rem] h-[1.25rem] inline-flex items-center justify-center font-medium leading-[1.25rem] text-[0.65rem] text-primary bg-primary/10 rounded-full">
                                            <i className="bi bi-circle-fill text-[0.5rem]"></i>
                                        </span>
                                    </div>
                                    <div className="crm-timeline-content text-defaultsize">
                                        <span className="font-semibold rtl:ms-1">Update of calendar events
                                            &amp;</span><span><Link href="#!" className="text-primary font-semibold ms-1">
                                                Added new events in next week.</Link></span>
                                    </div>
                                    <div className="flex-grow text-end">
                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">4:45PM</span>
                                    </div>
                                </div>
                            </li>
                            <li className="crm-recent-activity-content">
                                <div className="flex items-start  text-defaultsize">
                                    <div className="me-4">
                                        <span
                                            className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-secondary bg-secondary/10 rounded-full">
                                            <i className="bi bi-circle-fill text-[0.5rem]"></i>
                                        </span>
                                    </div>
                                    <div className="crm-timeline-content">
                                        <span>New theme for <span className="font-semibold">Spruko Website</span> completed</span>
                                        <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Lorem ipsum, dolor sit amet.</span>
                                    </div>
                                    <div className="flex-grow text-end">
                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">3 hrs</span>
                                    </div>
                                </div>
                            </li>
                            <li className="crm-recent-activity-content  text-defaultsize">
                                <div className="flex items-start">
                                    <div className="me-4">
                                        <span
                                            className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-success bg-success/10 rounded-full">
                                            <i className="bi bi-circle-fill  text-[0.5rem]"></i>
                                        </span>
                                    </div>
                                    <div className="crm-timeline-content">
                                        <span>Created a <span className="text-success font-semibold">New Task</span> today <span
                                            className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] text-[0.65rem] inline-flex items-center justify-center font-medium bg-purple/10 rounded-full ms-1"><i
                                                className="ri-add-fill text-purple text-[0.75rem]"></i></span></span>
                                    </div>
                                    <div className="flex-grow text-end">
                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">22 hrs</span>
                                    </div>
                                </div>
                            </li>
                            <li className="crm-recent-activity-content  text-defaultsize">
                                <div className="flex items-start">
                                    <div className="me-4">
                                        <span
                                            className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-pink bg-pink/10 rounded-full">
                                            <i className="bi bi-circle-fill text-[0.5rem]"></i>
                                        </span>
                                    </div>
                                    <div className="crm-timeline-content">
                                        <span>New member <span
                                            className="py-[0.2rem] px-[0.45rem] font-semibold rounded-sm text-pink text-[0.75em] bg-pink/10">@andreas
                                            gurrero</span> added today to AI Summit.</span>
                                    </div>
                                    <div className="flex-grow text-end">
                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">Today</span>
                                    </div>
                                </div>
                            </li>
                            <li className="crm-recent-activity-content  text-defaultsize">
                                <div className="flex items-start">
                                    <div className="me-4">
                                        <span
                                            className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-warning bg-warning/10 rounded-full">
                                            <i className="bi bi-circle-fill text-[0.5rem]"></i>
                                        </span>
                                    </div>
                                    <div className="crm-timeline-content">
                                        <span>32 New people joined summit.</span>
                                    </div>
                                    <div className="flex-grow text-end">
                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">22 hrs</span>
                                    </div>
                                </div>
                            </li>
                            <li className="crm-recent-activity-content  text-defaultsize">
                                <div className="flex items-start">
                                    <div className="me-4">
                                        <span
                                            className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-info bg-info/10 rounded-full">
                                            <i className="bi bi-circle-fill text-[0.5rem]"></i>
                                        </span>
                                    </div>
                                    <div className="crm-timeline-content">
                                        <span>Neon Tarly added <span className="text-info font-semibold">Robert Bright</span> to AI
                                            summit project.</span>
                                    </div>
                                    <div className="flex-grow text-end">
                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">12 hrs</span>
                                    </div>
                                </div>
                            </li>
                            <li className="crm-recent-activity-content  text-defaultsize">
                                <div className="flex items-start">
                                    <div className="me-4">
                                        <span
                                            className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-[#232323] dark:text-white bg-[#232323]/10 dark:bg-white/20 rounded-full">
                                            <i className="bi bi-circle-fill text-[0.5rem]"></i>
                                        </span>
                                    </div>
                                    <div className="crm-timeline-content">
                                        <span>Replied to new support request <i
                                            className="ri-checkbox-circle-line text-success text-[1rem] align-middle"></i></span>
                                    </div>
                                    <div className="flex-grow text-end">
                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">4 hrs</span>
                                    </div>
                                </div>
                            </li>
                            <li className="crm-recent-activity-content  text-defaultsize">
                                <div className="flex items-start">
                                    <div className="me-4">
                                        <span
                                            className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-purple bg-purple/10 rounded-full">
                                            <i className="bi bi-circle-fill text-[0.5rem]"></i>
                                        </span>
                                    </div>
                                    <div className="crm-timeline-content">
                                        <span>Completed documentation of <Link href="#!"
                                            className="text-purple underline font-semibold">AI Summit.</Link></span>
                                    </div>
                                    <div className="flex-grow text-end">
                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">4 hrs</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentActivity