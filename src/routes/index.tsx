import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'
import NextSection from '@/components/NextSection'
import LenisProvider from '@/components/lenis-provider'
import Nav from '@/components/nav'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <LenisProvider>
        <Nav />
        <Header />
        <NextSection />
      </LenisProvider>
    </>
  )
}
