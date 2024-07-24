import Menu from "@/components/Menu";
import { useEffect, useState } from "react";

function Text() {

    const [text, setText] = useState('');

    const handlerChange = async (e) => {
        setText(e.target.value)
        try {
            const res = await fetch('/api/textw', {
                method: 'POST',
                body: e.target.value
            });

            if (res.ok) {

            }
        } catch (err) {
            console.error('Error:', err);
        }
    }
    const handlerClear = ()=>{
        setText("");
    }

    useEffect(() => {
        const get = async () => {
            try {
                const response = await fetch('/api/textr');
                if (response.ok) {
                    const data = await response.json();
                    setText(data.message);
                } else {}
            } catch (error) {}
        }; get();
    }, [])


    return (

        <main>
            <div className="w-5/6 p-8 bg-white rounded-xl shadow-lg  m-auto min-h-x mt-10">
                <Menu />
                <div className="text-center pt-12 border-t-2 mt-40">
                    <h1 className="text-2xl text-main font-bold">Text</h1>
                    <textarea value={text} onChange={handlerChange} className="border-2 w-full md:w-150 mt-12 min-h-150 focus:outline-none p-4 rounded-lg" name="text" id="text"></textarea>
                </div>
                <button onClick={handlerClear} className="w-72 bg-main pt-3 pb-3 rounded-xl shadow-lg text-white m-auto block mt-10">Clear</button>
            </div>


        </main>

    );
}

export default Text;