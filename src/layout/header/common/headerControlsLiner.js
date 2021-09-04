import tw from "tailwind-styled-components";

/** Controls svg layout setup */
export const HeaderControlsLiner = tw.div`
   px-2
   flex
   w-16 
   items-center 
   justify-center
   bg-gray-0 
   h-full 
   group
   hover:bg-gray-100
   cursor-pointer 
   `
export const NotificationHeaderControlsLiner = tw(HeaderControlsLiner)`
   relative
   `