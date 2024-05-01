import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import CalendarIcon from "@/public/icons/CalendarIcon";
import { FaEllipsis } from "react-icons/fa6";

function EventsCard() {
  return (
    <article className="border border-grayNithub rounded-lg my-8">
      <div className="flex justify-between px-5">
        <div className="py-8">
          <div className="flex gap-6">
            <div>
              <Image
                src="/events-img.png"
                width={68}
                height={66}
                alt="event image"
              />
            </div>

            <div className="max-w-md">
              <h3 className="mb-3 font-semibold">Innovate Tech 2024</h3>
              <p className="opacity-60">
                We are excited to have you join us and look forward to an
                engaging and insightful experience.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-10 mr-auto">
            <p className="bg-gray-300 text-gray-500 text-sm ml-1 py-2 px-5 rounded-3xl">
              Tech
            </p>
            <p className="bg-gray-300 text-gray-500 text-sm ml-1 py-2 px-5 rounded-3xl">
              Fintech
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between pt-6 pb-10">
          <div>
            <ul className="flex items-center gap-4">
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

              <li>
                <div className=" text-green border-2 border-green rounded-2xl text-center py-1 px-2  text-sm">
                  Upcoming
                </div>
              </li>
              <li>
                <div className="border-2 border-gray-200 rounded-lg w-fit p-1">
                  <FaEllipsis className="text-2xl" />
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-between  self-end  w-1/2">
            <div className="flex items-center gap-2 w-full">
              <p>130</p>

              <p className="max-w-7">Total Registeration</p>
            </div>
            <div className="border border-gray-400 mx-10" />
            <div className="flex items-center gap-2 w-full  ">
              <p>3months</p>
              <p className="max-w-7">Total days</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default EventsCard;
