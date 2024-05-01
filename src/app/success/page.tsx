import Navbar from "../_components/Navbar"

export default function Success() {
  return (
    <div>
      <Navbar/>
      <div className="max-w-[50rem] flex flex-col mx-auto my-auto mt-20 size-full items-center justify-center h-screen">
        {/* <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
    <nav className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
      <div className="flex items-center justify-between">
        <a className="flex-none text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600" href="#" aria-label="Brand">Brand</a>
        <div className="sm:hidden">
          <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-700 hover:border-gray-600 font-medium text-gray-300 hover:text-white shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-600 transition-all text-sm dark:border-neutral-700 dark:hover:border-neutral-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      </div>
      <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          <a className="font-medium text-white focus:outline-none focus:ring-1 focus:ring-gray-600" href="#" aria-current="page">Landing</a>
          <a className="font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:ring-neutral-500" href="#">Account</a>
          <a className="font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:ring-neutral-500" href="#">Work</a>
          <a className="font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:ring-neutral-500" href="#">Blog</a>
        </div>
      </div>
    </nav>
  </header> */}

 
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="block text-2xl font-bold text-white sm:text-6xl">
              Thank You
            </h1>
            <p className="mt-3 text-3xl text-gray-300 dark:text-neutral-400">
              We will call you shortly. Thank you for trusting us with your
              health!
            </p>
            <div className="mt-10 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <a
                className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                target="parent"
                href="/"
              >
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
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Go to HomePage
              </a>
            </div>
          </div>
      
        <footer className="mt-auto text-center py-5">
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-400 dark:text-neutral-400">
              Cover template for{" "}
              <a
                className="text-white decoration-2 underline underline-offset-2 font-medium hover:text-gray-200 hover:decoration-gray-400"
                href="../index.html"
              >
                Preline
              </a>
            </p>
          </div> */}
        </footer>
      </div>
    </div>
  );
}
