export default function Loading() {
  return (
    <div className="min-h-screen bg-[#fafcfe] flex items-center justify-center">
      <div className="animate-pulse">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo-hs.svg" alt="" className="h-14 w-14 rounded-xl" />
      </div>
    </div>
  );
}
