export const PrayerTimesScreen = () => {
  return (
    <div
      id="webcrumbs"
      className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-gray-100 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 rounded-xl overflow-hidden shadow-lg w-full h-full max-w-full max-h-full">
        {/* Sol Bölüm - Namaz Vakitleri */}
        <div className="md:col-span-6 p-6 border-b md:border-b-0 md:border-r border-gray-200 overflow-hidden">
          <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
            <div className="text-emerald-800 font-semibold text-lg">
              Recep 18, 1446
            </div>
            <div className="text-4xl font-extrabold text-emerald-800">
              17:25
            </div>
            <div className="text-emerald-800 font-semibold text-lg">
              Cmt, 18 Ocak 2025
            </div>
          </div>

          <div className="grid grid-cols-3 font-bold text-gray-600 mb-3 border-b border-gray-200 pb-3 text-base">
            <div>Namaz</div>
            <div>Ezan</div>
            <div>İkâmet</div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-3 items-center p-3 hover:bg-amber-50 transition-colors rounded-lg text-base min-h-[44px]">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-xl">
                  <i className="fa-solid fa-sun"></i>
                </span>
                <span className="font-semibold">Sabah</span>
              </div>
              <div>04:21</div>
              <div>05:00</div>
            </div>
            <div className="grid grid-cols-3 items-center p-3 hover:bg-amber-50 transition-colors rounded-lg text-base min-h-[44px]">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-xl">
                  <i className="fa-solid fa-sun"></i>
                </span>
                <span className="font-semibold">Öğle</span>
              </div>
              <div>12:21</div>
              <div>13:21</div>
            </div>
            <div className="grid grid-cols-3 items-center p-3 hover:bg-amber-50 transition-colors rounded-lg text-base min-h-[44px]">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-xl">
                  <i className="fa-solid fa-sun"></i>
                </span>
                <span className="font-semibold">İkindi</span>
              </div>
              <div>15:30</div>
              <div>16:30</div>
            </div>
            <div className="grid grid-cols-3 items-center p-3 bg-amber-100 rounded-lg text-base min-h-[44px]">
              <div className="flex items-center gap-2">
                <span className="text-amber-500 text-xl">
                  <i className="fa-solid fa-moon"></i>
                </span>
                <span className="font-semibold text-emerald-800">Akşam</span>
              </div>
              <div className="font-semibold">17:30</div>
              <div className="font-semibold">17:35</div>
            </div>
            <div className="grid grid-cols-3 items-center p-3 hover:bg-amber-50 transition-colors rounded-lg text-base min-h-[44px]">
              <div className="flex items-center gap-2">
                <span className="text-amber-500 text-xl">
                  <i className="fa-solid fa-moon"></i>
                </span>
                <span className="font-semibold">Yatsı</span>
              </div>
              <div>19:49</div>
              <div>20:00</div>
            </div>
          </div>
        </div>

        {/* Sağ Bölüm - Cami Bilgisi */}
        <div className="md:col-span-6 flex flex-col overflow-hidden">
          <div className="p-6 flex items-center justify-center flex-col border-b border-gray-200">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-emerald-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                alt="Cami"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-1">
              Seyyid Halid Göyük Camii
            </h2>
            <div className="h-px w-56 bg-gray-300 my-3"></div>
            <div className="flex items-center gap-2 text-amber-600 text-lg">
              <i className="fa-solid fa-sun text-amber-500"></i>
              <span>Güneş: 07:00</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col p-6 bg-emerald-50 overflow-hidden">
            <div className="text-center mb-1 font-bold text-emerald-800 text-xl">
              AKŞAM
            </div>
            <div className="text-center flex items-center justify-center gap-2 mb-2">
              <span className="material-symbols-outlined text-emerald-700 text-2xl">
                person
              </span>
              <div className="text-5xl font-extrabold text-emerald-800">
                -05<span className="animate-pulse">:</span>05
                <span className="animate-pulse">:</span>00
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4 text-emerald-700 text-lg">
              <span className="material-symbols-outlined">mosque</span>
              <span className="font-semibold">17:35</span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-amber-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-1 text-amber-600 text-base">
                  <i className="fa-solid fa-sun"></i>
                  <span>Cuma 1</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-amber-500 font-semibold text-base">
                  <i className="fa-solid fa-clock text-xs"></i>
                  <span>12:30</span>
                </div>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-1 text-amber-600 text-base">
                  <i className="fa-solid fa-sun"></i>
                  <span>Cuma 2</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-amber-500 font-semibold text-base">
                  <i className="fa-solid fa-clock text-xs"></i>
                  <span>13:45</span>
                </div>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-1 text-amber-600 text-base">
                  <i className="fa-solid fa-sun"></i>
                  <span>Cuma 3</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-amber-500 font-semibold text-base">
                  <i className="fa-solid fa-clock text-xs"></i>
                  <span>14:30</span>
                </div>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-1 text-amber-600 text-base">
                  <i className="fa-solid fa-sun"></i>
                  <span>Cuma 4</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-amber-500 font-semibold text-base">
                  <i className="fa-solid fa-clock text-xs"></i>
                  <span>14:45</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-emerald-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mr-4">
                <p className="text-emerald-800 font-semibold text-base">
                  Caminizle Bağlantıda Kalın
                </p>
                <p className="text-emerald-700 text-sm">
                  Hemen Uygulamayı İndirmek İçin Kodu Okutun!
                </p>
              </div>
              <div className="w-20 h-20">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/app"
                  alt="QR Kod"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Sonraki: "Günün hava durumu tahmini bölümü eklenecek" */}
      </div>
    </div>
  );
};

export default PrayerTimesScreen;
