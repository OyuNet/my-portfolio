import React from "react";

export default function Header() {
    return (
        <div className="flex gap-8 justify-center items-center m-5 p-5">
            <a className="font-bold text-green-600 hover:text-green-300 text-xl" href="/">Ana Sayfa</a>
            <a className="font-bold text-green-600 hover:text-green-300 text-xl" href="/projelerim">Projelerim</a>
            <a className="font-bold text-green-600 hover:text-green-300 text-xl" href="/hakkimda">Hakkımda</a>
        </div>
    );
}