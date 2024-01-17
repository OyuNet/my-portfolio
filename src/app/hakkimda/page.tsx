import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Hakkimda() {
    const aboutMe_1 = "İzmir Yüksek Teknoloji Enstitüsü Bilgisayar Mühendisliği Bölümü birinci sınıf öğrencisiyim."
    const aboutMe_2 = "Küçük yaşlardan itibaren yazılıma ve bilgisayarların işleyişine çok ilgiliyim, senelerdir ilgim doğrultusunda kendimi geliştirmekteyim. 2005 doğumluyum, aslen Sakaryalıyım. 2023 senesinde Eyüp Aygar Fen Lisesinden mezun oldum. 2022 senesinde lisede öğrenim görmekte iken geliştirdiğim yazılım neticesinde Teknofest 2022'den yarışma birincisi olarak ayrıldım."
    const aboutMe_3 = "Şu an birçok yazılım dilinde oturup proje yazacak kadar deneyime sahibim, yazıyorum da. Prensip olarak sadece sevdiğim projeleri geliştirmekteyim, keyif almadığım işte başarılı olamayacağım görüşünü benimsedim takdir edersiniz ki. 2024 itibariyle hafiften Web Development alanına meyletmiş olup ilerleyen süreçte farklı alanlara yönelmeyi de planladığımı belirteyim. Kısaca herbokolog olmayı gaye edindim. Bu yolda da çok başarılı olduğumu düşünmekteyim. Yolum açık olsun ne diyeyim :-)"
    return (
        <main>
            <title>Arda Yiğit Tok / Hakkımda</title>
            <Header />
            
            <div className="flex flex-col items-center justify-center pt-12">
                <p className="text-3xl font-semibold">Kimim Ben?</p>
                <p className="p-3 m-3 px-72">{aboutMe_1}</p>
                <p className="p-3 m-3 px-72">{aboutMe_2}</p>
                <p className="p-3 m-3 px-72">{aboutMe_3}</p>
            </div>

            <div className="flex flex-col items-center justify-center pt-12">
                <p className="text-3xl font-semibold">İletişim 📞</p>
                <p className="p-3 m-3 px-72">✉️ ayt3354@gmail.com</p> {/* Kurumsal mail adresine geçiş yapacağım da ne zaman??? */}
            </div>

            <Footer />
        </main>
    );
}