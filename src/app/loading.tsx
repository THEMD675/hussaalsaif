export default function Loading() {
  return (
    <div className="min-h-screen bg-[#fafcfe] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-10 h-10 border-2 border-[#89BBdf]/30 border-t-[#89BBdf] rounded-full animate-spin" />
        <p className="mt-4 text-gray-400 text-sm font-medium tracking-wide">Loading</p>
      </div>
    </div>
  );
}
