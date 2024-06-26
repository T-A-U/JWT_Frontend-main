import { useState } from 'react'
import { Dialog } from '@headlessui/react'
const navigation = [
    { name: "Profile", href: "#", current: true },
    { name: "Logout", href: "#", current: true },
  ];
const StorePage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
    <div >
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* <div
          className="mt-10 absolute inset-x-0 -top-60 -z-20  transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="mt-10 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56" style={{paddingTop: "0"}}>
          
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
              Welcome to GamesStuff.com!
            </h1>
            <p className="text-white mt-6 text-lg leading-8 text-gray-600">
            "Send more money, we'll send more stuff!"
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <iframe style={{display: "in-line block"}}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wRbLWOyGITc?si=AG_LFqUi3hxggrk3&amp;start=64"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe><br></br>
             

            </div>
          </div>
          <a href="/auth" className="my-10 block rounded-full text-black bg-white px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Login <span aria-hidden="true">→</span>

                
              </a>
        </div>
       
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default StorePage;
