import Image from "next/image";

function HomeSection() {
  return (
    <section className="">
      <div className="bg-introBg py-2 mx-auto px-6 text-center rounded-3xl max-w-sm mobile_lg:px-2">
        <p className=" text-introText drop-shadow-2xl mobile_lg:text-xs">
          Attendance management made seamless
        </p>
      </div>
      <div className="mt-10 text-center">
        <h1 className="text-5xl  font-semibold leading-relaxed  tablet_max:leading-snug mobile_lg:text-4xl mobile_sm:text-3xl">
          Track work activities within company spaces,ensure optimal efficiency.
        </h1>
        <p className="pt-6 mx-auto max-w-2xl mobile_lg:text-sm mobile_sm:text-xs">
          Transform your environment into a hub of productivity and creativity,
          ensuring each task propels you towards unparalleled success. Embrace
          the future of work today and elevate your team's performance to new
          heights!
        </p>
      </div>
      <div className="flex justify-center pt-6">
        <Image
          src="/home-img.png"
          width={787}
          height={525}
          alt="task management"
        />
      </div>
    </section>
  );
}

export default HomeSection;
