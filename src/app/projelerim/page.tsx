import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const data = [
    {
        "title": "QR Kod ile Sağlıklı Yaşa",
        "desc": "Teknofest yarışma birinciliği alan projem. Gıda okuryazarlığını arttırmaya yönelik geliştirdiğimiz bir mobil uygulama projesiydi."
    },
    {
        "title": "PTS Güvenli Sürüş",
        "desc": "Araç plakalarından araç hakkındaki eksikleri tespit ederek trafik kontrol birimlerine uyarı gönderen projem."
    },
    {
        "title": "Comax",
        "desc": "Aktif olarak geliştirmekte olduğum girişimim. İleride bir gün başarılı olacak, inanıyorum."
    }
]

export default function Projelerim() {
    return (
        <main className="min-h-full">
            <title>Arda Yiğit Tok / Projelerim</title>
            <Header />
            
            <div className="gap-4 mx-4 sm:mx-8 md:mx-16 my-6 flex flex-col">
                {data.map((x, y) => (
                    <div className="bg-gray-200 p-4 sm:p-6 md:p-8 rounded-2xl mb-4" key={y}>
                        <p className="text-xl sm:text-2xl font-bold text-green-600 text-center mb-2">{x.title}</p>
                        <p className="font-semibold text-base sm:text-xl text-center">{x.desc}</p>
                    </div>
                ))}
            </div>

            <Footer />
        </main>
    );
}
