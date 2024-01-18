import React from "react";

export default function Footer() {
    const CurrentYear = new Date().getFullYear();

    let copyrightText;

    if (CurrentYear > 2024) {
        copyrightText = `©️ 2024 - ${CurrentYear}, bütün hakları saklıdır falan fistan.`
    } else { copyrightText = "©️ 2024, bütün hakları saklıdır falan fistan." }

    return (
        <footer className="mt-auto text-center mx-8 p-4">
            {/* Buraya github'dır, linkedin'dir, tivitır'dır falan ekleyecem efenim en son... */}
            <div className=""></div>

            <div>
                <div className="text-center">Bendeniz, yani Arda Yiğit Tok, tarafından Nextjs ve eser miktarda TailwindCSS kullanılarak ❤️ ile geliştirildi.</div>
                <div className="text-center">©️ {CurrentYear}, bütün hakları saklıdır falan fistan.</div>
            </div>
        </footer>
    );
}