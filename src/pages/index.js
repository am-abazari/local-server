
import Menu from "../components/Menu"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import download from "../assets/icons/download.svg"
import Image from "next/image";
export default function Home() {


    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            alert('Please select a file first');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                setShow(true)
            } else {
            }
        } catch (err) {
            console.error('Error:', err);
        }
        setFile(null);
    };
    const router = useRouter();

    const handlerShow = () => {
        setShow(false);
        router.reload();
    }
    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await fetch('/api/download');
                if (response.ok) {
                    const data = await response.json();
                    setData(data.files);
                } else {
                    console.error('Failed to fetch files');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        fetchFiles();

    }, []);

    return (
        <main>
            <div className="lg:w-5/6 w-11/12 p-8 bg-white rounded-xl shadow-lg  m-auto min-h-x lg:mt-10 mt-5 text-sm lg:text-lg">
                <Menu which={0} />
                <div className="text-center pt-12 border-t-2 mt-10">
                    <h1 className="lg:text-2xl text-base max-w-full text-main font-bold ">Upload</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center justify-center w-full mt-10 ">
                            <label htmlFor="file" className="flex flex-col items-center justify-center w-150 h-56 border-2 border-main border-dashed rounded-lg cursor-pointer  ">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-main dark:text-main" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-main dark:text-main"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-main dark:text-main">SVG, PNG, JPG or ...</p>
                                </div>
                                <input required onChange={handleChange} multiple id="file" type="file" className="hidden" />
                            </label>

                        </div>
                        <button type="submit" className="flex items-center justify-center w-80 m-auto h-12 rounded-xl shadow-md mt-10 text-white bg-main max-w-full ">Upload</button>
                    </form>
                </div>

                <div className="text-center mt-24 pt-12 border-t-2">
                    <h1 className="text-2xl text-main font-bold lg:text-2xl text-base">Files</h1>
                    {(function () {
                        let out = [];
                        for (let i = 0; i < data.length; i++) {
                            out.push(<Link key={i} download className="flex justify-center relative max-w-150 m-auto mt-6 bg-slate-300 shadow-lg pt-4 pb-4 rounded-lg" href={`/api/files/${data[i]}`}><p className="">{data[i].split('12845')[1]}</p> <Image className="w-7 block absolute right-3" src={download} /></Link>)
                        }
                        return out.reverse();
                    })()}
                </div>
            </div>

            <div className={`w-full flex items-center justify-center h-screen bg-gray-100 top-0 left-0 ${show ? 'fixed' : 'hidden'}`} >
                <div className="bg-main p-10 rounded-lg shadow-2xl md:w-200 w-96 text-center text-white font-bold text-lg ">
                    <h1 className="text-xl">File uploaded Successfully</h1>
                    <p className="text-sm mt-5">You can Download the File From below</p>
                    <button onClick={handlerShow} className="block mt-20 m-auto bg-white text-main w-60 pt-3 pb-3 rounded-lg shadow-lg"> OK</button>
                </div>
            </div>
        </main>
    );
}