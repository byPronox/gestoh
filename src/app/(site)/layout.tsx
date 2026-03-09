export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col flex-1">
      <div className="isolate flex-1 flex flex-col">{children}</div>
    </div>
  );
}
