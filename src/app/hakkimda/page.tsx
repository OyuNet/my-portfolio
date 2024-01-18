import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Hakkimda() {
    const aboutMe_1 = "İzmir Yüksek Teknoloji Enstitüsü Bilgisayar Mühendisliği Bölümü birinci sınıf öğrencisiyim.";
    const aboutMe_2 = "Küçük yaşlardan itibaren yazılıma ve bilgisayarların işleyişine çok ilgiliyim. 2005 doğumluyum, aslen Sakaryalıyım. 2023 senesinde Eyüp Aygar Fen Lisesinden mezun oldum. 2022 senesinde lisede öğrenim görmekte iken geliştirdiğim yazılım neticesinde Teknofest 2022'den yarışma birincisi olarak ayrıldım.";
    const aboutMe_3 = "Şu an birçok yazılım dilinde oturup proje yazacak kadar deneyime sahibim. 2024 itibariyle Web Development alanına meyletmiş olup ilerleyen süreçte farklı alanlara yönelmeyi de planlıyorum. Kısaca herbokolog olmayı gaye edindim. Yolum açık olsun ne diyeyim 🙂";

    return (
        <main className="min-h-screen bg-gray-100">
            <title>Arda Yiğit Tok / Hakkımda</title>
            <Header />

            <div className="flex flex-col items-center justify-center p-8">
                <div className="text-3xl font-semibold mb-6 text-green-600 drop-shadow-2xl">Kimim Ben?</div>
                <div className="text-center mx-auto max-w-screen-md">
                    <p className="mb-4">{aboutMe_1}</p>
                    <p className="mb-4">{aboutMe_2}</p>
                    <p>{aboutMe_3}</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center p-8">
                <div className="text-3xl font-semibold mb-6 text-green-600 drop-shadow-2xl">İletişim 📞</div>
                <p className="text-lg font-medium mb-4">✉️ ayt3354@gmail.com</p>
            </div>

            <Footer />
        </main>
    );
}
