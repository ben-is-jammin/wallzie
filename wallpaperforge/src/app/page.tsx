import ExportPanel from '../components/ExportPanel'
import SettingsSidebar from '../components/SettingsSidebar'

export default function Home() {
  return (
    <main className="min-h-screen flex">
      <SettingsSidebar />
      <div className="flex-1 flex items-center justify-center p-4">
        <ExportPanel />
      </div>
    </main>
  )
}
