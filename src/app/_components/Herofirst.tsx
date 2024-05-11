"use client";

import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { FC } from "react";
import { sendEmail } from "../../../utils/send-email";
import { useForm } from "react-hook-form";
import { Lottie } from "@/hooks/Lottie";
import { useRouter } from "next/navigation";
import Image from "next/image";
export type FormData = {
  name: string;
  city: string;
  phonenumber: number;
};

export default function Herofirst() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    try {
      await sendEmail(data);
      router.push("/success"); // Navigate to the /success route upon successful submission
    } catch (error) {
      console.error("Error:", error);
      // Handle error if sending email fails
    }
  }
  return (
    <div>
      {/* <!-- Hero --> */}
      <div id="home" className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* <!-- Grid --> */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="mt-5">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Physio Home Fit <br />
              <span className="text-blue-600">
                Expert Physiotherapy care at your doorstep
              </span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              Physiotherapy at your doorstep. Expert care, unmatched
              convenience. Heal better, in familiar surroundings.
            </p>

            {/* <!-- Buttons --> */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    Book Now
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogTitle>Book Your Home Visit</DialogTitle>

                  <div>
                    <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                      <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                        {/* <div className="text-center">
                          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                            Book Your Home Visit
                          </h1>
                          <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                            Book your home visits using simple steps
                          </p>
                        </div> */}

                        <div className="mt-5">
                          <div className="grid grid-cols-1 gap-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="mb-5">
                                <label
                                  htmlFor="name"
                                  className="mb-3 block text-base font-medium text-gray-500"
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  placeholder="Full Name"
                                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                                  {...register("name", { required: true })}
                                />
                              </div>

                              <div className="mb-5">
                                <label
                                  htmlFor="phonenumber"
                                  className="mb-3 block text-base font-medium text-gray-500"
                                >
                                  Phone Number
                                </label>
                                <input
                                  type="text"
                                  placeholder="123456789"
                                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                                  {...register("phonenumber", {
                                    required: true,
                                  })}
                                />
                              </div>
                              <div className="mb-5">
                                <label
                                  htmlFor="city"
                                  className="mb-3 block text-base font-medium text-gray-500"
                                >
                                  Select City
                                </label>
                                <select
                                  id="city"
                                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                                  {...register("city", { required: true })}
                                >
                                 
                                  <option value="">Select a city</option>
                                  <option value="Kankanady">Kankanady</option>
                                  <option value="Hampankatta">
                                    Hampankatta
                                  </option>
                                  <option value="Falnir">Falnir</option>
                                  <option value="Jeppu">Jeppu</option>
                                  <option value="StateBank">StateBank</option>
                                  <option value="Kavoor">Kavoor</option>
                                  <option value="Marnamikatta">
                                    Marnamikatta
                                  </option>
                                  <option value="Pandeshwar">Pandeshwar</option>
                                  <option value="ShakthiNagar">
                                    ShakthiNagar
                                  </option>
                                  <option value="Padil">Padil</option>
                                  <option value="Bikarnakatte">
                                    Bikarnakatte
                                  </option>
                                  <option value="Nanthoor">Nanthoor</option>
                                  <option value="KPT">KPT</option>
                                  <option value="Kadri">Kadri</option>
                                  <option value="BuntsHostel">
                                    BuntsHostel
                                  </option>
                                  <option value="Pumpwell">Pumpwell</option>
                                  <option value="Jyothi">Jyothi</option>
                                </select>
                              </div>
                              <div>
                                <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
                                  Submit
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            {/* <!-- End Buttons --> */}

            {/* <!-- Review --> */}

            {/* <!-- End Review --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="relative ms-4">
            {/* <img
           className="w-full rounded-md"
              src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
              alt="Image Description"
            /> */}
            {/* <Image
             className="w-full rounded-md"
            src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
            width={700}
            height={800}
            alt="hero image"
            /> */}
            <Lottie
              src={
                // "https://lottie.host/d275ed70-8cce-446a-9522-681a5c4e4fbb/WMNyLoc54D.json"
                " https://lottie.host/30f1bd96-0240-4af3-a1bf-7e8945128f4a/Z80Hye68ld.json"
              }
            />
            {/* <Image
          src="/image/herophysio.jpeg"
          className="w-full rounded-md"
          height='500'
          width='500'
          alt="heroo"
            /> */}

            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

            {/* <!-- SVG--> */}
            <div className="absolute bottom-0 start-0">
              <svg
                className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900"
                width="630"
                height="451"
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="531"
                  y="352"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="140"
                  y="352"
                  width="106"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="482"
                  y="402"
                  width="64"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="433"
                  y="402"
                  width="63"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="384"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="328"
                  width="50"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="303"
                  width="49"
                  height="58"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="392"
                  width="49"
                  height="59"
                  fill="currentColor"
                />
                <rect
                  x="44"
                  y="402"
                  width="66"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="234"
                  y="402"
                  width="62"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="334"
                  y="303"
                  width="50"
                  height="49"
                  fill="currentColor"
                />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect
                  x="482"
                  y="123"
                  width="49"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="507"
                  y="124"
                  width="49"
                  height="24"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="49"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* <!-- End SVG--> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Hero --> */}
    </div>
  );
}
