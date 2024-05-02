import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
export default function Contents() {
  return (
    <div id="content" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What is physiotherapy?
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Physiotherapy, also referred to as physical therapy, is an
                allied health profession that makes use of bio-mechanics or
                kinesiology, manual therapy, exercise therapy, and
                electrotherapy, to help patients restore, maintain and increase
                their physical mobility, strength, and function.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          {/* <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          /> */}
          <Image
            src="/image/physio.jpg" // path to your image file
            alt="physio"
            width={700} // desired width of the image
            height={700} // desired height of the image
          />
          <Image
            src="/image/pysio2.jpg" // path to your image file
            alt="physio"
            width={600} // desired width of the image
            height={300} // desired height of the image
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              {/* <p>
                Physiotherapists are better able to help patients regain
                mobility, as they have a better understanding of how the body
                works and are trained in clinical skills to assess, diagnose and
                treat disabilities. Physiotherapists can help patients recover
                from injuries and disabilities ranging from back pain, neck
                pain, knee pain to ligament issues.
              </p> */}
              <div className="mt-3">
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  What Are The Benefits Of Physiotherapy Services At Home?
                </h2>
              </div>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Convenience:
                    </strong>{" "}
                    Receive professional care without leaving your home, making
                    it easier to integrate therapy into your daily routine.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Personalized Care:
                    </strong>{" "}
                    Tailored treatment plans that address your specific
                    rehabilitation needs, enhancing the effectiveness of each
                    session.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Cost-Effective:
                    </strong>{" "}
                    Save on travel expenses and receive affordable treatment
                    plans without compromising on quality.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Faster Healing Process:
                    </strong>{" "}
                    The comfort and familiarity of your home environment can
                    facilitate a quicker recovery.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Our affordable and reliable home services are designed to
                eliminate the stress and inconvenience typically associated with
                traditional physiotherapy treatment. Say goodbye to the
                challenges of receiving effective therapy; with our at-home
                services, we bring the path to recovery directly to you.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                When Do You Need A Physiotherapist From Us?
              </h2>
              <p className="mt-6">
                Call it the bane of the modern lifestyle but knee pain, back
                pain, and neck strain have become a part and parcel of life.
                When a certain type of pain does not subdue over a period of
                time and you experience it after doing a particular movement,
                then it is better to see a physiotherapist or get the service of
                a physiotherapist at home. You can also benefit from our home
                physiotherapy service for a convenient treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
