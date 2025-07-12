export const PrayerTimesScreen = () => {
  return (
    <div
      id="webcrumbs"
      className="min-h-screen min-w-full flex items-center justify-center bg-gradient-to-br from-emerald-50 to-gray-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 rounded-xl overflow-hidden shadow-lg w-full h-full max-w-screen-3xl">
        {/* Left Section - Prayer Times */}
        <div className="md:col-span-6 p-8 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-6">
            <div className="text-emerald-800 font-semibold text-xl">
              Rajab 18, 1446
            </div>
            <div className="text-5xl font-extrabold text-emerald-800">
              05:25 PM
            </div>
            <div className="text-emerald-800 font-semibold text-xl">
              Sat,18 Jan 2025
            </div>
          </div>

          <div className="grid grid-cols-3 font-bold text-gray-600 mb-4 border-b border-gray-200 pb-4 text-lg">
            <div>Salah</div>
            <div>Azan</div>
            <div>Iqama</div>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-3 items-center p-4 hover:bg-amber-50 transition-colors rounded-lg text-lg min-h-[56px]">
              <div className="flex items-center gap-3">
                <span className="text-amber-400 text-2xl">
                  <i className="fa-solid fa-sun"></i>
                </span>
                <span className="font-semibold">Fajar</span>
              </div>
              <div>04:21 AM</div>
              <div>05:00 AM</div>
            </div>

            <div className="grid grid-cols-3 items-center p-4 hover:bg-amber-50 transition-colors rounded-lg text-lg min-h-[56px]">
              <div className="flex items-center gap-3">
                <span className="text-amber-400 text-2xl">
                  <i className="fa-solid fa-sun"></i>
                </span>
                <span className="font-semibold">Dhur</span>
              </div>
              <div>12:21 PM</div>
              <div>01:21 PM</div>
            </div>

            <div className="grid grid-cols-3 items-center p-4 hover:bg-amber-50 transition-colors rounded-lg text-lg min-h-[56px]">
              <div className="flex items-center gap-3">
                <span className="text-amber-400 text-2xl">
                  <i className="fa-solid fa-sun"></i>
                </span>
                <span className="font-semibold">Asr</span>
              </div>
              <div>03:30 PM</div>
              <div>04:30 PM</div>
            </div>

            <div className="grid grid-cols-3 items-center p-4 bg-amber-100 rounded-lg text-lg min-h-[56px]">
              <div className="flex items-center gap-3">
                <span className="text-amber-500 text-2xl">
                  <i className="fa-solid fa-moon"></i>
                </span>
                <span className="font-semibold text-emerald-800">Maghrib</span>
              </div>
              <div className="font-semibold">05:30 PM</div>
              <div className="font-semibold">05:35 PM</div>
            </div>

            <div className="grid grid-cols-3 items-center p-4 hover:bg-amber-50 transition-colors rounded-lg text-lg min-h-[56px]">
              <div className="flex items-center gap-3">
                <span className="text-amber-500 text-2xl">
                  <i className="fa-solid fa-moon"></i>
                </span>
                <span className="font-semibold">Isha</span>
              </div>
              <div>07:49 PM</div>
              <div>08:00 PM</div>
            </div>
          </div>
        </div>

        {/* Right Section - Masjid Info */}
        <div className="md:col-span-6 flex flex-col">
          <div className="p-8 flex items-center justify-center flex-col border-b border-gray-200">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-emerald-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                alt="Mosque"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-700 mb-2">
              Islamic Center of Irving
            </h2>
            <div className="h-px w-64 bg-gray-300 my-4"></div>
            <div className="flex items-center gap-3 text-amber-600 text-xl">
              <i className="fa-solid fa-sun text-amber-500"></i>
              <span>Sunrise : 07:00 AM</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col p-8 bg-emerald-50">
            <div className="text-center mb-2 font-bold text-emerald-800 text-2xl">
              MAGHRIB
            </div>
            <div className="text-center flex items-center justify-center gap-4 mb-4">
              <span className="material-symbols-outlined text-emerald-700 text-3xl">
                person
              </span>
              <div className="text-6xl font-extrabold text-emerald-800">
                -05<span className="animate-pulse">:</span>05
                <span className="animate-pulse">:</span>00
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 mb-6 text-emerald-700 text-xl">
              <span className="material-symbols-outlined">mosque</span>
              <span className="font-semibold">05:35 PM</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-amber-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-2 text-amber-600 text-lg">
                  <i className="fa-solid fa-sun"></i>
                  <span>Jummah 1</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-amber-500 font-semibold text-lg">
                  <i className="fa-solid fa-clock text-xs"></i>
                  <span>12:30 PM</span>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-2 text-amber-600 text-lg">
                  <i className="fa-solid fa-sun"></i>
                  <span>Jummah 2</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-amber-500 font-semibold text-lg">
                  <i className="fa-solid fa-clock text-xs"></i>
                  <span>01:45 PM</span>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-2 text-amber-600 text-lg">
                  <i className="fa-solid fa-sun"></i>
                  <span>Jummah 3</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-amber-500 font-semibold text-lg">
                  <i className="fa-solid fa-clock text-xs"></i>
                  <span>02:30 PM</span>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center gap-2 text-amber-600 text-lg">
                  <i className="fa-solid fa-sun"></i>
                  <span>Jummah 4</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-amber-500 font-semibold text-lg">
                  <i className="fa-solid fa-clock text-xs"></i>
                  <span>02:45 PM</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center bg-emerald-100 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mr-6">
                <p className="text-emerald-800 font-semibold text-lg">
                  Stay Connected With Your Masjid
                </p>
                <p className="text-emerald-700 text-base">
                  Scan To Download App Now!
                </p>
              </div>
              <div className="w-24 h-24">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/app"
                  alt="QR Code"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Next: "Add weather forecast section for the day" */}
      </div>
    </div>
  );
};

export default PrayerTimesScreen;
