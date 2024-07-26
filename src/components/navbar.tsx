import { getSession } from "@auth0/nextjs-auth0";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { ptSerif } from "@/fonts/fonts";
import { cn } from "@/lib/utils";

async function Navbar() {
  const user = await getSession();
  const picture = user?.user.picture;
  const name = user?.user.picture.name;
  return (
    <div className="fixed top-0 inset-x-0 z-50 h-16 bg-[#fafafacc] bg-clip-padding backdrop-filter backdrop-blur-xl flex justify-between items-center sm:h-20 mx-auto w-full px-5 sm:px-auto sm:container sm:max-w-6xl dark:bg-[#050505dd]">
      <p
        className={cn(
          "text-2xl font-semibold uppercase md:text-3xl lg:text-4xl",
          ptSerif.className
        )}
      >
        H
      </p>
      <Avatar className="h-8 w-8 md:h-9 md:w-9 lg:w-10 lg:h-10">
        <AvatarImage src={picture} alt={name} />
        <AvatarFallback className="text-sm+">A</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default Navbar;
