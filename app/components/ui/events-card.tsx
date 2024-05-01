import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import CalendarIcon from "@/public/icons/CalendarIcon";
import { FaEllipsis } from "react-icons/fa6";

interface IEventsCard {
  tag: string;

}
function EventsCard({tag}: IEventsCard) {
  return (
    <article className="border border-grayNithub rounded-lg my-8">
      <div className="flex justify-between mobile_lg:flex-col px-5">
        <div className="py-8">
          <div className="flex mobile_lg:justify-start gap-6">
            <div className="mobile_lg:w-[150px] mobile_lg:h-[150px]">
              <Image
                src="/events-img.png"
                width={68}
                height={66}
                alt="event image"
              />
            </div>

            <div className="max-w-md">
              <h3 className="mb-3 font-semibold">Innovate Tech 2024</h3>
              <p className="opacity-60 mobile_lg:text-[14px]">
                We are excited to have you join us and look forward to an
                engaging and insightful experience.
              </p>
            </div>
            <div className="hidden mobile_lg:flex">
            <FaEllipsis className="text-2xl rotate-90" />
            </div>
          </div>

          <div className="flex mobile_lg:gap-1 gap-4 mobile_lg:mt-4 mt-10 mr-auto">
            <p className="bg-gray-300 text-gray-500 text-sm ml-1 py-2 px-5 rounded-3xl">
              Tech
            </p>
            <p className="bg-gray-300 text-gray-500 text-sm ml-1 py-2 px-5 rounded-3xl">
              Fintech
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between pt-6 mobile_lg:py-4 pb-10">
          <div>
            <ul className="flex mobile_lg:flex-col mobile_lg:items-start items-center gap-4">
              <li>
                <div className="flex items-center gap-2">
                  <div>
                    <FaRegClock className="text-xl opacity-55" />
                  </div>
                  <div>
                    <p className="text-sm">5:00 AM to 9:00 PM</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div>
                    <BiTargetLock className="text-3xl opacity-55" />
                  </div>
                  <div>
                    <p className="text-sm">Cc-hub Yaba, lagos.</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-center gap-2">
                  <div>
                    <CalendarIcon />
                  </div>
                  <div className="text-sm">25th of April 3045</div>
                </div>
              </li>

              <li className=" tablet_md:hidden">
                <div className={` ${tag === "upcoming" ? "text-green" : "text-[#EE7450]"} border-2 ${tag === "upcoming" ? "bg-transparent" : "bg-[#FFBF9D]"} ${tag === "upcoming" ? "border-green" : "border-[#EE7450]"}  rounded-2xl text-center py-1 px-4  text-sm`}>
                  {tag}
                </div>
              </li>
              <li className="tablet_md:hidden">
                <div className="border-2 border-gray-200 rounded-lg w-fit p-1">
                  <FaEllipsis className="text-2xl" />
                </div>
              </li>
            </ul>
          </div>
          <div className="flex w-full mobile_lg:mt-6 justify-end mobile_lg:grid mobile_lg:grid-cols-2 gap-6">
            <div className="flex items-center border-r mobile_lg:border-0 border-r-[#D9D9D9] mobile_lg:w-fit gap-2 w-full">
              <p className="font-semibold mobile_lg:text-[16px]">130</p>

              <p className="max-w-7 text-[15px]">Total <span className="text-[#868686] text-[13px]">Registeration</span></p>
            </div>
            {tag === "past" && <div className="flex items-center border-r border-r-[#D9D9D9] mobile_lg:border-0 mobile_lg:w-fit gap-2 w-full">
              <p className="font-semibold mobile_lg:text-[16px]">130</p>

              <p className="max-w-7 text-[15px]">People <span className="text-[#868686] text-[13px]">Attended</span></p>
            </div>}
            <div className="flex items-center gap-2 w-full  mobile_lg:w-fit">
              <p className="font-semibold mobile_lg:text-[16px]">3months</p>
              <p className="max-w-7 text-[15px]">Total <span className="text-[#868686] text-[13px]">days</span></p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default EventsCard;
