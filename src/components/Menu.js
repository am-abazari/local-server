import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Menu() {

    
    return (
        <section>
            <div className="flex justify-center">
                <Link className="block bg-main w-72 pt-3 pb-3 mr-5 text-white text-center rounded-lg shadow-lg text-lg font-bold" href={"/"}>File Manager</Link>
                <Link className="block bg-main w-72 pt-3 pb-3 ml-5 text-white text-center rounded-lg shadow-lg text-lg font-bold" href={"/text  "}>Text Manager</Link>
            </div>
        </section >

    );
}
