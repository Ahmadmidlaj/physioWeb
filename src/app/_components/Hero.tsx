"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useToast } from "../../components/ui/use-toast";
import { sendMail } from "../lib/mail";
import { useRouter } from "next/navigation";

interface Mail {
  name: string;
  phoneNumber?: string;
  cities: "City1" | "City2" | "City3";
  token: string;
}

// const formSchema = z.object({
//   Name: z.string().min(2, {
//     message: "Name must be at least 2 characters.",
//   }),
//   phoneNumber: z.string().regex(/^\d{10}$/), // Remove .nullable()
//   cities: z.enum(["City1", "City2", "City3"]).default("City1"),
// });
const formSchema = z.object({
  Name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, {
      message: "Phone number must be 10 digits",
    })
    .refine((val) => val.trim() !== "", {
      message: "Phone number is required",
    }),
  cities: z
    .enum(["City1", "City2", "City3"])
    .default("City1")
    .refine((val) => val !== "", {
      message: "Please select a city",
    }),
});
export function HeroSection({ token }: { token: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      phoneNumber: null,
      cities: undefined,
    },
  });

  const toast = useToast();
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (form.formState.isValid) {
      const res = await sendMail({
        name: values.Name,
        phoneNumber: values.phoneNumber,
        cities: values.cities,
        token: token,
      });
  
      if (res) {
        toast.toast({ title: "Mail sent successfully!" });
        router.push("/success");
      } else {
        toast.toast({ title: "Error sending mail!" });
      }
  
      form.reset();
    }
  };

  return (
    <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              Preline: A vision for 2024
            </p>

            <div className="mt-4 md:mb-12 max-w-2xl">
              <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
                Physio-Home-FIt
              </h1>
              <p className="text-gray-600 dark:text-neutral-400">
                We provide you with a test account that can be set up in
                seconds. Our main focus is getting responses to you as soon as
                we can.
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
                    Home Visit
                  </h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    Book your home visits using simple steps
                  </p>
                </div>

                <div className="mt-5">
                  <div className="grid grid-cols-1 gap-4">
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="mt-5"
                      >
                        <FormField
                          control={form.control}
                          name="Name"
                          cas
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="your name"  className="text-black" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="987654321" className="text-black" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cities"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cities</FormLabel>
                              <FormControl>
                                <select
                                  className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                                  placeholder="Select a city"
                                  {...field}
                                  value={field.value || ""}
                                  onChange={(event) =>
                                    field.onChange(event.target.value)
                                  }
                                >
                                  <option value="">Select a city</option>
                                  <option value="City1">City1</option>
                                  <option value="City2">City2</option>
                                  <option value="City3">City3</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="mt-5">
                          <Button
                            type="submit"
                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Book Now
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
// "use client";
// import React, { useState } from "react";
// import { z } from "zod";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// const formSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   phoneNumber: z
//     .string()
//     .length(10, "Phone number must be 10 digits")
//     .regex(/^[0-9]+$/, "Phone number must contain only numbers"),
//   city: z.string().min(1, "City is required"),
// });

// type FormData = z.infer<typeof formSchema>;

// export default function HeroSection() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     phoneNumber: "",
//     city: "",
//   });
//   const [error, setError] = useState<string>("");
//   const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
//   const router = useRouter();

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: e.target.tagName === 'SELECT' ? e.target.value : value,
//     }));
//   };
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Validate the form data using zod
//     const validationResult = formSchema.safeParse(formData);

//     if (!validationResult.success) {
//       // Populate the fieldErrors state with the validation errors
//       const errors: Record<string, string> = validationResult.error.formErrors.fieldErrors.reduce(
//         (acc, error) => {
//           const fieldName = error.path[0] as string;
//           acc[fieldName] = error.message;
//           return acc;
//         },
//         {} as Record<string, string>
//       );
//       setFieldErrors(errors);
//       return;
//     }

//     // Reset fieldErrors state
//     setFieldErrors({});

//     try {
//       // Call the API endpoint to send email
//       await axios.post('/api/sendEmail', formData);

//       // Reset form data on successful submission
//       setFormData({
//         name: '',
//         phoneNumber: '',
//         city: '',
//       });

//       // Redirect to a success page or show a success message
//       // router.push('/');
//       console.log('success');
//     } catch (err) {
//       console.error('Failed to submit form:', err);
//       // Handle error state
//       setError('Failed to submit form. Please try again later.');
//     }
//   };

//   return (
//     <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
//       <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//         {/* grid starts */}

//         <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
//           <div>
//             <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
//               Preline: A vision for 2024
//             </p>

//             <div className="mt-4 md:mb-12 max-w-2xl">
//               <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-neutral-200">
//                 Physio-Home-FIt
//               </h1>
//               <p className="text-gray-600 dark:text-neutral-400">
//                 We provide you with a test account that can be set up in
//                 seconds. Our main focus is getting responses to you as soon as
//                 we can.
//               </p>
//             </div>

//             <blockquote className="hidden md:block relative max-w-sm">
//               <svg
//                 className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-neutral-800"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 aria-hidden="true"
//               >
//                 <path
//                   d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
//                   fill="currentColor"
//                 />
//               </svg>

//               <div className="relative z-10">
//                 <p className="text-xl italic text-gray-800 dark:text-white">
//                   Amazing people to work with. Very fast and professional
//                   partner.
//                 </p>
//               </div>

//               <footer className="mt-3">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0">
//                     <img
//                       className="size-8 rounded-full"
//                       src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
//                       alt="Image Description"
//                     />
//                   </div>
//                   <div className="grow ms-4">
//                     <div className="font-semibold text-gray-800 dark:text-neutral-200">
//                       Ahmad Midlaj
//                     </div>
//                     <div className="text-xs text-gray-500 dark:text-neutral-500">
//                       Founder | WebTech
//                     </div>
//                   </div>
//                 </div>
//               </footer>
//             </blockquote>
//             {/* <!-- End Blockquote --> */}
//           </div>
//           {/* <!-- End Col --> */}

//           <div>
//             {/* <!-- Form --> */}
//             <form onSubmit={handleSubmit}>
//               <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
//                 {/* <!-- Card --> */}
//                 <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
//                   <div className="text-center">
//                     <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
//                       Home Visit
//                     </h1>
//                     <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
//                       Book your home visits using simple steps
//                       <a
//                         className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
//                         href="#"
//                       >
//                         {/* Sign in here */}
//                       </a>
//                     </p>
//                   </div>

//                   <div className="mt-5">
//                     {/* <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700" /> */}

//                     {/* <!-- Grid --> */}
//                     <div className="grid grid-cols-1 gap-4">
//                       {/* <!-- Input Group --> */}
//                       <div>
//                         {/* <!-- Floating Input --> */}
//                         <div className="relative">
//                           <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             // id="hs-hero-signup-form-floating-input-first-name"
//                             className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
//                       focus:pt-6
//                       focus:pb-2
//                       [&:not(:placeholder-shown)]:pt-6
//                       [&:not(:placeholder-shown)]:pb-2
//                       autofill:pt-6
//                       autofill:pb-2"
//                             placeholder="John"
//                           />
//                           <label
//                             // htmlFor="hs-hero-signup-form-floating-input-first-name"
//                             className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
//                         peer-focus:scale-90
//                         peer-focus:translate-x-0.5
//                         peer-focus:-translate-y-1.5
//                         peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
//                         peer-[:not(:placeholder-shown)]:scale-90
//                         peer-[:not(:placeholder-shown)]:translate-x-0.5
//                         peer-[:not(:placeholder-shown)]:-translate-y-1.5
//                         peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
//                           >
//                             Name
//                           </label>
//                           {fieldErrors.name && <p className="text-red-500 text-sm">{fieldErrors.name}</p>}
//                         </div>
//                         {/* <!-- End Floating Input --> */}
//                       </div>
//                       {/* <!-- End Input Group --> */}

//                       {/* <!-- Input Group --> */}
//                       <div>
//                         {/* <!-- Floating Input --> */}
//                         <div className="relative">
//                           <input
//                             type="text"
//                             name="phoneNumber"
//                             value={formData.phoneNumber}
//                             onChange={handleInputChange}
//                             // ... (other input props)
//                             placeholder="987654321"
//                             className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
//                       focus:pt-6
//                       focus:pb-2
//                       [&:not(:placeholder-shown)]:pt-6
//                       [&:not(:placeholder-shown)]:pb-2
//                       autofill:pt-6
//                       autofill:pb-2"
//                           />
//                           <label
//                             // htmlFor="hs-hero-signup-form-floating-input-email"
//                             className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
//                         peer-focus:scale-90
//                         peer-focus:translate-x-0.5
//                         peer-focus:-translate-y-1.5
//                         peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
//                         peer-[:not(:placeholder-shown)]:scale-90
//                         peer-[:not(:placeholder-shown)]:translate-x-0.5
//                         peer-[:not(:placeholder-shown)]:-translate-y-1.5
//                         peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
//                           >
//                             Mobile Number
//                           </label>
//                           {fieldErrors.phoneNumber && <p className="text-red-500 text-sm">{fieldErrors.phoneNumber}</p>}
//                         </div>
//                         {/* <!-- End Floating Input --> */}
//                       </div>

//                       {/* <!-- Input Group --> */}
//                       <div className="relative col-span-full">
//   <div className="relative">
//     <select
//       name="city"
//       value={formData.city}
//       onChange={handleInputChange}
//       id="hs-hero-signup-form-floating-input-city"
//       className="peer p-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
//     >
//       <option value="" disabled>
//         Service Needed in
//       </option>
//       <option value="New York">Valencia</option>
//       {/* Other options... */}
//     </select>
//     <label
//       htmlFor="hs-hero-signup-form-floating-input-city"
//       className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 dark:peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
//     >
//       City
//     </label>
//     {fieldErrors.city && <p className="text-red-500 text-sm">{fieldErrors.city}</p>}
//   </div>
// </div>
//                     </div>

//                     <div className="mt-5 flex items-center">
//                       <div className="flex">
//                         <input
//                           id="remember-me"
//                           name="remember-me"
//                           type="checkbox"
//                           className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
//                         />
//                       </div>
//                       <div className="ms-3">
//                         <label
//                           htmlFor="remember-me"
//                           className="text-sm dark:text-white"
//                         >
//                           *I authorize Physiohomefit representative to contact
//                           me. I understand that this will override the DND
//                           status on my mobile number.
//                           <a
//                             className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
//                             href="#"
//                           ></a>
//                         </label>
//                       </div>
//                     </div>
//                     {/* <!-- End Checkbox --> */}

//                     <div className="mt-5">
//                       {error && <p>{error}</p>}
//                       <button
//                         type="submit"
//                         className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
//                       >
//                         Book Now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- End Card --> */}
//               </div>
//             </form>
//             {/* <!-- End Form --> */}
//           </div>
//           {/* <!-- End Col --> */}
//         </div>
//         {/* <!-- End Grid --> */}
//       </div>
//     </div>
//   );
// }
