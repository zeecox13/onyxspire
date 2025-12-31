export default function CreatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Creator pages have their own full-screen design without nav/footer
  return <>{children}</>
}
