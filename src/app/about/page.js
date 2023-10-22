import { social_links } from "@/config/social-links";
import React from "react";

export default function page() {
  return (
    <main className='mx-auto w-full max-w-7xl p-16 min-h-screen flex flex-col'>
      <p
        href={"/"}
        className='text-5xl font-bold w-full text-center mb-4 uppercase'
      >
        <p className='text-3xl font-bold w-full text-center mb-4 uppercase'>
          <span className='text-primary'> D</span>aily Life
        </p>
      </p>
      <p className='max-w-3xl mx-auto'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic autem
        reiciendis non, sapiente dolore itaque sit assumenda cumque ab nulla,
        aut aliquid! Laborum alias magni corporis ullam impedit qui! Assumenda
        atque quis, deleniti magnam, a dicta illo sapiente ipsum quia vero saepe
        repellendus iste autem explicabo odio excepturi culpa adipisci? Totam id
        numquam fuga tempora inventore ad dolores harum placeat quae, quos nisi
        facere culpa cumque ducimus hic delectus a? Commodi, ad ipsa. Delectus
        commodi exercitationem est eum alias, minus unde, numquam culpa debitis,
        autem qui quo voluptatum hic accusamus reiciendis cum magnam laudantium
        impedit. Deserunt sit voluptates odio beatae.
      </p>
      <div className='flex gap-2 justify-center items-center bg-primary p-5 max-w-lg mx-auto rounded-[100%] mt-7'>
        {social_links.map((link) => {
          return (
            <a
              key={link.id}
              href={link.link}
              target='_blank'
              className={`cursor-pointe ${
                link.title == "facebook" && "hover:bg-blue-600"
              }
              ${link.title == "twitter" && "hover:bg-blue-400"}
              ${
                link.title == "youtube" && "hover:bg-red-500"
              } p-2 rounded-[100%] transition-colors duration-300`}
            >
              {link.icon}
            </a>
          );
        })}
      </div>
    </main>
  );
}
