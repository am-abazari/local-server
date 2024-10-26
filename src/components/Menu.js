import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Menu({which}) {

    
    return (
        <section>
            <div className="flex flex-wrap justify-center">
                <Link className={`block text-sm lg:text-lg w-72 max-w-full mb-3 pt-3 pb-3 mr-5 ml-5 text-white text-center rounded-lg shadow-lg bg-main font-bold ${which == 1 && "bg-second"}`} href={"/"}>File Manager</Link>
                <Link className={`block text-sm lg:text-lg w-72 max-w-full mb-3 pt-3 pb-3 ml-5 mr-5 text-white text-center rounded-lg shadow-lg bg-main font-bold ${which == 0 && "bg-second"}`} href={"/text  "}>Text Manager</Link>
            </div>
        </section >

    );
}
