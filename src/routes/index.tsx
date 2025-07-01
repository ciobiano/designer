import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'
import NextSection from '@/components/NextSection'
import LenisProvider from '@/components/lenis-provider'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <LenisProvider>
        <Header />
        <NextSection />
      </LenisProvider>
    </>
  )
}
