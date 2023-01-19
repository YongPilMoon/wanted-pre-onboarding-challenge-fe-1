export function Spinner() {
  return (
    <div className="flex items-center justify-center">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-8 h-8 border-4 border-emerald-300 border-solid rounded-full animate-spin"
      ></div>
    </div>
  );
}
