"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { sendEmail } from "../../../utils/send-email";

export type FormData = {
  name: string;
  city: string;

  phonenumber: number;
};

const HeroSection: FC = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();
  const [isOther, setIsOther] = useState(false);
  const [otherCity, setOtherCity] = useState("");

 async function onSubmit(data: FormData) {
    try {
      const formData = isOther ? { ...data, city: otherCity } : data;
      await sendEmail(formData);
      router.push("/success"); // Navigate to the /success route upon successful submission
    } catch (error) {
      console.error("Error:", error);
      // Handle error if sending email fails
    }
  }
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value;
    setIsOther(selectedCity === "other");
    setOtherCity("");
  };
  return (
    <div
      id="booking"
      className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent"
    >
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400"></p>

            <div className="mt-4 md:mb-12 max-w-2xl">
              <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
                Physio-Home-FIt
              </h1>
              <p className="text-gray-600 dark:text-neutral-400">
                Get expert physiotherapy treatment in the comfort of your home.
                Our qualified physiotherapists provide personalized care and
                rehabilitation services at your doorstep
              </p>
            </div>

            <blockquote className="hidden md:block relative max-w-sm">
              {/* ... */}
            </blockquote>
          </div>

          <div>
            <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
              <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Book Your Home Visit
                  </h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    Book your home visits using simple steps
                  </p>
                </div>

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
                          {...register("phonenumber", { required: true })}
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
                          onChange={handleCityChange}
                        >
                          <option value="">Select a city</option>
                          <option value="Kankanady">Kankanady</option>
                          <option value="Hampankatta">Hampankatta</option>
                          <option value="Falnir">Falnir</option>
                          <option value="Jeppu">Jeppu</option>
                          <option value="StateBank">StateBank</option>
                          <option value="Kavoor">Kavoor</option>
                          <option value="Marnamikatta">Marnamikatta</option>
                          <option value="Pandeshwar">Pandeshwar</option>
                          <option value="ShakthiNagar">ShakthiNagar</option>
                          <option value="Padil">Padil</option>
                          <option value="Bikarnakatte">Bikarnakatte</option>
                          <option value="Nanthoor">Nanthoor</option>
                          <option value="KPT">KPT</option>
                          <option value="Kadri">Kadri</option>
                          <option value="BuntsHostel">BuntsHostel</option>
                          <option value="Pumpwell">Pumpwell</option>
                          <option value="Jyothi">Jyothi</option>
                          <option value="other">Other</option>
                        </select>
                        {isOther && (
                          <input
                            type="text"
                            placeholder="Enter your city"
                            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md mt-4"
                            value={otherCity}
                            onChange={(e) => setOtherCity(e.target.value)}
                          />
                        )}
                      </div>
                      {/* <div className="mb-5">
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
                          <option value="Hampankatta">Hampankatta</option>
                          <option value="Falnir">Falnir</option>
                          <option value="Jeppu">Jeppu</option>
                          <option value="StateBank">StateBank</option>
                          <option value="Kavoor">Kavoor</option>
                          <option value="Marnamikatta">Marnamikatta</option>
                          <option value="Pandeshwar">Pandeshwar</option>
                          <option value="ShakthiNagar">ShakthiNagar</option>
                          <option value="Padil">Padil</option>
                          <option value="Bikarnakatte">Bikarnakatte</option>
                          <option value="Nanthoor">Nanthoor</option>
                          <option value="KPT">KPT</option>
                          <option value="Kadri">Kadri</option>
                          <option value="BuntsHostel">BuntsHostel</option>
                          <option value="Pumpwell">Pumpwell</option>
                          <option value="Jyothi">Jyothi</option>
                        </select>
                      </div> */}
                      <div className="flex justify-center">
                        <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
                          Book Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
